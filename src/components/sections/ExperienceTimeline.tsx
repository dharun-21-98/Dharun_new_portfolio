"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"
import { Briefcase, Buildings, Kanban, Sparkle, RocketLaunch } from "@phosphor-icons/react"

const EXPERIENCES = [
  {
    role: "SAM Analyst",
    company: "EY GDS",
    icon: Buildings,
    logo: "/EY.jpg",
    date: "Early Career"
  },
  {
    role: "Business Analyst",
    company: "Mobius Knowledge Services",
    icon: Briefcase,
    logo: "/mobius_logo.svg",
    date: "Mid Career"
  },
  {
    role: "Product Manager",
    company: "doodleblue Innovations",
    icon: RocketLaunch,
    logo: "/doodleblue.png",
    date: "Management"
  },
  {
    role: "Building Enterprise Products",
    company: "Present Focus",
    icon: Kanban,
    date: "Current",
    active: true
  },
  {
    role: "Exploring AI-Native Product Management",
    company: "The Horizon",
    icon: Sparkle,
    date: "Future",
    glow: true
  }
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="The Journey So Far" />

        <div className="relative mt-16 ml-4 md:ml-8">
          {/* Main vertical track */}
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-border via-border to-transparent"></div>

          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16 group"
                >
                  {/* Timeline Node Icon */}
                  <div className={`absolute -left-[24px] top-1 w-12 h-12 rounded-full border-[4px] border-background flex items-center justify-center transition-all duration-300 group-hover:scale-110
                    ${exp.glow
                      ? 'bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : exp.active
                        ? 'bg-foreground text-background shadow-md'
                        : 'bg-secondary text-muted group-hover:bg-accent-primary/20 group-hover:text-accent-primary'
                    }`}>
                    <Icon size={24} weight="duotone" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex flex-col gap-2 p-6 md:p-8 rounded-3xl border transition-colors ${exp.glow
                    ? 'glass-card border-accent-primary/30 shadow-lg shadow-accent-primary/5'
                    : exp.active
                      ? 'glass-card border-border/80 shadow-md'
                      : 'glass-panel border-border/40 hover:border-border'
                    }`}>

                    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-bold tracking-widest text-muted uppercase">{exp.date}</span>
                      {exp.logo && (
                        <div className="h-10 w-auto bg-white rounded-lg flex items-center justify-center px-3 py-1.5 shrink-0 self-start md:self-auto border border-border/10">
                          <img src={exp.logo} alt={exp.company} className="h-full w-auto max-w-[140px] object-contain" />
                        </div>
                      )}
                    </div>

                    <h3 className={`text-xl md:text-2xl font-bold font-heading ${exp.glow ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary' : 'text-foreground'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-foreground/60 font-medium text-sm md:text-base">{exp.company}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
