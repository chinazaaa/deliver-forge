import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Users, Target } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function PairlanceCaseStudy() {
  const metrics = [
    { label: "Process Efficiency", value: "+80%", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { label: "Project Success", value: "95%", icon: Target, color: "from-blue-500 to-blue-600" },
    { label: "Team Satisfaction", value: "+70%", icon: Users, color: "from-green-500 to-green-600" },
    { label: "Time to Market", value: "-50%", icon: CheckCircle, color: "from-orange-500 to-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border-purple-200">
                Case Study
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold">
                How Pairlance{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  transformed their operations
                </span>{" "}
                with process optimization
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Pairlance, a mid-size consulting firm, was struggling with inefficient processes and project
                management across multiple client engagements. DeliverForge helped them forge a new operational
                framework.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Industry:</span>
                  <span>Consulting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Duration:</span>
                  <span>4 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Service:</span>
                  <span>Fractional PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Transformation Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="text-center p-6 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  The{" "}
                  <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                    Challenge
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>Pairlance was facing operational inefficiencies:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inconsistent project delivery across teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No standardized processes or methodologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Poor resource allocation and utilization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Client satisfaction declining due to delays</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Card className="p-8 border-2 border-red-100 text-center">
                <div className="text-6xl mb-4">📉</div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Operational Crisis</h3>
                <p className="text-gray-600">Multiple client projects at risk, team burnout increasing</p>
              </Card>
            </div>

            {/* Solution */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 border-2 border-orange-100 text-center">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">Process Optimization</h3>
                <p className="text-gray-600">Fractional PM + methodology overhaul</p>
              </Card>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Solution
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>We deployed a fractional PM to overhaul their operations:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Standardized project management methodology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Implemented resource planning and allocation system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Created client communication frameworks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Trained team leads on new processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 border-2 border-orange-100">
              <div className="space-y-6">
                <div className="text-6xl">💬</div>
                <blockquote className="text-xl italic text-gray-700">
                  "DeliverForge didn't just fix our processes - they transformed our entire business. We're now
                  delivering better results for clients while our team is happier and more efficient than ever."
                </blockquote>
                <div className="space-y-2">
                  <div className="font-bold text-lg">David Park</div>
                  <div className="text-orange-600">Managing Director, Pairlance</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your operations?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let DeliverForge help you optimize your processes and forge operational excellence like we did for
              Pairlance.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
