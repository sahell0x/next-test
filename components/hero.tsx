"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "MERN Stack Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="py-20 flex flex-col items-center justify-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-primary">Sahil Khan</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-6 h-10">
          <span className="text-muted-foreground">{typedText}</span>
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Passionate about building scalable, efficient, and high-performance web applications. Specializing in the MERN
          stack and open source contributions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </Link>
          <Link href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Code2 className="h-5 w-5" />
              LeetCode
            </Button>
          </Link>
          <Button variant="default" size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Resume
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
