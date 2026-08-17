"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, PerformanceMonitor } from "@react-three/drei";
import { Suspense, ReactNode, useState } from "react";

import { CanvasLoader } from "./CanvasLoader";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";
import { ScrollTransitionScene } from "./ScrollTransitionScene";

export function Canvas3D() {
  const isDark = true;

  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 9], fov: 45 }}
          dpr={dpr} // Dynamically adjusted
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        >
          <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
            <Suspense fallback={<CanvasLoader />}>
              <ScrollTransitionScene />
              <Preload all />
            </Suspense>
          </PerformanceMonitor>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
