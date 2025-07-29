import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, TrendingUp, Users, Target, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function FractionalPMPage() {
  const benefits = [
    {
      title: "Cost-Effective Expertise",
      description: "Get senior-level PM expertise without the full-time salary and benefits cost",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Flexible Commitment",
      description: "Scale up or down based on your project needs and business cycles",
      icon: Target,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Multiple Project Oversight",
      description: "Coordinate and manage multiple projects simultaneously with strategic oversight",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Quick Integration",
      description: "Start immediately with experienced PMs who can hit the ground running",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
    },
  ]

  const features = [
    "20-30 hours per week dedicated time",
    "Multiple project coordination",
    "Strategic planning & roadmapping",
    "Team training & development",
    "Process optimization",
    "Comprehensive reporting",
    "Priority support",
    "Monthly strategy sessions",
    "Risk management",
    "Stakeholder communication",
  ]

  const idealFor = [
    "Growing companies with multiple ongoing projects",
    "Businesses needing strategic PM guidance",
    "Teams requiring process optimization",
    "Companies scaling their operations",
    "Organizations with seasonal project cycles",
    "Startups ready to professionalize their PM approach",
  ]

  const testimonials = [
    {
      quote:
        "Our fractional PM transformed how we approach project management. We're now delivering 40% faster with better quality.",
      author: "Sarah Chen",
      role: "CTO, SharePact",
      company: "SharePact",
    },
    {
      quote: "The strategic guidance and process improvements have been game-changing for our growing team.",
      author: "Jessica Rodriguez",
      role: "VP Operations, ClockPath",
      company: "ClockPath",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200">
              Fractional Project Managers
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold">
              Strategic{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                fractional PM expertise
              </span>{" "}
              for growing businesses
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get senior-level project management expertise without the full-time commitment. Perfect for businesses
              that need strategic oversight across multiple projects with the flexibility to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  <a href="/pricing">
    View Pricing
  </a>
</Button>

            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>1-6 month engagements</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>20-30 hours/week</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>$500/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                fractional PMs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the strategic expertise you need with the flexibility your business demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  What's{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    included
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our fractional PMs provide comprehensive project management services tailored to your business needs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-2 border-orange-100 shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Fractional PM Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">$500</div>
                    <div className="text-gray-500">per month</div>
                    <Badge variant="outline" className="mt-2">
                      1-6 months
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Weekly commitment:</span>
                      <span className="font-medium">20-30 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response time:</span>
                      <span className="font-medium">&lt; 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly reviews:</span>
                      <span className="font-medium">Included</span>
                    </div>
                  </div>
                  <Button
  className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-600"
  asChild
>
  <a
    href="https://calendly.com/deliverforge/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get Started
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Perfect for{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  growing businesses
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {idealFor.map((item, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                success stories
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl text-orange-600">"</div>
                    <blockquote className="text-gray-700 italic">{testimonial.quote}</blockquote>
                    <div className="space-y-1">
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-orange-600 text-sm">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started with fractional PM?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Book a free strategy call to discuss your project needs and get matched with the perfect fractional PM in
              48 hours.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                Book Strategy Call
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
