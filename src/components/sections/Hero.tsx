"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

const METRICS = [
  { value: "4+", label: "Years Experience" },
  { value: "5", label: "Core Industries" },
  { value: "10+", label: "Products" },
  { value: "E2E", label: "Product Delivery" },
]

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-28 pb-12 bg-background relative overflow-hidden">
      {/* Clean, editorial subtle background pattern (optional, avoiding slop) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary),transparent_50%)] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center md:items-start text-center md:text-left gap-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-semibold tracking-wide w-fit shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
          </span>
          Open to Product Management Opportunities
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
          }}
          className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight text-foreground text-balance"
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="inline-block">Creating products</motion.span>{" "}
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="inline-block">that</motion.span> <br className="hidden lg:block" />
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="inline-block text-accent-primary">solve real problems.</motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted max-w-3xl leading-relaxed text-balance"
        >
          I'm a Product Manager with over four years of experience delivering enterprise applications across AI, SaaS, Mobile, Web, and Shopify ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-10 md:gap-16 my-4 border-l-[3px] border-accent-primary/20 pl-6"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1 items-start text-left">
              <span className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                {metric.value}
              </span>
              <span className="text-[11px] md:text-xs text-muted font-bold uppercase tracking-widest">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
        >
          <Button as="a" href="/Dharun_R_4.9_PM_YOE.pdf" target="_blank" rel="noopener noreferrer" variant="primary" className="h-14 px-8 text-base shadow-sm">
            Download Resume
          </Button>
          <Button as="a" href="#projects" variant="secondary" className="h-14 px-8 text-base bg-secondary hover:bg-secondary/80 border border-border">
            Explore Projects
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
