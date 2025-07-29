import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, ArrowRight, Calendar, UserCheck, Rocket } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hire Startup Project Managers in 48 Hours | DeliverForge",
  description:
    "Need help delivering your startup project on time? DeliverForge matches you with expert, on-demand project managers in 48 hours. Fractional, full-time, or sprint-based — only vetted professionals.",
  keywords: [
    "project manager",
    "project management services",
    "hire project manager",
    "fractional project manager",
    "full-time project manager",
    "48 hour matching",
    "vetted project managers",
    "project delivery",
    "agile project manager",
    "scrum master",
    "USA project manager",
    "UK project manager",
    "Canada project manager",
    "Australia project manager",
  ],
  openGraph: {
    title: "Expert Project Managers in 48 Hours | DeliverForge",
    description: "Get matched with vetted project managers in 48 hours. Trusted by 200+ companies worldwide.",
    url: "https://deliverforge.com",
  },
  alternates: {
    canonical: "https://deliverforge.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
                  ⚡ Expert Project Managers Ready
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hire expert{" "}
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                    project managers
                  </span>{" "}
                  in 48 hours
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
  Startups move fast — and we help you keep up. Get matched with a vetted, expert project manager in{" "}
  <strong>48 hours</strong> to hit your milestones on time. Flexible for{" "}
  <span className="text-orange-600 font-semibold">1 week or 1 year</span>, full-time or fractional.
  We work with startups in the <strong>USA, UK, Canada, and Australia</strong>.
</p>

              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>


                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent"
                  asChild
                >
                  <Link href="/process">See How We Work</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>48-hour matching guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Vetted professionals only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>200+ successful projects</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">Expert Project Managers</h2>
                      <p className="text-gray-600">Ready to deliver your success</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Sarah M.", role: "Senior PM", specialty: "SaaS", color: "from-orange-400 to-red-400" },
                      {
                        name: "Marcus R.",
                        role: "Technical PM",
                        specialty: "DevOps",
                        color: "from-red-400 to-purple-400",
                      },
                      {
                        name: "Emily C.",
                        role: "Product PM",
                        specialty: "Mobile",
                        color: "from-purple-400 to-pink-400",
                      },
                      {
                        name: "David L.",
                        role: "Agile PM",
                        specialty: "Startups",
                        color: "from-orange-400 to-yellow-400",
                      },
                      {
                        name: "Lisa K.",
                        role: "Program PM",
                        specialty: "Enterprise",
                        color: "from-red-400 to-orange-400",
                      },
                      {
                        name: "James T.",
                        role: "Digital PM",
                        specialty: "E-commerce",
                        color: "from-purple-400 to-red-400",
                      },
                    ].map((pm, i) => (
                      <div key={i} className="flex flex-col items-center space-y-2">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${pm.color} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
                        >
                          {pm.name.split(" ")[0][0]}
                          {pm.name.split(" ")[1][0]}
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-medium text-gray-700">{pm.name}</div>
                          <div className="text-xs text-orange-600">{pm.specialty}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Average matching time</span>
                      <span className="font-bold text-orange-600">48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Trusted by 200+ companies worldwide to deliver their most critical projects
            </h2>
            <p className="text-gray-600">
            Supporting early-stage startups, scale-ups, and enterprise teams across USA, UK, Canada, and Australia
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: "SharePact", color: "from-blue-500 to-blue-600", href: "/case-studies/sharepact" },
                { name: "ClockPath", color: "from-green-500 to-green-600", href: "/case-studies/clockpath" },
                { name: "Pairlance", color: "from-purple-500 to-purple-600", href: "/case-studies/pairlance" },
                { name: "LearnPinnacle", color: "from-orange-500 to-orange-600", href: "/case-studies/learnpinnacle" },
                { name: "FitsCheck", color: "from-pink-500 to-pink-600", href: "/case-studies/fitscheck" },
              ].map((company) => (
                <div key={company.name} className="text-center">
                  <Link href={company.href} className="block group">
                    <div
                      className={`h-12 bg-gradient-to-r ${company.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 cursor-pointer`}
                    >
                      <span className="text-white font-bold text-sm">{company.name}</span>
                    </div>
                    {company.href !== "#" && (
                      <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study
                      </p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
              The DeliverForge Method
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              From strategy call to{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                project success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 3-step process connects you with the perfect project manager in just 48 hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-100 text-orange-700 text-sm font-bold px-3 py-1 rounded-full">
                      Step 1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Book a Strategy Call</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We assess your project needs, timeline, and success criteria in a comprehensive strategy session to
                    understand exactly what you need for success.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">Step 2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Get Matched with Your PM</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Within 48 hours, we match you with a vetted project manager who has the exact expertise and
                    experience for your project and industry.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 text-sm font-bold px-3 py-1 rounded-full">
                      Step 3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Achieve Project Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your PM joins your team, takes ownership of execution, and delivers results while giving you your
                    time back and peace of mind.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <Link href="/process">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Project management services{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                tailored for you
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you need urgent support or long-term partnership, we have the right solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold">Sprint PMs</h3>
                <p className="text-gray-600">1-4 weeks • $100/week</p>
                <p className="text-sm text-gray-500">Perfect for urgent deadlines and quick wins</p>
                <Button className="w-full" asChild>
                  <Link href="/services/sprint">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-xl scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold">Fractional PMs</h3>
                <p className="text-gray-600">1-6 months • $500/month</p>
                <p className="text-sm text-gray-500">Strategic oversight for growing businesses</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500" asChild>
                  <Link href="/services/fractional">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">👑</span>
                </div>
                <h3 className="text-xl font-bold">Full-Time PMs</h3>
                <p className="text-gray-600">3-12 months • $1,000/month</p>
                <p className="text-sm text-gray-500">Dedicated expertise for critical projects</p>
                <Button className="w-full" asChild>
                  <Link href="/services/full-time">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
  Ready to deliver your next project — without hiring full-time?
</h2>
<p className="text-xl opacity-90 max-w-2xl mx-auto">
  DeliverForge connects you with flexible, expert project managers trusted by 200+ startups and tech teams.
  Book your free strategy call today.
</p>

            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Project Management Services",
            description: "Expert project managers available in 48 hours for businesses worldwide",
            provider: {
              "@type": "Organization",
              name: "DeliverForge",
              url: "https://deliverforge.com",
            },
            areaServed: [
              {
                "@type": "Country",
                name: "United States",
              },
              {
                "@type": "Country",
                name: "United Kingdom",
              },
              {
                "@type": "Country",
                name: "Canada",
              },
              {
                "@type": "Country",
                name: "Australia",
              },
            ],
            serviceType: "Project Management",
            offers: [
              {
                "@type": "Offer",
                name: "Sprint Project Manager",
                description: "1-4 week project management services",
                price: "2500",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "2500",
                  priceCurrency: "USD",
                  unitText: "per week",
                },
              },
              {
                "@type": "Offer",
                name: "Fractional Project Manager",
                description: "1-6 month part-time project management",
                price: "8500",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "8500",
                  priceCurrency: "USD",
                  unitText: "per month",
                },
              },
              {
                "@type": "Offer",
                name: "Full-Time Project Manager",
                description: "3-12 month dedicated project management",
                price: "15000",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "15000",
                  priceCurrency: "USD",
                  unitText: "per month",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
