"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const HIGHLIGHTS = [
  "4+ Years of Product & Project Management Experience",
  "Enterprise SaaS Experience",
  "Shopify Commerce Products",
  "Mobile & Web Applications",
  "AI Product Workflows",
  "Salesforce Integration",
  "AWS Cloud Deployments",
  "Cross-Functional Leadership",
  "Agile Product Delivery",
  "Technical Product Ownership"
]

export function RecruiterHighlights() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Recruiter Highlights" 
          className="text-center items-center"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {HIGHLIGHTS.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl shadow-sm hover:border-accent-primary/50 hover:shadow-md transition-all group"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success border border-success/20 group-hover:bg-success group-hover:text-white transition-colors">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="font-medium text-foreground">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
