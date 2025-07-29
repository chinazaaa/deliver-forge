import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Users, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function SharePactCaseStudy() {
  const metrics = [
    { label: "Time Saved", value: "40%", icon: Clock, color: "from-blue-500 to-blue-600" },
    { label: "Team Productivity", value: "+65%", icon: TrendingUp, color: "from-green-500 to-green-600" },
    { label: "Project Delivery", value: "On Time", icon: CheckCircle, color: "from-orange-500 to-orange-600" },
    { label: "Team Members", value: "25", icon: Users, color: "from-purple-500 to-purple-600" },
  ]

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Discovery & Strategy",
      description: "Conducted comprehensive project audit and stakeholder interviews",
      status: "completed",
    },
    {
      phase: "Week 3-6",
      title: "Process Implementation",
      description: "Rolled out new project management framework and team training",
      status: "completed",
    },
    {
      phase: "Week 7-12",
      title: "Optimization & Scale",
      description: "Fine-tuned processes and scaled across multiple product teams",
      status: "completed",
    },
    {
      phase: "Ongoing",
      title: "Continuous Improvement",
      description: "Monthly reviews and process refinements for sustained success",
      status: "active",
    },
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
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200">
                Case Study
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold">
                How SharePact{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  scaled their product delivery
                </span>{" "}
                by 65%
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                SharePact, a fast-growing SaaS company, was struggling with project delays and team coordination across
                multiple product lines. DeliverForge stepped in to forge a new path to success.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Industry:</span>
                  <span>SaaS Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Duration:</span>
                  <span>6 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Team Size:</span>
                  <span>25 members</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Results Forged</h2>
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

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  The{" "}
                  <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                    Challenge
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    SharePact was experiencing rapid growth but their project management processes couldn't keep up.
                    They were facing:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Missed deadlines on 60% of product releases</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Poor communication between development and product teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lack of visibility into project progress and bottlenecks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Burnout among team members due to constant firefighting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
                <Card className="relative bg-white rounded-3xl p-8 shadow-2xl border border-red-100">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">⚠️</div>
                    <h3 className="text-xl font-bold text-red-600">Critical Issues</h3>
                    <p className="text-gray-600">
                      Multiple product launches at risk, team morale declining, customer satisfaction dropping
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
                <Card className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🔨</div>
                    <h3 className="text-xl font-bold text-orange-600">DeliverForge Solution</h3>
                    <p className="text-gray-600">Fractional PM + Process Optimization + Team Training</p>
                  </div>
                </Card>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Solution
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We deployed a senior fractional project manager and implemented our proven DeliverForge methodology:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Implemented Agile project management framework across all teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Established clear communication channels and regular standups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Created real-time project dashboards for full visibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Trained internal team members on best practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Project Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.status === "completed"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-gradient-to-r from-orange-500 to-red-500"
                      }`}
                    >
                      {item.status === "completed" ? (
                        <CheckCircle className="h-6 w-6 text-white" />
                      ) : (
                        <Clock className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline">{item.phase}</Badge>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 border-2 border-orange-100">
              <div className="space-y-6">
                <div className="text-6xl">💬</div>
                <blockquote className="text-xl italic text-gray-700">
                  "DeliverForge transformed our entire approach to project management. We went from constantly missing
                  deadlines to delivering ahead of schedule. The team is happier, more productive, and we're shipping
                  better products faster than ever."
                </blockquote>
                <div className="space-y-2">
                  <div className="font-bold text-lg">Michael Chen</div>
                  <div className="text-orange-600">CTO, SharePact</div>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to forge your success story?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              See how DeliverForge can transform your project delivery and team productivity just like we did for
              SharePact.
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
