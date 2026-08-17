"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function HeroParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const particleColor = isDark ? "#00E0BA" : "#00A388"; // Hacker cyan

  const count = 3000;
  const [positions, scales] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      scales[i] = Math.random();
    }
    return [positions, scales];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow rotation
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.025;
    
    // Mouse interaction subtly affects rotation
    pointsRef.current.rotation.y += (state.pointer.x * 0.5 - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (-state.pointer.y * 0.5 - pointsRef.current.rotation.x) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={particleColor}
        transparent
        opacity={isDark ? 0.6 : 0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
