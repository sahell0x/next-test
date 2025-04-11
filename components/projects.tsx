"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, MessageSquare, Code2 } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FeeloChat",
    description:
      "A cutting-edge, end-to-end encrypted chat app that revolutionizes conversations with real-time emotion sharing. By running a tiny ML model directly in the user's browser to detect facial expressions, it ensures unmatched privacy while delivering an immersive and deeply personal messaging experience.",
    techStack: [
      "React.js",
      "TypeScript",
      "Recoil",
      "Express.js",
      "Node.js",
      "face-api.js",
      "Socket.io",
      "MongoDB",
      "Tailwind",
    ],
    link: "https://feelochat.sahellx.site/",
    github: "https://github.com/sahell0x/FeeloChat",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
  },
  {
    title: "Code Atopsy",
    description:
      "A web-based AI agent application that analyzes and visualizes algorithms and code snippets in multiple programming languages. Utilized AI techniques to generate insights, explanations, and debugging suggestions for better comprehension.",
    techStack: ["React.js", "Express.js", "TypeScript", "Node.js", "Tailwind", "Custom AI agent"],
    link: "https://codeatopsy.sahellx.site/",
    github: "https://github.com/sahell0x/Code-Autopsy",
    icon: <Code2 className="h-10 w-10 text-primary" />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-t-4 border-t-primary">
                <CardContent className="p-6 flex-grow">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
