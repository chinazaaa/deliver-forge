import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import Section from "@/components/section" // Declare the Section variable

export default function FitsCheckCaseStudy() {
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
              <Badge className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 border-pink-200">
                Case Study
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold">
                FitsCheck{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  case study
                </span>{" "}
                coming soon
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                We're currently partnering with FitsCheck on an exciting manufacturing optimization project. Stay tuned
                for the full success story!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-2 border-pink-100">
              <div className="space-y-6">
                <div className="text-6xl">⏳</div>
                <h2 className="text-3xl font-bold">Project In Progress</h2>
                <p className="text-xl text-gray-600">
                  FitsCheck is currently working with our team to optimize their manufacturing processes. We'll share
                  the full case study once the project is complete!
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
      <Section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Want to be our next success story?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join companies like FitsCheck who trust DeliverForge to forge their most important projects.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  )
}
