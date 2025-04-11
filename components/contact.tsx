"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Github, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+91 9752588937</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">sahil.sk.khan6872@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Khargone, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-colors">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                  </Link>
                  <Link href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-colors">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                  </Link>
                </div>
                <div className="mt-8">
                  <p className="text-muted-foreground">
                    Feel free to reach out to me through any of the channels above. I'm always open to discussing new
                    projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
