"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

const experiences = [
  {
    title: "Open Source – Sparrow (Next Gen API Testing Tool)",
    company: "Techdome",
    period: "2023 - Present",
    type: "Open Source",
    responsibilities: [
      "Added API response download functionality, improving data accessibility in the web app.",
      "Developed seamless image response handling for REST APIs, ensuring smooth rendering.",
      "Optimized UI responsiveness by resolving critical interface issues, enhancing user accessibility.",
      "Implemented WebSocket auto-disconnection detection with real-time UI notifications.",
    ],
  },
  {
    title: "Open Source – Bruno (API Testing Tool)",
    company: "Open Source",
    period: "2023 - Present",
    type: "Open Source",
    responsibilities: [
      "Enhanced the UI by implementing support for handling and rendering SVG responses, ensuring accurate visualization and improved user experience.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Affimintus Technologies",
    period: "June 2024 - Nov 2024",
    type: "Internship",
    responsibilities: [
      "Reduced initial page load time by 25%, improving overall performance.",
      "Integrated REST APIs efficiently, reducing response time by 20%.",
      "Collaborated with backend teams, accelerating project delivery by 15%.",
      "Implemented effective state management, enhancing maintainability.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{resp}</p>
                      </div>
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
