"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, Target, Cpu, Zap, AlertTriangle, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function EEGMotorIntentionPage() {
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
            <Badge variant="default" className="bg-primary">Proposed Research</Badge>
            <Badge variant="secondary">AI & Signal Processing</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            EEG-Based Motor Intention Decoding for Assistive Human-Computer Interaction
          </h1>
          <p className="text-lg text-muted-foreground">
            A research proposal focused on developing real-time EEG-based systems to decode motor intentions for assistive technologies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Background */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Background and Motivation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Individuals with severe motor impairments (e.g., paralysis) often lose the ability to interact with their environment. Traditional assistive technologies (switches, eye tracking) are limited in flexibility and speed.
              </p>
              <p>
                Brain-Computer Interfaces (BCIs) based on EEG provide a direct method for decoding motor intentions from brain activity, enabling control of external systems without physical movement.
              </p>
              <p>
                Among EEG paradigms, motor imagery (MI)—where users imagine movements such as hand or finger motion—has shown strong potential for real-time control. However, current systems still face:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Low accuracy due to noisy EEG signals</li>
                <li>High variability between users</li>
                <li>Limited generalization across sessions</li>
              </ul>
              <p>
                This research aims to improve the reliability and usability of EEG-based motor intention decoding using modern machine learning techniques.
              </p>
            </CardContent>
          </Card>

          {/* Objective */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Research Objective
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The objective is to develop a real-time EEG-based system that can decode motor intentions and map them to control commands.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Target Outputs</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hand movement intentions (left / right / grasp)</li>
                    <li>Simple control commands (select, move, confirm)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Design Goals</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Assistive interaction</li>
                    <li>Real-time responsiveness</li>
                    <li>Scalability to more complex control tasks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Proposed Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.1 Data Acquisition</h4>
                <p>EEG device (e.g., Emotiv, OpenBCI) focusing on motor imagery tasks:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Imagined left-hand movement</li>
                  <li>Imagined right-hand movement</li>
                  <li>Rest state</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.2 Signal Processing</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Band-pass filtering (focus on mu and beta rhythms)</li>
                  <li>Artifact removal (eye blinks, muscle noise)</li>
                  <li>Channel selection (motor cortex regions)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.3 Feature Extraction</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Common Spatial Patterns (CSP)</li>
                  <li>Power spectral density (PSD)</li>
                  <li>Time-frequency representations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.4 Model Design</h4>
                <p>Use a hybrid deep learning approach:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>CNN → spatial EEG patterns</li>
                  <li>LSTM / Transformer → temporal dynamics</li>
                  <li>Classifier → motor intention classes</li>
                </ul>
                <p className="mt-2">Focus on lightweight models for real-time use and subject-specific adaptation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.5 Real-Time System</h4>
                <p>Translate decoded intentions into:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Cursor movement</li>
                  <li>Virtual keyboard control</li>
                  <li>Simple robotic commands</li>
                </ul>
                <p className="mt-2">Interface: Desktop or mobile application</p>
              </div>
            </CardContent>
          </Card>

          {/* Expected Contributions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Expected Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>A robust EEG-based motor intention decoding model</li>
                <li>Improved accuracy for motor imagery classification</li>
                <li>A real-time assistive control prototype</li>
                <li>Evaluation of deep learning vs traditional methods (CSP + SVM)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>EEG noise and instability</li>
                <li>User training requirements</li>
                <li>Inter-subject variability</li>
                <li>Limited hardware precision (consumer EEG devices)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Future Work */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Future Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Continuous control (not just classification)</li>
                <li>Integration with robotic systems or prosthetics</li>
                <li>Hybrid BCI (EEG + EMG or eye tracking)</li>
                <li>Adaptive models that learn user patterns over time</li>
              </ul>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                This research focuses on decoding motor intentions from EEG signals to enable intuitive and accessible human-computer interaction. By combining signal processing and deep learning, the system aims to provide a practical assistive solution for individuals with limited mobility.
              </p>
            </CardContent>
          </Card>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies & Methods</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">EEG Signal Processing</Badge>
              <Badge variant="outline">Motor Imagery</Badge>
              <Badge variant="outline">Deep Learning</Badge>
              <Badge variant="outline">CNN</Badge>
              <Badge variant="outline">LSTM</Badge>
              <Badge variant="outline">Transformer</Badge>
              <Badge variant="outline">Common Spatial Patterns</Badge>
              <Badge variant="outline">Real-time Systems</Badge>
              <Badge variant="outline">Assistive Technology</Badge>
              <Badge variant="outline">BCI</Badge>
            </div>
          </div>

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
