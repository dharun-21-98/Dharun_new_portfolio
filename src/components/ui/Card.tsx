import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-card text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/50",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
