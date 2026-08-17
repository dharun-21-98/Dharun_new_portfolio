"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { EnvelopeSimple, MapPin, Phone, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { ContactForm } from "@/components/ContactForm"

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/50 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Context and Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 lg:w-1/2 justify-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading leading-tight mb-6">
                Let's Build Great Products Together.
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                Whether you're hiring for Product Management, Technical Product Management, or AI Product roles, I'd be happy to discuss how I can contribute to your team.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 max-w-xl mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:rdharunanand@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/80 hover:border-accent-primary/50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground group-hover:text-accent-primary shrink-0 border border-border/50 shadow-sm">
                    <EnvelopeSimple size={20} weight="duotone" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>
                    <p className="font-medium text-sm text-foreground truncate">rdharunanand@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918610443038" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/80 hover:border-accent-primary/50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground group-hover:text-accent-primary shrink-0 border border-border/50 shadow-sm">
                    <Phone size={20} weight="duotone" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                    <p className="font-medium text-sm text-foreground truncate">+91 8610443038</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/dharun2101/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/80 hover:border-accent-primary/50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground group-hover:text-accent-primary shrink-0 border border-border/50 shadow-sm">
                    <LinkedinLogo size={20} weight="duotone" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">LinkedIn</p>
                    <p className="font-medium text-sm text-foreground truncate">/in/dharun2101</p>
                  </div>
                </a>

                <a href="https://github.com/dharun-21-98/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/80 hover:border-accent-primary/50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground group-hover:text-accent-primary shrink-0 border border-border/50 shadow-sm">
                    <GithubLogo size={20} weight="duotone" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">GitHub</p>
                    <p className="font-medium text-sm text-foreground truncate">dharun-21-98</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <Button as="a" href="/Dharun_R_4.9_PM_YOE.pdf" target="_blank" rel="noopener noreferrer" variant="primary" className="h-14 px-10 shadow-[0_0_20px_rgba(0,224,186,0.3)] hover:shadow-[0_0_30px_rgba(0,224,186,0.5)] transition-shadow text-base">
                Download Full Resume
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full flex justify-end"
          >
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
