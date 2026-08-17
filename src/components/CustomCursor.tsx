"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Use a much lighter spring to avoid feeling sluggish or jerky
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition, { passive: true });
      window.addEventListener("mouseover", handleMouseOver, { passive: true });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [mouseX, mouseY, isMobile]);

  if (!isMounted || isMobile) return null;

  return (
    <>
      {/* Inner Square - Instant Follow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-primary pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 10px rgba(0, 224, 186, 0.8)",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      
      {/* Outer Targeting Box - Smooth Follow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent-primary pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
          backgroundColor: isHovering ? "rgba(0, 224, 186, 0.1)" : "rgba(0, 224, 186, 0)",
          borderColor: isHovering ? "rgba(0, 224, 186, 1)" : "rgba(0, 224, 186, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Crosshair ticks when hovering */}
        <motion.div 
          className="absolute w-full h-[1px] bg-accent-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 0.3 : 0 }}
        />
        <motion.div 
          className="absolute h-full w-[1px] bg-accent-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 0.3 : 0 }}
        />
      </motion.div>
    </>
  );
}
