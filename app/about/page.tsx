import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Globe, TrendingUp, Heart, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Forged", icon: Award, color: "from-orange-500 to-orange-600" },
    { number: "200+", label: "Happy Clients", icon: Users, color: "from-red-500 to-red-600" },
    { number: "98%", label: "Success Rate", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { number: "15+", label: "Industries Served", icon: Globe, color: "from-pink-500 to-pink-600" },
  ]

  const values = [
    {
      title: "Excellence Forged",
      description:
        "We only work with the top 5% of project managers who have proven track records of forging exceptional results and delivering transformative outcomes.",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Speed & Precision",
      description:
        "Our 48-hour matching process ensures you get the right expertise exactly when you need it, forged with precision and delivered without delays.",
      icon: TrendingUp,
      color: "from-red-500 to-purple-500",
    },
    {
      title: "Client Success First",
      description:
        "Your success is our masterpiece. We're committed to forging outcomes that drive your business forward and exceed your expectations.",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Trust & Transparency",
      description:
        "Clear communication, transparent pricing, and honest feedback are the foundation of every partnership we forge.",
      icon: Shield,
      color: "from-pink-500 to-orange-500",
    },
  ]

  const team = [
    {
      name: "Agnes",
      role: "Founder & Master Forger",
      bio: "5+ years of forging success at high-growth companies.",
      color: "from-orange-400 to-red-400",
      initials: "AO",
    },
    {
      name: "Calvin",
      role: "Head of Talent Forging",
      bio: "Consultant specializing in organizational excellence and forging world-class talent partnerships.",
      color: "from-red-400 to-purple-400",
      initials: "CC",
    },
    {
      name: "Yvonne",
      role: "Client Success Forger",
      bio: "Previously forged customer success strategies at three successful SaaS startups through IPO.",
      color: "from-purple-400 to-pink-400",
      initials: "YC",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader currentPage="about" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
              About DeliverForge
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              We're on a mission to{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                forge success
              </span>{" "}
              through world-class project management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2023, DeliverForge was born from the passion to transform how businesses approach project
              execution. We believe every great idea deserves to be forged into exceptional results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-orange-100 hover:border-orange-200 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  forge story
                </span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  After witnessing countless promising startups and established businesses struggle with project
                  execution, our founder Agnes decided to forge a new path between great ideas and successful
                  delivery.
                </p>
                <p>
                  Having forged success at multiple high-growth companies, Agnes understood that the difference between
                  success and failure often comes down to having the right project management expertise forged at the
                  right time.
                </p>
                <p>
                  Today, DeliverForge has helped over 200 companies forge critical project success on time and on
                  budget, from early-stage startups to Fortune 500 enterprises.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      SC
                    </div>
                    <h3 className="font-semibold text-lg">Agnes</h3>
                    <p className="text-gray-600">Founder & Master Forger</p>
                  </div>
                  <blockquote className="text-center italic text-gray-600">
                    "Every business deserves to forge their vision into reality with world-class project management.
                    We're here to make that happen."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                forging values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide how we forge every partnership and deliver every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet the{" "}
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                forge masters
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of experience forging success at top consulting firms and high-growth
              companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-orange-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to forge success with us?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the 200+ companies who trust DeliverForge to forge their most critical projects into success stories.
              Let's discuss how we can forge your vision into reality.
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
