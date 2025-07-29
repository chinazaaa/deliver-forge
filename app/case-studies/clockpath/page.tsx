import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function ClockPathCaseStudy() {
  const metrics = [
    { label: "Funding Raised", value: "$2.5M", icon: DollarSign, color: "from-green-500 to-green-600" },
    { label: "Product Launch", value: "3 Months", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
    { label: "Team Growth", value: "5 to 15", icon: Users, color: "from-purple-500 to-purple-600" },
    { label: "MVP Success", value: "100%", icon: CheckCircle, color: "from-orange-500 to-orange-600" },
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
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 border-green-200">
                Case Study
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold">
                How ClockPath{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  launched their MVP
                </span>{" "}
                and raised $2.5M
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                ClockPath, an early-stage fintech startup, needed to build and launch their MVP quickly to secure
                Series A funding. DeliverForge helped them forge a path from concept to successful funding round.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Industry:</span>
                  <span>Fintech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Duration:</span>
                  <span>6 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Service:</span>
                  <span>Full-Time PM</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Success Forged</h2>
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
                  <p>ClockPath had a great idea but faced typical early-stage challenges:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Limited runway - only 8 months of funding left</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No dedicated project management expertise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complex regulatory requirements for fintech</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Need to prove product-market fit for investors</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Card className="p-8 border-2 border-red-100 text-center">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Time Critical</h3>
                <p className="text-gray-600">8 months to MVP launch and Series A funding</p>
              </Card>
            </div>

            {/* Solution */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 border-2 border-orange-100 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">Full-Time PM</h3>
                <p className="text-gray-600">Dedicated project manager + startup expertise</p>
              </Card>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Approach
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>We provided a full-time senior PM with fintech experience:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Created detailed product roadmap and sprint planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Managed regulatory compliance requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Coordinated with legal, dev, and design teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prepared investor-ready progress reports</span>
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
                  "Without DeliverForge, we never would have made it to our Series A. Their PM didn't just manage our
                  project - they became part of our founding team and helped us build something investors believed in."
                </blockquote>
                <div className="space-y-2">
                  <div className="font-bold text-lg">Jessica Rodriguez</div>
                  <div className="text-orange-600">CEO & Founder, ClockPath</div>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to forge your startup's success?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let DeliverForge help you build, launch, and scale your product just like we did for ClockPath.
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
