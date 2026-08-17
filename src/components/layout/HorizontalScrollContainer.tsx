"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HorizontalScrollContainer({ children }: { children: React.ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // We only enable horizontal scroll on desktop
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
      setViewportWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }
    };
    
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    
    // Slight delay to ensure fonts/images loaded
    const timeout = setTimeout(checkIsDesktop, 500);

    // Custom Scroll Snapping Logic
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollSnap = () => {
      if (window.innerWidth < 1024) return; // Skip on mobile
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!containerRef.current) return;
        
        // Find all snap points
        const snapPoints = Array.from(document.querySelectorAll('.snap-point')) as HTMLElement[];
        if (snapPoints.length === 0) return;
        
        // Find the one closest to the left edge of the viewport
        let nearestPoint = snapPoints[0];
        let minDistance = Infinity;
        
        snapPoints.forEach(point => {
          // getBoundingClientRect().left gives the current distance from viewport's left edge
          const rect = point.getBoundingClientRect();
          // We want to snap if it's somewhat in view, minimizing distance to 0
          const dist = Math.abs(rect.left);
          if (dist < minDistance) {
            minDistance = dist;
            nearestPoint = point;
          }
        });
        
        // If it's already close enough, don't snap to avoid infinite loops and jitter
        if (minDistance < 50) return;

        // Calculate how much we need to scroll vertically to translate the container by 'rect.left'
        // x translation = - scrollY * (maxTranslate / maxScrollY)
        // We want to change translation by -nearestPoint.getBoundingClientRect().left
        
        const maxScrollY = document.body.scrollHeight - window.innerHeight;
        const currentMaxTranslate = containerWidth - viewportWidth;
        if (currentMaxTranslate <= 0) return;
        
        const pixelsToTranslate = nearestPoint.getBoundingClientRect().left;
        
        // Convert horizontal pixels to vertical scroll pixels
        const verticalPixelsToScroll = pixelsToTranslate * (maxScrollY / currentMaxTranslate);
        
        const targetY = window.scrollY + verticalPixelsToScroll;
        
        // Ensure we don't scroll out of bounds
        const clampedY = Math.max(0, Math.min(maxScrollY, targetY));
        
        window.scrollTo({ top: clampedY, behavior: 'smooth' });
      }, 200); // 200ms after scrolling stops
    };
    
    window.addEventListener("scroll", handleScrollSnap, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("scroll", handleScrollSnap);
      clearTimeout(timeout);
      clearTimeout(scrollTimeout);
    };
  }, [containerWidth, viewportWidth]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the maximum scroll distance
  // We want to translate left by (total width - viewport width)
  const maxTranslate = containerWidth - viewportWidth;
  
  // Create a strict 1:1 transform based on scroll progress
  // Since Lenis already provides smooth scrolling, we do NOT use useSpring here 
  // to avoid double-smoothing "rubber-band" effects which feel like rushing.
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  if (!isDesktop) {
    // Return standard vertical layout on mobile/tablet
    return <div className="flex flex-col">{children}</div>;
  }

  // The height of the section must be exactly the width of the container 
  // to ensure a 1:1 scroll ratio (1px vertical scroll = 1px horizontal pan)
  const containerHeight = containerWidth > 0 ? `${containerWidth}px` : "400vh";

  return (
    <section ref={targetRef} className="relative bg-transparent" style={{ height: containerHeight }}>
      {/* Sticky container that holds the viewport window */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-transparent">
        {/* The horizontally translating track */}
        <motion.div 
          ref={containerRef}
          style={{ x }} 
          className="flex flex-row h-screen items-start"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
