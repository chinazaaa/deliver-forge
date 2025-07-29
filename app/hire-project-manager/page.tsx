import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle, Clock, Users, Zap, Star, ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Hire Startup Project Manager | On-Demand Fractional PM Services | DeliverForge",
  description:
    "Hire experienced startup project managers in 48 hours. On-demand fractional project management for startups, scale-ups, and growing businesses. Book now!",
  keywords: [
    "hire startup project manager",
    "on-demand project manager for startups",
    "fractional project manager for startups",
    "startup project management services",
    "hire project manager startup",
    "on-demand project management",
    "fractional PM for startups",
    "startup project manager hiring",
    "project manager for growing business",
    "startup PM consultant",
    "hire fractional project manager",
    "on-demand PM services",
    "startup project management expert",
    "project manager for scale-ups",
    "hire project management consultant",
  ],
  openGraph: {
    title: "Hire Startup Project Manager | On-Demand Fractional PM Services",
    description:
      "Get matched with experienced startup project managers in 48 hours. On-demand fractional project management services for growing businesses.",
    url: "https://deliverforge.com/hire-project-manager",
  },
}

export default function HireProjectManagerPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader currentPage="hire-project-manager" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
              ⚡ 48-Hour Matching Guarantee
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Hire a Startup Project Manager Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Get matched with experienced <strong>on-demand project managers for startups</strong> in just 48 hours. No
              hiring hassle, no long-term commitments. Just expert project management when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-4"
                asChild
              >
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Project Manager Now
                </a>
              </Button>
              <p className="text-sm text-gray-600">
                ✅ Free 30-min consultation ✅ No setup fees ✅ Start in 48 hours
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">48hrs</div>
                <div className="text-gray-600">Average Matching Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Hire a Fractional Project Manager for Your Startup?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Skip the lengthy hiring process and get expert project management support exactly when you need it.
                Perfect for startups and growing businesses that need professional PM expertise without the full-time
                commitment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Expertise</h3>
                  <p className="text-gray-600">
                    Get access to senior-level project managers with 5+ years of startup experience. No training
                    required - they hit the ground running.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Flexible Commitment</h3>
                  <p className="text-gray-600">
                    Scale up or down based on your needs. From 10 hours/week to full-time support, adjust as your
                    startup grows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                  <p className="text-gray-600">
                    Save 40-60% compared to hiring a full-time PM. No benefits, no office space, no long-term contracts
                    required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Pre-Vetted Talent</h3>
                  <p className="text-gray-600">
                    All our project managers are thoroughly screened, with proven track records in startup environments
                    and agile methodologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Startup-Focused</h3>
                  <p className="text-gray-600">
                    Our PMs understand startup challenges: limited resources, rapid pivots, and the need for speed and
                    agility.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quick Start</h3>
                  <p className="text-gray-600">
                    Start working with your project manager within 48 hours. No lengthy onboarding - just immediate
                    impact on your projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Perfect for Growing Startups and Scale-ups</h2>
              <p className="text-xl text-gray-600">
                Our on-demand project management services are ideal for businesses at critical growth stages
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-600">Early-Stage Startups</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Need to organize chaotic workflows and establish processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Preparing for product launches or major releases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Managing remote or distributed teams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Can't afford a full-time PM yet</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">Growing Scale-ups</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Scaling operations and need temporary PM support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Managing multiple complex projects simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Implementing new tools and processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Need specialized expertise for specific initiatives</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-4"
                asChild
              >
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Project Manager Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How to Hire Your Startup Project Manager</h2>
              <p className="text-xl text-gray-600">
                Simple, fast, and transparent process to get you the right project management expertise
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Book Consultation</h3>
                <p className="text-gray-600">
                  Schedule a free 30-minute call to discuss your project needs, timeline, and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                <p className="text-gray-600">
                  We match you with 2-3 pre-vetted project managers based on your industry, project type, and culture
                  fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Interview & Select</h3>
                <p className="text-gray-600">
                  Interview candidates and select the best fit. We handle all the paperwork and contracts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Working</h3>
                <p className="text-gray-600">
                  Your project manager starts immediately, bringing structure and momentum to your projects.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Hire Your Startup Project Manager?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join 200+ startups that have accelerated their growth with our on-demand project management services
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-4"
                  asChild
                >
                  <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What Startup Founders Say</h2>
              <p className="text-xl text-gray-600">
                Real results from real startups who hired fractional project managers through DeliverForge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Our fractional PM from DeliverForge helped us launch our MVP 3 weeks ahead of schedule. The ROI was
                  immediate - we closed our Series A two months later."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah</div>
                    <div className="text-sm text-gray-600">CEO, Pairlance</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "We were drowning in chaos before hiring our fractional PM. Now we have clear processes, better
                  communication, and our team is 3x more productive."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike</div>
                    <div className="text-sm text-gray-600">Founder, SharePact</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The 48-hour matching was real. We had our PM onboarded and working on day 3. Best decision we made
                  for scaling our operations."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Alex</div>
                    <div className="text-sm text-gray-600">CTO, LearnPinnacle</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Struggling with Project Chaos</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get the expert project management support your startup needs to scale successfully. Book your consultation
              today and get matched with the perfect PM in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
                asChild
              >
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Project Manager Now
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <p className="text-sm opacity-90">
                  ✅ Free consultation ✅ 48-hour matching ✅ No long-term contracts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 opacity-90">
              <div>
                <div className="text-2xl font-bold">48 Hours</div>
                <div className="text-sm">Average matching time</div>
              </div>
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Successful projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Client satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
