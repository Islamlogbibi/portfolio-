"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Download, Zap, Target, Cpu, Users, Lightbulb, Phone, Settings } from "lucide-react"
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
          <p className="text-muted-foreground mb-2">
            <strong>Author:</strong> Mabrouk Logbibi
          </p>
          <p className="text-muted-foreground mb-6">
            <strong>Affiliation:</strong> Department of Computer Science and Electronics, Universit&eacute; Badji Mokhtar Annaba, Algeria
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
          
          {/* Abstract */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Abstract
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hearing loss represents one of the most prevalent yet underaddressed disabilities globally. The World Health Organization estimates that 1.5 billion people currently live with some degree of hearing loss, of whom approximately 430 million require rehabilitation services. This figure is projected to reach 2.5 billion affected individuals by 2050.
              </p>
              <p>
                Beyond access to hearing aids, a deeper problem persists: the near-total absence of sign language fluency in the general public, and the inability of current assistive systems to function in remote communication scenarios. Existing solutions&mdash;whether camera-based or sensor glove-based&mdash;assume co-located interaction and provide no mechanism for phone calls or remote contact.
              </p>
              <p>
                This paper proposes a multi-modal wearable system combining a sensor-equipped glove integrating flex sensors and an inertial measurement unit (IMU) with surface electromyography (sEMG) for robust, real-time gesture recognition. A classical machine learning pipeline using Support Vector Machines (SVM) and Random Forest classifiers processes fused sensor data on mobile hardware.
              </p>
              <p>
                The system is integrated into a mobile communication platform introducing a novel adaptive call model. Users are categorized by communication profile&mdash;hearing-impaired (x), speech-impaired (y), or unimpaired (z)&mdash;and the platform dynamically selects one of nine communication modes at call initiation, enabling seamless remote interaction across all profile combinations.
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
                For those who rely on sign language as their primary means of communication, the barrier is compounded by the near-total absence of sign language fluency in the general public. Sign language is not universal&mdash;each country has its own variant&mdash;and even within communities where it is used, the number of fluent signers outside the hearing-impaired community is extremely small.
              </p>
              <p>
                In Algeria, estimates of the deaf population range from 240,000 to 483,000, with a hearing loss frequency of approximately 3.6%&mdash;one of the highest in the region. This population is largely underserved by existing assistive technology and has no infrastructure for remote sign language communication.
              </p>
              <h4 className="font-semibold text-foreground mt-4">Limitations of Existing Approaches:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Vision-based systems:</strong> Require constant camera positioning, adequate lighting, limited to face-to-face or video-call scenarios</li>
                <li><strong>Sensor-based gloves:</strong> Designed exclusively for co-located translation with no mechanism for remote communication</li>
                <li><strong>No remote capability:</strong> A speech-impaired individual has no equivalent tool for making a phone call to a family member, doctor, or employer</li>
              </ul>
            </CardContent>
          </Card>

          {/* Proposed Contribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Proposed Contribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>This paper addresses the gap with a three-part contribution:</p>
              <div className="grid gap-4 mt-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1. Multi-Modal Wearable Sensing Architecture</h4>
                  <p className="text-sm">Combining a flex-sensor/IMU glove with surface EMG to improve gesture recognition accuracy and robustness compared to single-modality approaches.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2. Classical Machine Learning Pipeline</h4>
                  <p className="text-sm">Real-time gesture classification using SVM and Random Forest on fused sensor features, designed for deployment on mobile hardware.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">3. Adaptive Remote Communication Platform</h4>
                  <p className="text-sm">Categorizes users by communication profile and dynamically routes calls through one of nine communication modes, enabling inclusive voice and text-based calls.</p>
                </div>
              </div>
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
                <h4 className="font-semibold text-foreground mb-2">Data Acquisition Layer</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Glove module:</strong> 5 resistive flex sensors + 6-axis IMU, sampled at 100 Hz via BLE</li>
                  <li><strong>EMG module:</strong> 8-channel surface EMG wristband, sampled at 200 Hz via BLE</li>
                  <li>Timestamp-based synchronization with 10ms tolerance window</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Processing Layer</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Moving average filter for glove signals, complementary filter for IMU</li>
                  <li>Bandpass (20-450 Hz) and notch filter (50 Hz) for EMG signals</li>
                  <li>Feature extraction: MAV, RMS, waveform length, zero crossing, slope sign changes</li>
                  <li>200ms sliding window with 50% overlap</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Classification</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>SVM with RBF kernel + Random Forest (100 estimators)</li>
                  <li>Late fusion strategy with weighted majority vote</li>
                  <li>Target latency: under 300ms end-to-end</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Adaptive Communication Model */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Adaptive Communication Model (Novel Contribution)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Each user is assigned a communication profile: hearing-impaired (x), speech-impaired (y), or unimpaired (z). The platform dynamically selects one of nine communication modes at call initiation:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="p-3 text-left border-b border-border"></th>
                      <th className="p-3 text-left border-b border-border">Receiver: x (Hearing-impaired)</th>
                      <th className="p-3 text-left border-b border-border">Receiver: y (Speech-impaired)</th>
                      <th className="p-3 text-left border-b border-border">Receiver: z (Unimpaired)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-border font-semibold">Caller: x</td>
                      <td className="p-3 border-b border-border">Text &harr; Text</td>
                      <td className="p-3 border-b border-border">Text &harr; Text</td>
                      <td className="p-3 border-b border-border">Text &rarr; Speech (TTS)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-border font-semibold">Caller: y</td>
                      <td className="p-3 border-b border-border">Gesture &rarr; Text</td>
                      <td className="p-3 border-b border-border">Gesture &harr; Gesture</td>
                      <td className="p-3 border-b border-border">Gesture &rarr; Speech (TTS)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Caller: z</td>
                      <td className="p-3">Speech &rarr; Text (STT)</td>
                      <td className="p-3">Speech &rarr; Text (STT)</td>
                      <td className="p-3">Standard voice call</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Mode selection is automatic and transparent, requiring no manual configuration&mdash;a deliberate design choice based on AAC adoption research showing that operational complexity is a primary predictor of abandonment.
              </p>
            </CardContent>
          </Card>

          {/* Hardware Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Hardware Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="p-3 text-left border-b border-border">Component</th>
                      <th className="p-3 text-left border-b border-border">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border-b border-border font-medium">Glove</td><td className="p-3 border-b border-border">Lycra base, 5x flex sensors, MPU-6050 IMU</td></tr>
                    <tr><td className="p-3 border-b border-border font-medium">EMG module</td><td className="p-3 border-b border-border">Myo Armband (8-channel sEMG, 200 Hz)</td></tr>
                    <tr><td className="p-3 border-b border-border font-medium">Microcontroller</td><td className="p-3 border-b border-border">Arduino Nano / ESP32 (BLE + analog ADC)</td></tr>
                    <tr><td className="p-3 border-b border-border font-medium">Mobile device</td><td className="p-3 border-b border-border">Android smartphone (Flutter app)</td></tr>
                    <tr><td className="p-3 font-medium">Connectivity</td><td className="p-3">Bluetooth Low Energy 4.0+</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Key Advantages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Key Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Multi-Modal Fusion</h4>
                  <p className="text-sm text-muted-foreground">
                    Glove sensors fail on similar finger configurations; EMG fails on identical muscle patterns. Combined system handles both cases correctly with graceful degradation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Late Fusion Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Allows each modality to operate independently when the other is degraded, and enables separate optimization of per-modality classifiers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Remote Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    First system to integrate multi-modal wearable sensing with adaptive remote communication, enabling phone calls for speech-impaired users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">User Agency</h4>
                  <p className="text-sm text-muted-foreground">
                    Users can override automatic mode selection mid-call, reflecting that disability profiles are not binary.
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
                <li>Daily communication assistance for deaf and speech-impaired individuals</li>
                <li>Remote phone calls and video conferencing with automatic translation</li>
                <li>Healthcare consultations and medical appointments</li>
                <li>Emergency services communication</li>
                <li>Educational settings and professional environments</li>
                <li>Addressing the underserved deaf population in Algeria and similar regions</li>
              </ul>
            </CardContent>
          </Card>

          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle>Research Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This research is currently in draft form and has not yet been published. The paper presents a complete system design with detailed methodology and evaluation plan. Future work will focus on dataset collection, prototype construction, and user evaluation with target communities in Algeria and beyond.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong className="text-foreground">Note:</strong> To the best of our knowledge, no existing system integrates multi-modal wearable sensing with an adaptive remote communication model of this kind.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Keywords */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Sign Language Recognition</Badge>
              <Badge variant="outline">EMG</Badge>
              <Badge variant="outline">Wearable Systems</Badge>
              <Badge variant="outline">Assistive Technology</Badge>
              <Badge variant="outline">Multi-Modal Sensing</Badge>
              <Badge variant="outline">Adaptive Communication</Badge>
              <Badge variant="outline">Human-Computer Interaction</Badge>
              <Badge variant="outline">Mobile Health</Badge>
              <Badge variant="outline">Arabic Sign Language</Badge>
            </div>
          </div>

          {/* Download Section */}
          <Card className="border-primary/20 bg-muted/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Download Research Paper</h3>
                  <p className="text-sm text-muted-foreground">
                    The full PDF will be available once the paper is finalized for submission.
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
