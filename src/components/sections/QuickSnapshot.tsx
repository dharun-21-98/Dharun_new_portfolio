"use client"

import { motion } from "framer-motion"

const METRICS = [
  { value: "4+", label: "Years Experience" },
  { value: "5", label: "Core Industries" },
  { value: "10+", label: "Products" },
  { value: "E2E", label: "Product Delivery" },
]

export function QuickSnapshot() {
  return (
    <section className="py-10 border-y border-border/50 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start flex-1 text-center md:text-left min-w-[120px]"
            >
              <span className="text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-1">
                {metric.value}
              </span>
              <span className="text-xs text-muted font-semibold uppercase tracking-widest">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
