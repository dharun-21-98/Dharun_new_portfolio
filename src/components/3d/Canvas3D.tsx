"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense, ReactNode } from "react";
import { useTheme } from "next-themes";

import { ScrollTransitionScene } from "./ScrollTransitionScene";

export function Canvas3D() {
  const { theme } = useTheme();
  
  // Use a dark background when in dark mode to blend with CSS
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        dpr={[1, 2]} // Optimize pixel ratio
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ScrollTransitionScene />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
