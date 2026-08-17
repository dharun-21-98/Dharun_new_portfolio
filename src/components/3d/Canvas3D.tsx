"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense, ReactNode } from "react";

import { CanvasLoader } from "./CanvasLoader";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";
import { ScrollTransitionScene } from "./ScrollTransitionScene";

export function Canvas3D() {
  const isDark = true;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 9], fov: 45 }}
          dpr={[1, 2]} // Optimize pixel ratio
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ScrollTransitionScene />
            <Preload all />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
