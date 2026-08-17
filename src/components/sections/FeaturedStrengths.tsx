"use client"

import { Card } from "@/components/ui/Card"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { MagnifyingGlass, Code, Sparkle, Users } from "@phosphor-icons/react"

const STRENGTHS = [
  {
    icon: MagnifyingGlass,
    title: "Product Discovery",
    desc: "Conduct stakeholder workshops, define requirements, prioritize features, and translate business needs into clear product roadmaps."
  },
  {
    icon: Code,
    title: "Technical Product Management",
    desc: "Collaborate closely with engineering teams, understand APIs, integrations, backend workflows, cloud deployments, and technical trade-offs."
  },
  {
    icon: Sparkle,
    title: "AI-Driven Product Development",
    desc: "Leverage AI to accelerate product discovery, documentation, user story creation, competitive research, and customer support experiences."
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    desc: "Drive collaboration across product, engineering, design, QA, and business teams to deliver high-impact digital products."
  }
]

export function FeaturedStrengths() {
  return (
    <section id="strengths" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Featured Strengths" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-2 transition-transform group-hover:scale-110">
                  <strength.icon size={32} weight="duotone" />
                </div>
                <h3 className="text-xl font-bold font-heading">{strength.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{strength.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
