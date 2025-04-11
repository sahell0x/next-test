"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, GitBranch, MonitorSmartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    skills: ["React.js", "TypeScript", "JavaScript", "Recoil", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "JWT"],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "Mongoose"],
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    skills: ["Git & GitHub", "Postman", "Linux", "Docker"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-md">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-justify">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary/10 text-primary px-3 py-1.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
