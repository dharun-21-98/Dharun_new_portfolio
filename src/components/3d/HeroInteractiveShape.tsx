"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment, MeshTransmissionMaterial, Html } from "@react-three/drei";
import * as THREE from "three";
import { Code, Database, Cloud, ChartLineUp, PenNib, DeviceMobile, Stack, Package } from "@phosphor-icons/react";

const ICONS = [
  { icon: Code, color: "#3b82f6" }, // React/Frontend
  { icon: Database, color: "#10b981" }, // Data/Backend
  { icon: Cloud, color: "#f59e0b" }, // AWS/Cloud
  { icon: ChartLineUp, color: "#8b5cf6" }, // Analytics
  { icon: PenNib, color: "#ec4899" }, // Design/Figma
  { icon: DeviceMobile, color: "#14b8a6" }, // Mobile
  { icon: Stack, color: "#f43f5e" }, // Architecture
  { icon: Package, color: "#84cc16" }, // Microservices
];

function OrbitingIcons({ radius = 3.5, speed = 0.5 }) {
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
        const y = Math.sin(angle * 2) * 0.5; // Slight wave
        
        return (
          <group key={i} position={[x, y, z]}>
            {/* Counter-rotate to face camera */}
            <BillboardHtml>
              <div 
                className="w-12 h-12 flex items-center justify-center rounded-2xl glass-panel shadow-2xl transition-transform hover:scale-125"
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

// Helper to keep HTML elements facing the camera despite group rotation
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

function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.2;
    
    const targetScale = active ? 1.6 : hovered ? 1.4 : 1.2;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

    if (hovered) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.8, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.8, 0.1);
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setActive(!active)}
        >
          <icosahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            color="#00E0BA"
            emissive="#00A388"
            roughness={0.1}
            metalness={0.8}
            transmission={0.9}
            ior={1.5}
            attenuationColor="#00E0BA"
          />
        </mesh>
      </Float>
      
      <OrbitingIcons radius={3.8} speed={0.15} />
    </group>
  );
}

export function HeroInteractiveShape() {
  return (
    <div className="w-full h-full relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <InteractiveShape />
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
