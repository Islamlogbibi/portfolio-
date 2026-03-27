"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Heart,
  Users,
  Calendar,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"

export default function BloodCareManagementPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G7cLcIsQZGZGG3XLQCtKaN1S7wDF6n.png",
      alt: "BloodCare Dashboard",
      title: "Main Dashboard",
      description:
        "Comprehensive overview with patient statistics, today's transfusions, scheduled programs, and urgent cases tracking.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QNdFXcTzw9a6svMWo1FpccmUAkVZZL.png",
      alt: "Patient Management",
      title: "Patient Management",
      description:
        "Advanced patient filtering and search capabilities with blood group, phenotype, and category-based organization.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z0t6GMXTSIA8o9AAUvxt9IIdcol7oH.png",
      alt: "Transfusion Scheduling",
      title: "Transfusion Scheduling",
      description:
        "Tomorrow's transfusion planning with detailed patient information and blood compatibility tracking.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xbfpnef3CRmNwnt0qEo3zyxOuZmR9L.png",
      alt: "Medical Information Form",
      title: "Medical Information",
      description:
        "Detailed medical information capture including blood group, phenotype, weight, height, and medical history.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KBT43FL6BVdur77OwWuLAKEbhio8Lz.png",
      alt: "Today's Transfusions",
      title: "Today's Transfusions",
      description: "Real-time tracking of today's scheduled transfusions with priority levels and completion status.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6rwGM55Ri8I9cNrNs7OMhwzRDYxGB.png",
      alt: "Historical Calendar",
      title: "Historical Calendar",
      description: "Calendar-based view for historical data analysis and appointment scheduling with patient details.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZkUSZ6vEBHRdc0ir7IgT5Iuk80nF6X.png",
      alt: "Patient Registration Form",
      title: "Patient Registration",
      description: "Comprehensive patient registration form with personal information and contact details.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YopohTf2j4fapsf6E2kV3XxDe6nmeX.png",
      alt: "Profile Settings",
      title: "Profile Settings",
      description: "User profile management with department settings and contact information updates.",
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
            <div className="font-bold text-xl text-primary">BloodCare Management</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <Badge variant="default" className="bg-red-500 text-lg px-4 py-1">
                Healthcare System
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                For Sale
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">BloodCare Management System</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive healthcare management system for blood donation centers with patient tracking, transfusion
              scheduling, and real-time analytics dashboard.
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

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Patient Management</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive patient database with blood group tracking, medical history, and contact information
                  management.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Transfusion Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced scheduling system for blood transfusions with priority management and automated reminders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time analytics with patient statistics, transfusion tracking, and urgent case monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Blood Compatibility</h3>
                <p className="text-sm text-muted-foreground">
                  Automated blood group and phenotype matching with compatibility checking for safe transfusions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-4">FR</div>
                <h3 className="font-semibold text-lg mb-2">French Interface</h3>
                <p className="text-sm text-muted-foreground">
                  Complete French language interface designed for healthcare professionals in French-speaking regions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-4">24/7</div>
                <h3 className="font-semibold text-lg mb-2">Real-time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring of urgent cases, system status, and critical patient information updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>System Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-user role management (doctors, nurses, administrators)</li>
                  <li>• Advanced search and filtering capabilities</li>
                  <li>• Export functionality for reports and patient lists</li>
                  <li>• Print-ready patient documentation</li>
                  <li>• Calendar-based appointment scheduling</li>
                  <li>• Real-time dashboard updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure patient data storage and encryption</li>
                  <li>• Blood group and phenotype database</li>
                  <li>• Medical history tracking and notes</li>
                  <li>• Transfusion history and compatibility records</li>
                  <li>• Emergency contact information management</li>
                  <li>• Automated backup and data recovery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in BloodCare Management?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact me to discuss purchase options, customization, and implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="mailto:mabrouk.logbibi@univ-annaba.dz" className="flex items-center gap-2">
                Email for Purchase
                <DollarSign className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/mabrouk-logbibi-0651b026a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </Button>
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
            © 2025 Mabrouk Logbibi. BloodCare Management System.
          </p>
        </div>
      </footer>
    </div>
  )
}
