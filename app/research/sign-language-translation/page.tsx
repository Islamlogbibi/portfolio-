"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Download, Zap, Target, Cpu, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function SignLanguageTranslationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="font-bold text-xl text-primary">Mabrouk Logbibi</div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default" className="bg-primary">Draft Paper</Badge>
            <Badge variant="secondary">Unpublished Research</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            A Multi-Modal Wearable System for Real-Time Sign Language Translation and Adaptive Remote Communication
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A comprehensive research paper exploring wearable technology for bridging communication gaps through real-time sign language translation.
          </p>
          <Button className="bg-primary hover:bg-primary/90" disabled>
            <Download className="w-4 h-4 mr-2" />
            Download PDF (Coming Soon)
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Abstract / Overview */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Research Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This research presents a multi-modal wearable system designed to enable real-time sign language translation for deaf and hard-of-hearing individuals. The system combines multiple sensing modalities to capture hand gestures, finger movements, and muscle activity, translating them into speech and text output.
              </p>
              <p>
                The proposed approach integrates glove-based sensors with electromyography (EMG) signals to achieve high accuracy in gesture recognition while maintaining real-time performance suitable for natural conversation speeds.
              </p>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Communication barriers between deaf/hard-of-hearing individuals and hearing people remain a significant challenge. Current solutions are often:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dependent on human interpreters (limited availability, cost)</li>
                <li>Camera-based systems requiring specific positioning and lighting</li>
                <li>Slow or inaccurate for real-time conversation</li>
                <li>Unable to adapt to individual signing styles</li>
              </ul>
              <p>
                This research addresses these limitations by developing a wearable, adaptive system that works in any environment and learns user-specific patterns over time.
              </p>
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                System Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Sensing Layer</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Flex sensors for finger bend detection</li>
                  <li>IMU sensors for hand orientation and movement</li>
                  <li>EMG electrodes for muscle activity capture</li>
                  <li>Contact sensors for touch detection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Processing Layer</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Real-time signal preprocessing and filtering</li>
                  <li>Feature extraction from multi-modal inputs</li>
                  <li>Deep learning-based gesture classification</li>
                  <li>Temporal modeling for continuous sign recognition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Output Layer</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Text-to-speech synthesis for audio output</li>
                  <li>Real-time text display on mobile/desktop</li>
                  <li>Integration with video conferencing platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Key Innovations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Key Innovations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Adaptive Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    The system learns user-specific signing patterns over time, improving accuracy through personalized model fine-tuning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Multi-Modal Fusion</h4>
                  <p className="text-sm text-muted-foreground">
                    Combining glove sensors with EMG provides redundancy and improves recognition accuracy in challenging conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Real-Time Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized models achieve sub-100ms latency, enabling natural conversation flow without noticeable delays.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Remote Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Direct integration with video conferencing tools enables seamless remote communication with automatic captioning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Target Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Target Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Daily communication assistance for deaf individuals</li>
                <li>Educational settings and classrooms</li>
                <li>Healthcare consultations and medical appointments</li>
                <li>Professional meetings and remote work environments</li>
                <li>Emergency services communication</li>
                <li>Public service accessibility</li>
              </ul>
            </CardContent>
          </Card>

          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Research Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This research is currently in draft form and has not yet been published. The paper covers theoretical foundations, system design, preliminary experimental results, and future directions.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong className="text-foreground">Note:</strong> The full paper PDF will be available for download once the research is finalized and ready for submission.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies & Methods</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">EMG Sensing</Badge>
              <Badge variant="outline">Flex Sensors</Badge>
              <Badge variant="outline">IMU</Badge>
              <Badge variant="outline">Deep Learning</Badge>
              <Badge variant="outline">Signal Processing</Badge>
              <Badge variant="outline">Real-time Systems</Badge>
              <Badge variant="outline">Text-to-Speech</Badge>
              <Badge variant="outline">Wearable Technology</Badge>
              <Badge variant="outline">Human-Computer Interaction</Badge>
              <Badge variant="outline">Assistive Technology</Badge>
            </div>
          </div>

          {/* Download Section */}
          <Card className="border-primary/20 bg-muted/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Download Research Paper</h3>
                  <p className="text-sm text-muted-foreground">
                    The full PDF will be available once the paper is finalized.
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary/90" disabled>
                  <Download className="w-4 h-4 mr-2" />
                  PDF Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="pt-8">
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
