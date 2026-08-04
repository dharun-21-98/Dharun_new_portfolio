import { cn } from "@/lib/utils"
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"

interface SectionHeadingProps extends HTMLMotionProps<"div"> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex flex-col items-center text-center gap-4 mb-12 mx-auto", className)} 
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-heading">
        {title}
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-muted max-w-[750px] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
