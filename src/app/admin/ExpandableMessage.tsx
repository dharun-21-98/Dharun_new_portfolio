"use client";
import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export function ExpandableMessage({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 100;
  
  if (!isLong) {
    return <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{text}</div>;
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap break-words max-w-[300px] md:max-w-[500px]">
        {expanded ? text : text.substring(0, 100) + "..."}
      </div>
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="flex items-center gap-1.5 text-accent-primary hover:text-accent-secondary hover:underline text-xs font-semibold tracking-wide transition-colors mt-1"
      >
        {expanded ? <EyeSlash size={16} weight="duotone" /> : <Eye size={16} weight="duotone" />}
        {expanded ? "HIDE FULL MESSAGE" : "VIEW FULL MESSAGE"}
      </button>
    </div>
  );
}
