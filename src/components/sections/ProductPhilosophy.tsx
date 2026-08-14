"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { Users, TrendingUp, Cpu, RefreshCw } from "lucide-react"

const PHILOSOPHIES = [
  {
    title: "Customer First",
    desc: "Understand the problem before proposing a solution. Building solutions for well-understood problems yields the best results.",
    icon: Users,
  },
  {
    title: "Business Value",
    desc: "Prioritize features that create measurable impact and support a larger objective.",
    icon: TrendingUp,
  },
  {
    title: "Technical Feasibility",
    desc: "Collaborate closely with engineering to build scalable systems. Complexity should exist in the implementation, not the user experience.",
    icon: Cpu,
  },
  {
    title: "Continuous Improvement",
    desc: "Treat every release as an opportunity to learn and iterate. Data and feedback drive the roadmap.",
    icon: RefreshCw,
  }
]

export function ProductPhilosophy() {
  return (
    <section id="philosophy" className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading 
          title="How I Think About Product" 
          subtitle="For me, product management is about making informed decisions that balance customer value, business outcomes, and technical feasibility."
        />
        
        {/* Clean, balanced grid layout instead of forced Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="glass-panel p-10 h-full flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center text-accent-primary bg-accent-primary/10 rounded-lg">
                  <item.icon size={24} strokeWidth={2} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-base">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
