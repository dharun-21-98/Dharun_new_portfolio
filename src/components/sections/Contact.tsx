"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

function GithubIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-stretch">
          
          {/* Left Column: Context and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 lg:w-1/2 justify-center text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading leading-tight">
              Let's Build Great Products Together.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Whether you're hiring for Product Management, Technical Product Management, or AI Product roles, I'd be happy to discuss how I can contribute to your team.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button as="a" href="/Dharun_R_4.9_PM_YOE.pdf" target="_blank" rel="noopener noreferrer" variant="primary" className="h-12 px-8 w-full sm:w-auto shadow-sm">
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column: Clean Contact List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-card border border-border rounded-2xl shadow-sm p-2">
              <ul className="flex flex-col divide-y divide-border/50">
                <li>
                  <a href="mailto:rdharunanand@gmail.com" className="flex items-center gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>
                      <p className="font-medium text-foreground truncate">rdharunanand@gmail.com</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="tel:+918610443038" className="flex items-center gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                      <p className="font-medium text-foreground truncate">+91 8610443038</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/in/dharun2101/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors shrink-0">
                      <LinkedinIcon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">LinkedIn</p>
                      <p className="font-medium text-foreground truncate">linkedin.com/in/dharun2101</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="https://github.com/dharun-21-98/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors shrink-0">
                      <GithubIcon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">GitHub</p>
                      <p className="font-medium text-foreground truncate">github.com/dharun-21-98</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-transparent">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Location</p>
                      <p className="font-medium text-foreground truncate">Chennai, India</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
