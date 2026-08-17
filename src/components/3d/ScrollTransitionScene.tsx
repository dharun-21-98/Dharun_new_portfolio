"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, ContactShadows, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { HeroParticles } from "./HeroParticles";
import { Code, Database, Cloud, ChartLineUp, PenNib, DeviceMobile, Stack, Package } from "@phosphor-icons/react";
import { Html } from "@react-three/drei";

const ICONS = [
  { icon: Code, color: "#3b82f6" }, 
  { icon: Database, color: "#10b981" }, 
  { icon: Cloud, color: "#f59e0b" }, 
  { icon: ChartLineUp, color: "#8b5cf6" }, 
  { icon: PenNib, color: "#ec4899" }, 
  { icon: DeviceMobile, color: "#14b8a6" }, 
  { icon: Stack, color: "#f43f5e" }, 
  { icon: Package, color: "#84cc16" }, 
];

function BillboardHtml({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });
  return (
    <group ref={ref}>
      <Html center transform={false}>
        {children}
      </Html>
    </group>
  );
}

function OrbitingIcons({ radius = 3.8, speed = 0.15 }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {ICONS.map((item, i) => {
        const angle = (i / ICONS.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 2) * 0.5; 
        
        return (
          <group key={i} position={[x, y, z]}>
            <BillboardHtml>
              <div 
                className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel shadow-2xl transition-transform hover:scale-125 pointer-events-auto"
                style={{ color: item.color }}
              >
                <item.icon size={28} weight="duotone" />
              </div>
            </BillboardHtml>
          </group>
        );
      })}
    </group>
  );
}

export function ScrollTransitionScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  const mesh1Ref = useRef<THREE.Mesh>(null); // Hero: Icosahedron
  const mesh2Ref = useRef<THREE.Mesh>(null); // Projects: TorusKnot
  const mesh3Ref = useRef<THREE.Mesh>(null); // Experience: Sphere
  const mesh4Ref = useRef<THREE.Mesh>(null); // About: Octahedron

  const isDark = true;
  const [scrollProgress, setScrollProgress] = useState(0);

  // Use a simple scroll listener to update progress without framer-motion dependency
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Global group movement based on mouse to keep it interactive
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.5 + t * 0.1,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.5,
      0.05
    );

    const levels = [
      { ref: mesh1Ref, activeRange: [0, 0.25] },
      { ref: mesh2Ref, activeRange: [0.25, 0.5] },
      { ref: mesh3Ref, activeRange: [0.5, 0.75] },
      { ref: mesh4Ref, activeRange: [0.75, 1.0] },
    ];

    levels.forEach((level, index) => {
      if (!level.ref.current) return;
      
      const [start, end] = level.activeRange;
      const center = (start + end) / 2;
      const dist = Math.abs(scrollProgress - center);
      const maxDist = 0.25; 
      
      let weight = 1 - Math.min(dist / maxDist, 1);
      weight = weight * weight * (3 - 2 * weight);

      const targetScale = weight * 1.5;
      level.ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      level.ref.current.rotation.z = t * (0.2 + index * 0.1);
      level.ref.current.rotation.y += 0.01;
    });
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <directionalLight position={[10, 10, 10]} intensity={isDark ? 1 : 1.5} />
      
      {/* 3D Particles for Hero / Recruiter section */}
      <group visible={scrollProgress < 0.4}>
        <HeroParticles />
      </group>
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          {/* Level 1: Hero - Icosahedron */}
          <group ref={mesh1Ref as any} scale={0}>
            <mesh>
              <icosahedronGeometry args={[1.5, 0]} />
              <MeshTransmissionMaterial
                backside
                samples={4}
                resolution={256}
                thickness={0.5}
                chromaticAberration={0.1}
                anisotropy={0.3}
                distortion={0.3}
                distortionScale={0.5}
                temporalDistortion={0.1}
                clearcoat={1}
                attenuationColor={isDark ? "#00E0BA" : "#0f172a"}
                attenuationDistance={3}
                color="#00E0BA"
                emissive="#00A388"
                roughness={0.1}
                metalness={0.8}
                transmission={0.9}
                ior={1.5}
              />
            </mesh>
            <OrbitingIcons radius={3.8} speed={0.15} />
          </group>

          {/* Level 2: Projects - TorusKnot */}
          <mesh ref={mesh2Ref} scale={0}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              resolution={256}
              thickness={2}
              chromaticAberration={0.3}
              anisotropy={0.5}
              distortion={0.5}
              distortionScale={1}
              temporalDistortion={0.2}
              clearcoat={1}
              attenuationDistance={1.2}
              attenuationColor={isDark ? "#3b82f6" : "#2563eb"}
              color="#ffffff"
            />
          </mesh>

          {/* Level 3: Experience - Sphere */}
          <mesh ref={mesh3Ref} scale={0}>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              resolution={256}
              thickness={1.5}
              chromaticAberration={0.5}
              anisotropy={0.1}
              distortion={0.8}
              distortionScale={0.3}
              temporalDistortion={0.4}
              clearcoat={1}
              attenuationDistance={1.2}
              attenuationColor={isDark ? "#10b981" : "#059669"}
              color="#ffffff"
            />
          </mesh>

          {/* Level 4: About - Octahedron */}
          <mesh ref={mesh4Ref} scale={0}>
            <octahedronGeometry args={[1.5, 0]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              resolution={256}
              thickness={2}
              chromaticAberration={0.2}
              anisotropy={0.4}
              distortion={0.2}
              distortionScale={0.5}
              temporalDistortion={0.1}
              clearcoat={1}
              attenuationDistance={1.2}
              attenuationColor={isDark ? "#ec4899" : "#db2777"}
              color="#ffffff"
            />
          </mesh>
        </Float>
      </group>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-x={-Math.PI / 2} position={[0, -5, 0]} scale={[10, 10, 1]} />
        </group>
      </Environment>
      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color={isDark ? "#000000" : "#1e293b"} />
    </>
  );
}
