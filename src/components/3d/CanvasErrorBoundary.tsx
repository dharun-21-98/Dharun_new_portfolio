"use client";

import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class CanvasErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("3D Canvas failed to load. Falling back gracefully. Error:", error);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground text-sm border border-border/30 rounded-3xl bg-secondary/10 p-6 text-center">
          <p className="font-semibold mb-2">Interactive Experience Unavailable</p>
          <p className="text-xs">Your device or browser may not support WebGL, but you can still explore the rest of the site!</p>
        </div>
      );
    }

    return this.props.children;
  }
}
