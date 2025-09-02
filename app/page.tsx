"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Heart,
  Trophy,
  BookOpen,
  Cpu,
  Bot,
  Eye,
  Award,
  Building,
} from "lucide-react"

export default function Portfolio() {
  const smartBloodSupplyImage = {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S6XmyxG6BqCVZIHLCaYdtm1hvp24yw.png",
    alt: "Smart Blood Supply Homepage",
  }

  const bloodCareManagementImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G7cLcIsQZGZGG3XLQCtKaN1S7wDF6n.png",
      alt: "BloodCare Management System Dashboard",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Mabrouk Logbibi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Software & Intelligent
              <span className="text-primary"> Systems Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Computer Science student at University of Badji Mokhtar, Annaba, specializing in web development, AI
              systems, and healthcare technology solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Showcasing innovative solutions across different domains</p>
          </div>

          {/* BloodCare Management - Featured Project */}
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-red-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto bg-muted/20">
                  <img
                    src={bloodCareManagementImages[0].src || "/placeholder.svg"}
                    alt={bloodCareManagementImages[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-red-500" />
                    <Badge variant="default" className="bg-red-500">
                      For Sale
                    </Badge>
                    <Badge variant="secondary">Healthcare</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">BloodCare Management System</CardTitle>
                  <CardDescription className="text-base mb-6">
                    Comprehensive healthcare management system for blood donation centers with patient tracking,
                    transfusion scheduling, and real-time analytics dashboard. Features French interface with complete
                    patient management, appointment scheduling, and blood inventory tracking.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">Patient Management</Badge>
                    <Badge variant="outline">Analytics Dashboard</Badge>
                    <Badge variant="outline">French Interface</Badge>
                    <Badge variant="outline">Blood Inventory</Badge>
                    <Badge variant="outline">Scheduling</Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-red-500 hover:bg-red-500/90">
                      <a href="/bloodcare-management" className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        More Information
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Smart Blood Supply - Featured Project */}
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto bg-muted/20">
                  <img
                    src={smartBloodSupplyImage.src || "/placeholder.svg"}
                    alt={smartBloodSupplyImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="w-6 h-6 text-primary" />
                    <Badge variant="default" className="bg-primary">
                      Certified Startup
                    </Badge>
                    <Badge variant="secondary">Patent Holder</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">Smart Blood Supply</CardTitle>
                  <CardDescription className="text-base mb-6">
                    Revolutionary platform for blood supply management connecting healthcare professionals with IT
                    specialists. Achieved startup certification with patent recognition and scored 19.5/20 in
                    evaluation. Facilitates PSL (labile blood product) orders and optimizes blood bank logistics across
                    transfusion establishments.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">Healthcare Innovation</Badge>
                    <Badge variant="outline">Startup</Badge>
                    <Badge variant="outline">Patent</Badge>
                    <Badge variant="outline">Blood Supply Chain</Badge>
                    <Badge variant="outline">19.5/20 Score</Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      <a href="/smart-blood-supply" className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        More Information
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <Badge variant="secondary">6th Place</Badge>
                </div>
                <CardTitle>EcoGuardian AI</CardTitle>
                <CardDescription>
                  AI-powered mobile application for ecological tourism in El Tarf. Developed during a 24-hour hackathon,
                  securing 6th place among teams from Algeria and Tunisia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">AI</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Hackathon</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <a
                    href="https://colab.research.google.com/drive/1XJHQZrHT8QEnsDTRCOjBhWJ7K3Li53u7?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <Badge variant="secondary">Computer Vision</Badge>
                </div>
                <CardTitle>Face Recognition System</CardTitle>
                <CardDescription>
                  Real-time face detection and recognition system using Python. Features webcam integration, database
                  matching, and lightweight design for basic hardware.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <a href="https://github.com/Islamlogbibi/face_detection" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <Badge variant="secondary">Automation</Badge>
                </div>
                <CardTitle>Robot Assistant</CardTitle>
                <CardDescription>
                  Python-based robot assistant for daily tasks automation. Features web browsing, multilingual
                  translation, messaging automation, and equation solving.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Translation</Badge>
                  <Badge variant="outline">Web Integration</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <a href="https://github.com/Islamlogbibi/robot" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <Badge variant="secondary">Library</Badge>
                </div>
                <CardTitle>C++ Electronics Library</CardTitle>
                <CardDescription>
                  Comprehensive C++ library for electronics projects, making development more accessible and efficient.
                  Collaborative project designed for both hobby and complex applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Electronics</Badge>
                  <Badge variant="outline">Arduino</Badge>
                  <Badge variant="outline">Embedded</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <a
                    href="https://github.com/Islamlogbibi/electronics_library"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Library
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <Badge variant="secondary">Documentation</Badge>
                </div>
                <CardTitle>Electronics Library Docs</CardTitle>
                <CardDescription>
                  Complete documentation website for the electronics library. Features comprehensive guides, examples,
                  and usage instructions for developers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Documentation</Badge>
                  <Badge variant="outline">Technical Writing</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <a href="https://amber-carlynn-12.tiiny.site/" target="_blank" rel="noopener noreferrer">
                      View Docs
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Education & Background</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">BSc in Computer Science and Automation</h4>
                  <p className="text-muted-foreground">University of Badji Mokhtar, Annaba</p>
                  <p className="text-sm text-muted-foreground">Second Year Student</p>
                </div>
                <div>
                  <h4 className="font-semibold">President</h4>
                  <p className="text-muted-foreground">CSA Kernel within the opensource community</p>
                </div>
                <div>
                  <h4 className="font-semibold">Achievement</h4>
                  <p className="text-muted-foreground">First place in national problem-solving contest</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>C/C++</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>PHP</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Web Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Django</Badge>
                    <Badge>HTML/CSS</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Linux</Badge>
                    <Badge>OpenCV</Badge>
                    <Badge>Arduino</Badge>
                    <Badge>ROS</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in collaboration or have a project in mind? Let's discuss!
          </p>

          <div className="mb-12">
            <img
              src="/images/business-card.png"
              alt="Mabrouk Logbibi Business Card"
              className="max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Github className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-4">Check out my code and projects</p>
                <Button variant="outline" size="sm">
                  <a href="https://github.com/Islamlogbibi" target="_blank" rel="noopener noreferrer">
                    Visit Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">Connect professionally</p>
                <Button variant="outline" size="sm">
                  <a
                    href="https://www.linkedin.com/in/mabrouk-logbibi-0651b026a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Send me a message</p>
                <Button variant="outline" size="sm">
                  <a href="mailto:mabrouk.logbibi@univ-annaba.dz">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Mabrouk Logbibi. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
