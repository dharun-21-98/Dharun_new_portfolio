import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent-primary/30",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
