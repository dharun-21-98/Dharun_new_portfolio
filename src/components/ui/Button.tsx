import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", as = "button", href, target, rel, ...props }, ref) => {
    const variants = {
      primary: "bg-accent-primary text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-accent-primary/20",
      secondary: "bg-card text-foreground border border-border hover:bg-card/80 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10",
      outline: "border border-border bg-transparent hover:bg-card text-foreground",
      ghost: "hover:bg-card text-muted hover:text-foreground"
    }

    const classes = cn(
      "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-2 active:scale-[0.98]",
      variants[variant],
      className
    );

    if (as === "a" || href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {props.children}
        </a>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
