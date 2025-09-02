"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building, Award, Users, Heart, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SmartBloodSupplyPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S6XmyxG6BqCVZIHLCaYdtm1hvp24yw.png",
      alt: "Smart Blood Supply Homepage",
      title: "Homepage Design",
      description:
        "Clean, professional interface with intuitive navigation and clear call-to-action for healthcare professionals.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TR0VwNvoj473vvelcmbvdKzKqoENvW.png",
      alt: "Smart Blood Supply - Who are we?",
      title: "About Section",
      description:
        "Detailed explanation of our mission to connect healthcare professionals with IT specialists for intelligent blood supply management.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RWrZl9SuCGnRlXwyHcPkQnxEFCRGzU.png",
      alt: "Smart Blood Supply - How do we work?",
      title: "Process Flow",
      description:
        "Three-step process: Order placement, blood bank confirmation, and optimized retrieval based on location and accessibility.",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="font-bold text-xl text-primary">Smart Blood Supply</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-8 h-8 text-primary" />
              <Badge variant="default" className="bg-primary text-lg px-4 py-1">
                Certified Startup
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                Patent Holder
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Smart Blood Supply</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Revolutionary platform for blood supply management that achieved startup certification with patent
              recognition and scored 19.5/20 in evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-96 bg-muted/20">
              <img
                src={projectImages[currentImageIndex].src || "/placeholder.svg"}
                alt={projectImages[currentImageIndex].alt}
                className="w-full h-full object-contain"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-3 transition-colors shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-3 transition-colors shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-primary" : "bg-background/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{projectImages[currentImageIndex].title}</h3>
              <p className="text-muted-foreground">{projectImages[currentImageIndex].description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Smart Blood Supply is a groundbreaking platform that revolutionizes blood supply management by
                  connecting healthcare professionals with IT specialists. This innovative solution addresses critical
                  challenges in blood transfusion logistics and PSL (labile blood product) management.
                </p>
                <p>
                  The platform facilitates seamless communication between transfusion establishments and blood banks,
                  optimizing the entire supply chain through intelligent routing, real-time availability tracking, and
                  automated order management.
                </p>
                <p>
                  After a year of dedicated development with my talented teammates, including Mohammed Aymen Khiari, we
                  achieved startup certification with patent recognition and received an outstanding evaluation score of
                  19.5/20.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold">PSL Order Management</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Streamlined ordering system for labile blood products with real-time availability checking.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Healthcare Integration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Seamless connection between healthcare professionals and IT specialists for optimal workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <ExternalLink className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Intelligent Routing</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Smart location-based routing for optimal blood bank selection considering distance and
                      accessibility.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Startup Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Official startup certificate (مؤسسة ناشئة) recognizing the innovation and business potential.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Patent Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  Patent holder (براءة اختراع) for the innovative blood supply management solution.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">19.5/20</div>
                <h3 className="font-semibold text-lg mb-2">Evaluation Score</h3>
                <p className="text-sm text-muted-foreground">
                  Outstanding evaluation score demonstrating technical excellence and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-base px-4 py-2">
              Healthcare Innovation
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Startup Development
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Blood Supply Chain
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              System Integration
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Patent Development
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Team Leadership
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Healthcare IT
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              Logistics Optimization
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <p className="text-muted-foreground">
            © 2025 Mabrouk Logbibi. Smart Blood Supply - Certified Startup & Patent Holder.
          </p>
        </div>
      </footer>
    </div>
  )
}
