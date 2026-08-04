import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading font-bold text-xl text-foreground">Dharunanand R</h3>
            <p className="text-accent-primary font-medium">Product Manager</p>
            <p className="text-sm text-muted mt-2 max-w-sm leading-relaxed">
              Building customer-focused digital products through technology, collaboration, and continuous learning.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <Link href="#about" className="text-muted hover:text-foreground transition-colors">About</Link>
            <Link href="#projects" className="text-muted hover:text-foreground transition-colors">Projects</Link>
            <a href="/Dharun_R_4.9_PM_YOE.pdf" target="_blank" className="text-muted hover:text-foreground transition-colors">Resume</a>
            <a href="https://www.linkedin.com/in/dharun2101/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:rdharunanand@gmail.com" className="text-muted hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
