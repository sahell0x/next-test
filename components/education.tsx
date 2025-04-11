"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educations = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Jawaharlal Institute of Technology Vidhya Vihar Borawan (Khargone)",
    year: "2025",
    score: "CGPA: 7.34",
  },
  {
    degree: "12th (MP Board)",
    institution: "M.G. Govt. Excellence Higher Secondary School Sendhwa",
    year: "2021",
    score: "78%",
  },
  {
    degree: "10th (MP Board)",
    institution: "M.G. Govt. Excellence High School Sendhwa",
    year: "2019",
    score: "80%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <div className="flex items-center mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-sm text-muted-foreground">{edu.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-primary font-medium mt-1">{edu.score}</p>
                    </div>
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
