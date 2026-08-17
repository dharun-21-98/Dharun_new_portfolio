"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function FluidMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  
  // Use Gold for the mesh material to match the new accent color
  const meshColor = "#00E0BA"; 

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Complex, elegant rotation
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.z = time * 0.05;
    
    // Subtle mouse interaction
    meshRef.current.rotation.x += (-state.pointer.y * 0.3 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (state.pointer.x * 0.3 - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
        {/* An elegant Torus Knot to serve as abstract geometric art */}
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <MeshDistortMaterial 
          color={meshColor} 
          wireframe={true}
          transparent={true}
          opacity={0.3}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}
