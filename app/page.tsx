import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 py-8">
        <Hero />

        <div className="flex justify-center my-12">
          <div className="animate-bounce bg-primary/10 p-2 rounded-full">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>

        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <About />
        <Footer />
      </div>
    </main>
  )
}
