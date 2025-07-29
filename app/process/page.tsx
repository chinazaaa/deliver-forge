import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, UserCheck, Rocket, ArrowRight, CheckCircle, Clock, Users, Target, Zap, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader currentPage="process" />

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
              The DeliverForge Method
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              How we{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                forge success
              </span>{" "}
              in 48 hours
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 3-step process has helped 200+ companies find their perfect project manager match. From
              strategy call to project kickoff, we make it seamless, fast, and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-6"
                asChild
              >
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">48-Hour Matching</h3>
              <p className="text-gray-600">From strategy call to PM introduction in just 2 business days</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Vetted Professionals</h3>
              <p className="text-gray-600">Only the top 5% of project managers make it through our screening</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Perfect Match</h3>
              <p className="text-gray-600">Matched based on industry, project type, and team culture fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed 3-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-orange-100 text-orange-700 text-sm font-bold px-3 py-1 rounded-full">
                      Step 1
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Book a Strategy Call</h2>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We start with a comprehensive 30-minute strategy session to understand your project needs, timeline,
                  budget, and success criteria. This isn't just a sales call – it's a deep dive into what you need to
                  succeed.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Project scope and requirements analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Timeline and budget discussion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Team culture and working style assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Success metrics and KPI definition</span>
                  </div>
                </div>
              </div>
              <Card className="relative overflow-hidden border-2 border-orange-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">What We'll Cover</h3>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Project Deep Dive</h4>
                        <p className="text-orange-700 text-sm">
                          Understanding your goals, challenges, and requirements
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800">Team Assessment</h4>
                        <p className="text-red-700 text-sm">Evaluating your current team and identifying gaps</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Success Planning</h4>
                        <p className="text-purple-700 text-sm">
                          Defining what success looks like and how to measure it
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="relative overflow-hidden border-2 border-red-100 lg:order-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500"></div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Our Matching Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">AI-Powered Screening</h4>
                          <p className="text-gray-600 text-sm">Our algorithm identifies the best candidates</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Manual Review</h4>
                          <p className="text-gray-600 text-sm">Our team validates the perfect matches</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Final Selection</h4>
                          <p className="text-gray-600 text-sm">We present you with 1-3 ideal candidates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">Step 2</span>
                    <h2 className="text-3xl font-bold mt-2">Get Matched with Your PM</h2>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Within 48 hours, our team works behind the scenes to find your perfect project manager match. We use a
                  combination of AI screening and human expertise to ensure the best possible fit for your specific
                  needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Industry expertise matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Technical skills verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Cultural fit assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Reference and background checks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-purple-100 text-purple-700 text-sm font-bold px-3 py-1 rounded-full">
                      Step 3
                    </span>
                    <h2 className="text-3xl font-bold mt-2">Forge Success Together</h2>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your matched project manager joins your team and immediately takes ownership of execution. They bring
                  proven methodologies, tools, and expertise to forge the path to success while giving you your time
                  back and peace of mind.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Seamless onboarding and integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Immediate project assessment and planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Regular progress updates and reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Continuous optimization and improvement</span>
                  </div>
                </div>
              </div>
              <Card className="relative overflow-hidden border-2 border-purple-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">First 30 Days</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Week 1: Assessment</h4>
                        <p className="text-purple-700 text-sm">Deep dive into current state and quick wins</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-pink-800">Week 2-3: Planning</h4>
                        <p className="text-pink-700 text-sm">Detailed roadmap and milestone definition</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Week 4: Execution</h4>
                        <p className="text-orange-700 text-sm">Implementation begins with measurable progress</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why our process{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                delivers results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our methodology is built on years of experience and hundreds of successful project manager placements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-2 border-orange-100 hover:border-orange-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Speed</h3>
              <p className="text-gray-600 text-sm">48-hour matching vs. 4-6 weeks traditional hiring</p>
            </Card>

            <Card className="text-center p-6 border-2 border-red-100 hover:border-red-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Precision</h3>
              <p className="text-gray-600 text-sm">95% success rate with our matching algorithm</p>
            </Card>

            <Card className="text-center p-6 border-2 border-purple-100 hover:border-purple-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Only top 5% of applicants pass our screening</p>
            </Card>

            <Card className="text-center p-6 border-2 border-green-100 hover:border-green-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Ongoing support throughout the entire engagement</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to experience the DeliverForge difference?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join 200+ companies who trust our proven process. Book your strategy call today and get matched with your
              perfect project manager in just 48 hours.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
