"use client";

import { Html, useProgress } from "@react-three/drei";

export function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center zIndexRange={[100, 0]}>
      <div className="flex flex-col items-center justify-center gap-3 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-lg pointer-events-none">
        <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs text-accent-primary font-mono font-bold">{progress ? Math.round(progress) : 0}% LOADED</span>
      </div>
    </Html>
  );
}
