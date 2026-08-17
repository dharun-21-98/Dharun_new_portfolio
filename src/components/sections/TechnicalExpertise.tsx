"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { Kanban, HardDrives, ChartBar, Robot } from "@phosphor-icons/react"

const CATEGORIES = [
  {
    title: "Product",
    icon: Kanban,
    skills: ["Product Discovery", "PRDs", "Roadmaps", "Backlog Grooming", "Sprint Planning", "User Stories", "Agile", "Scrum"]
  },
  {
    title: "Technical",
    icon: HardDrives,
    skills: ["REST APIs", "Flutter", "React & Node.js", "Salesforce", "Shopify", "AWS", "SQL", "Postman", "Webhooks", "Stripe"]
  },
  {
    title: "Analytics",
    icon: ChartBar,
    skills: ["Power BI", "Tableau", "Excel"]
  },
  {
    title: "AI",
    icon: Robot,
    skills: ["ChatGPT", "Gemini", "Claude", "Prompt Engineering", "AI Documentation", "Workflow Automation"]
  }
]

export function TechnicalExpertise() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Technologies I Work With" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="bg-card border border-border p-6 h-full rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent-primary/10 text-accent-primary rounded-lg">
                    <category.icon size={28} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-bold font-heading">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-secondary text-muted-foreground border border-border/50 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
