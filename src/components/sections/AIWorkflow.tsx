"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { Bot, FileText, LayoutDashboard, Target, Users, PenTool, CheckCircle, Search } from "lucide-react"

const WORKFLOW = [
  { step: "Market Research", icon: Search },
  { step: "Requirement Drafting", icon: FileText },
  { step: "User Stories", icon: Users },
  { step: "Acceptance Criteria", icon: CheckCircle },
  { step: "Wireframing", icon: PenTool },
  { step: "Sprint Planning", icon: Target },
  { step: "Release Documentation", icon: LayoutDashboard },
  { step: "Customer Support", icon: Bot }
]

export function AIWorkflow() {
  return (
    <section className="py-16 bg-secondary/20 border-y border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Leveraging AI Throughout the Product Lifecycle" 
          subtitle="Artificial Intelligence has become an integral part of my product workflow. Rather than replacing product thinking, it enhances research, documentation, planning, and execution."
          className="text-center items-center"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {WORKFLOW.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="h-full"
              >
                <div className="flex flex-col items-center justify-center gap-4 p-8 h-full text-center bg-background border border-border/60 rounded-3xl transition-all duration-300 hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-muted group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors shadow-sm">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors mt-2">
                    {item.step}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
