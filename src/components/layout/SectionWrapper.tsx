"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <div 
      id={id} 
      className={`snap-point w-screen shrink-0 h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-start md:justify-center custom-scrollbar ${className}`}
    >
      <div className="w-full h-fit py-20 md:py-0">
        {children}
      </div>
    </div>
  );
}
