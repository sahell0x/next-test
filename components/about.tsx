"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-muted-foreground">
            I am a passionate MERN stack developer with a strong interest in open source contributions. My expertise
            lies in building scalable, efficient, and high-performance web applications using modern technologies and
            best practices.
          </p>
          <p className="text-lg mb-6 text-muted-foreground">
            With experience in both frontend and backend development, I enjoy creating seamless user experiences while
            ensuring robust and maintainable codebases. I am constantly learning and exploring new technologies to
            enhance my skills.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 9752588937</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>sahil.sk.khan6872@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Khargone, India</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
