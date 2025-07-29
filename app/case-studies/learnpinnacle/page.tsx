import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Users, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function LearnPinnacleCaseStudy() {
  const metrics = [
    { label: "Revenue Growth", value: "+150%", icon: TrendingUp, color: "from-orange-500 to-orange-600" },
    { label: "Market Expansion", value: "3 Countries", icon: Zap, color: "from-red-500 to-red-600" },
    { label: "Team Scale", value: "10x Growth", icon: Users, color: "from-purple-500 to-purple-600" },
    { label: "Product Lines", value: "+5 New", icon: CheckCircle, color: "from-green-500 to-green-600" },
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
              <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border-orange-200">
                Case Study
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold">
                How LearnPinnacle{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  scaled internationally
                </span>{" "}
                with 150% revenue growth
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                LearnPinnacle, a rapidly expanding e-commerce platform, needed expert project management to coordinate
                their international expansion across multiple markets simultaneously.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Industry:</span>
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Duration:</span>
                  <span>12 months</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Growth Forged</h2>
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

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-2 border-orange-100">
              <div className="space-y-6">
                <div className="text-6xl">🚧</div>
                <h2 className="text-3xl font-bold">Case Study Coming Soon</h2>
                <p className="text-xl text-gray-600">
                  We're currently working with LearnPinnacle on their international expansion. Full case study details
                  will be available soon!
                </p>
                <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
                  Get Notified When Available
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to forge your growth story?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let DeliverForge help you scale and expand your business just like we're doing for LearnPinnacle.
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
