"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense, ReactNode } from "react";
import { useTheme } from "next-themes";

interface Canvas3DProps {
  children: ReactNode;
}

export function Canvas3D({ children }: Canvas3DProps) {
  const { theme } = useTheme();
  
  // Use a dark background when in dark mode to blend with CSS
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Optimize pixel ratio
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
