import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Heart, TrendingUp, Globe, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CareersPage() {
  const benefits = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours and async collaboration",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Growth & Learning",
      description: "Continuous learning budget, conference attendance, and skill development opportunities",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Amazing Team",
      description: "Work with world-class professionals who are passionate about project management excellence",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Work-Life Balance",
      description: "Unlimited PTO, mental health support, and a culture that values your well-being",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
  ]

  const openRoles = [
    {
      title: "Senior Project Manager",
      type: "Full-Time",
      location: "Remote",
      description: "Lead complex client projects and mentor junior team members",
      requirements: ["5+ years PM experience", "PMP certification preferred", "SaaS/Tech background"],
    },
    {
      title: "Fractional Project Manager",
      type: "Contract",
      location: "Remote",
      description: "Work with multiple clients on strategic project initiatives",
      requirements: ["7+ years PM experience", "Consulting background", "Multiple industry experience"],
    },
    {
      title: "Sprint Project Manager",
      type: "Contract",
      location: "Remote",
      description: "Handle urgent, high-priority projects with tight deadlines",
      requirements: ["3+ years PM experience", "Crisis management skills", "Agile/Scrum expertise"],
    },
    {
      title: "Client Success Manager",
      type: "Full-Time",
      location: "Remote",
      description: "Ensure client satisfaction and manage ongoing relationships",
      requirements: ["3+ years client success", "PM background helpful", "Excellent communication"],
    },
  ]

  const values = [
    "Excellence in everything we do",
    "Client success is our success",
    "Continuous learning and growth",
    "Transparency and honest communication",
    "Work-life balance and well-being",
    "Diversity, equity, and inclusion",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
              Join Our Team
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold">
              Want to{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                forge success
              </span>{" "}
              with us?
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of world-class project management professionals who are passionate about delivering
              exceptional results for our clients. We're always looking for talented PMs to join our forge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700 text-lg px-8 py-6"
                asChild
              >
                <a href="mailto:recruitment@deliverforge.com">
                  Send Your CV
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent"
              >
                View Open Roles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                at DeliverForge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talented professionals can do their best work
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

      {/* Open Roles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Open{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                positions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our team of expert project managers and help forge success for our clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <div className="flex gap-2">
                        <Badge variant="outline">{role.type}</Badge>
                        <Badge variant="outline">{role.location}</Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600" asChild>
                      <a href="mailto:recruitment@deliverforge.com?subject=Application for Senior Project Manager">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  values
                </span>
              </h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to join our team?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Send us your CV and let's discuss how you can help forge success for our clients and grow your career with
              us.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href="mailto:recruitment@deliverforge.com?subject=Career Opportunity at DeliverForge">
                  Send Your CV to recruitment@deliverforge.com
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm opacity-75">
                Include your CV, cover letter, and tell us which role interests you most
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
