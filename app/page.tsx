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
  Brain,
  Zap,
  Users,
  Target,
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

  const researchInterests = [
    { icon: Brain, title: "Brain-Computer Interfaces (EEG)", description: "Neural signal processing and decoding" },
    { icon: Users, title: "Human-Computer Interaction", description: "Intuitive interface design and user experience" },
    { icon: Zap, title: "Assistive Technologies", description: "Systems for motor-impaired users" },
    { icon: Cpu, title: "Machine Learning for Time-Series", description: "Signal analysis and pattern recognition" },
    { icon: Target, title: "Robotics & Intelligent Systems", description: "Autonomous and adaptive systems" },
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
              <a href="#interests" className="text-foreground hover:text-primary transition-colors">
                Research
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#japan" className="text-foreground hover:text-primary transition-colors">
                Japan
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
              AI & BCI Research-Oriented
              <span className="text-primary"> Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Building intelligent systems for human–machine interaction and assistive technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/cv.pdf" download className="flex items-center gap-2">
                Download CV
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Final-year student in Computer Science & Automation, ranked 5th nationally. Interested in Brain-Computer Interfaces, AI, and real-time human–machine interaction systems. Focused on building assistive technologies that bridge research and real-world applications.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Computer Science & Automation<br />University of Badji Mokhtar, Annaba<br />Final Year | Rank: 5th National</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">Remote Developer<br />PromptLine (France)<br />AI & Backend Development</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Achievements</h4>
                <p className="text-sm text-muted-foreground">National Rank 5th<br />Competitive Programming Winner<br />Patent-Related Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Interests</h2>
            <p className="text-xl text-muted-foreground">Focus areas in AI and human-machine interaction</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, idx) => {
              const Icon = interest.icon
              return (
                <Card key={idx} className="hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Research-focused projects in BCI, AI, and assistive technology</p>
          </div>

          {/* BCI Project 1 - Proposed Research */}
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                  <Badge variant="default" className="bg-primary">
                    Proposed Research
                  </Badge>
                  <Badge variant="secondary">AI & Signal Processing</Badge>
                </div>
                <CardTitle className="text-2xl mb-4">EEG-Based Motor Intention Decoding for Assistive Human-Computer Interaction</CardTitle>
                <CardDescription className="text-base mb-6">
                  Decode EEG signals into control commands using signal processing and deep learning (CNN/LSTM). Designed for assistive systems enabling motor-impaired users to interact with technology through brain signals.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">EEG Signal Processing</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">CNN/LSTM</Badge>
                  <Badge variant="outline">Assistive Technology</Badge>
                  <Badge variant="outline">BCI</Badge>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <a href="/research/eeg-motor-intention" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Research Details
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* BCI Project 2 - Draft Paper */}
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <Badge variant="default" className="bg-primary">
                    Draft Paper
                  </Badge>
                  <Badge variant="secondary">Real-time Translation</Badge>
                </div>
                <CardTitle className="text-2xl mb-4">A Multi-Modal Wearable System for Real-Time Sign Language Translation and Adaptive Remote Communication</CardTitle>
                <CardDescription className="text-base mb-6">
                  Combines glove sensors and EMG signals to provide real-time translation to speech and text. Features adaptive models that learn user-specific patterns for improved accuracy and personalization.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">EMG Sensing</Badge>
                  <Badge variant="outline">Wearable Tech</Badge>
                  <Badge variant="outline">Real-time Processing</Badge>
                  <Badge variant="outline">Assistive Tech</Badge>
                  <Badge variant="outline">Human-Computer Interaction</Badge>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <a href="/research/sign-language-translation" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Research Details
                  </a>
                </Button>
              </CardContent>
            </Card>
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
                      Featured Project
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

      {/* Japan/Aichi Section */}
      <section id="japan" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Goals in Japan</h2>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I aim to contribute to Aichi Prefecture&apos;s industrial ecosystem, particularly in robotics, automation, and AI-driven systems. My goal is to bridge academic research with real-world industrial applications, especially in assistive technologies and intelligent human–machine interaction.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold text-primary text-lg mb-3">Aichi Industry Alignment</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Robotics and automation expertise</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>AI-driven intelligent systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Assistive technology research</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-3">Research Vision</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>BCI systems for real-world impact</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Human-machine interaction innovation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Industrial-academic collaboration</span>
                  </li>
                </ul>
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
