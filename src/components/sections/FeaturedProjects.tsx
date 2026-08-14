"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "Real Estate Channel Partner Platform",
    industry: "Real Estate",
    role: "Product Manager",
    overview: "Designed and delivered a comprehensive channel partner platform that streamlined lead management, commission tracking, and partner engagement for real estate sales teams.",
    highlights: ["Lead lifecycle management", "Salesforce integration", "AI-powered chatbot", "Commission engine", "Real-time project updates", "Tier-based rewards", "Partner portal"],
    outcome: "Reduced manual coordination between channel partners and internal sales teams while improving transparency throughout the sales journey.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop&fm=avif"
  },
  {
    title: "Shopify Contact Card Personalization Platform",
    industry: "E-Commerce",
    role: "Product Manager",
    overview: "Built a customizable product personalization experience allowing customers to design, preview, order, and automatically route printable assets through a cloud-based fulfillment pipeline.",
    highlights: ["Editable design canvas", "Live preview", "Dynamic templates", "PDF generation", "AWS backend", "Webhooks", "Location-based printer routing"],
    outcome: "Created a scalable customization workflow that automated order processing and significantly reduced manual production effort.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop&fm=avif"
  },
  {
    title: "Repair Rewards Platform",
    industry: "Retail & Loyalty",
    role: "Product Manager",
    overview: "Led the delivery of a QR-based rewards platform enabling customers and retailers to participate in digital reward programs through a multilingual mobile application.",
    highlights: ["Android & iOS", "Arabic support", "Reward redemption", "Admin portal", "QR workflows", "Analytics"],
    outcome: "Increased customer retention and provided retailers with actionable insights into purchasing behavior.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop&fm=avif"
  },
  {
    title: "Ultra Failure Analysis Platform",
    industry: "Industrial Tech",
    role: "Product Manager",
    overview: "Delivered a global enterprise platform enabling organizations to manage remote failure analysis reports across multiple countries with structured workflows and centralized reporting.",
    highlights: ["Remote Failure Analysis", "Report management", "Multi-Org hierarchy", "Credit subscriptions", "Analytics"],
    outcome: "Standardized failure reporting across global teams, reducing analysis turnaround time.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop&fm=avif"
  }
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 border-y border-border/30 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="Products I have worked"
          subtitle="A selection of products I have led from discovery through delivery, solving real business challenges across enterprise platforms, commerce, and AI."
        />

        <div className="flex flex-col gap-12 mt-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row glass-card overflow-hidden group">
                <div className="lg:w-[45%] h-64 lg:h-auto overflow-hidden bg-muted border-b lg:border-b-0 lg:border-r border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-8 lg:p-12 lg:w-[55%] flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider text-accent-primary uppercase mb-4">
                    <span>{project.industry}</span>
                    <span className="w-1 h-1 rounded-full bg-accent-primary"></span>
                    <span>{project.role}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8 text-base">
                    {project.overview}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map(highlight => (
                        <span key={highlight} className="px-3 py-1 bg-secondary text-muted-foreground rounded text-xs font-medium border border-border/50">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      <span className="text-muted mr-2 font-bold">Outcome:</span> {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
