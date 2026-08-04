import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { QuickSnapshot } from "@/components/sections/QuickSnapshot"
import { FeaturedStrengths } from "@/components/sections/FeaturedStrengths"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { ProductPhilosophy } from "@/components/sections/ProductPhilosophy"
import { AIWorkflow } from "@/components/sections/AIWorkflow"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise"
import { RecruiterHighlights } from "@/components/sections/RecruiterHighlights"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <div id="about">
          <FeaturedStrengths />
          <ExperienceTimeline />
          <TechnicalExpertise />
        </div>
        <FeaturedProjects />
        <ProductPhilosophy />
        <AIWorkflow />
        <RecruiterHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
