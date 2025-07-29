import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, ArrowRight, Briefcase, TrendingUp, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Project Management Services | Full-Time, Fractional & Sprint PMs",
  description:
    "Professional project management services for businesses in USA, UK, Canada & Australia. Choose from full-time, fractional, or sprint project managers. 48-hour matching guarantee.",
  keywords: [
    "project management services",
    "full-time project manager",
    "fractional project manager",
    "sprint project manager",
    "hire project manager",
    "project management consultant",
    "agile project manager",
    "scrum master services",
    "program manager",
    "project delivery services",
    "remote project manager",
    "project management agency",
  ],
  openGraph: {
    title: "Project Management Services | DeliverForge",
    description:
      "Professional project management services with 48-hour matching guarantee. Full-time, fractional & sprint options available.",
    url: "https://deliverforge.com/services",
  },
  alternates: {
    canonical: "https://deliverforge.com/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Time Project Managers",
      description: "Dedicated PMs for your most critical, long-term projects",
      duration: "3-12 months",
      price: "$1,000/month",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      features: [
        "100% dedicated to your project",
        "Deep integration with your team",
        "Complete project ownership",
        "Weekly progress reports",
        "Risk management & mitigation",
      ],
      ideal: "Large-scale projects, product launches, digital transformations",
      href: "/services/full-time",
    },
    {
      title: "Fractional Project Managers",
      description: "Part-time expertise for ongoing project success",
      duration: "1-6 months",
      price: "$500/month",
      icon: TrendingUp,
      color: "from-red-500 to-purple-500",
      features: [
        "20-30 hours per week",
        "Multiple project oversight",
        "Strategic guidance & planning",
        "Team coordination",
        "Process optimization",
      ],
      ideal: "Multiple smaller projects, process improvements, team scaling",
      href: "/services/fractional",
    },
    {
      title: "Sprint Project Managers",
      description: "Rapid-fire expertise for quick wins and urgent solutions",
      duration: "1-4 weeks",
      price: "$100/week",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      features: [
        "Immediate availability",
        "Rapid project assessment",
        "Quick wins identification",
        "Crisis management",
        "Fast implementation",
      ],
      ideal: "Urgent deadlines, crisis management, quick launches",
      href: "/services/sprint",
    },
  ]

  const industries = [
    { name: "SaaS & Technology", projects: "150+", icon: "💻", color: "from-blue-400 to-blue-500" },
    { name: "E-commerce", projects: "80+", icon: "🛒", color: "from-green-400 to-green-500" },
    { name: "Healthcare", projects: "45+", icon: "🏥", color: "from-red-400 to-red-500" },
    { name: "Fintech", projects: "60+", icon: "💳", color: "from-yellow-400 to-yellow-500" },
    { name: "Education", projects: "35+", icon: "🎓", color: "from-purple-400 to-purple-500" },
    { name: "Manufacturing", projects: "25+", icon: "🏭", color: "from-gray-400 to-gray-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader currentPage="services" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Professional project management services{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                for every business need
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sprint projects to full-time dedicated managers, we have the right solution to help your business
              deliver exceptional results on time and on budget across USA, UK, Canada, and Australia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="w-fit">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </Badge>
                    <span className="text-lg font-bold text-orange-600">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Perfect for:</strong> {service.ideal}
                    </p>

<Button className="w-full group-hover:shadow-lg transition-all" asChild>
  <Link href={service.href}>
    Learn More
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Delivering success across{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our project managers have delivered successful outcomes across diverse industries and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <p className="text-orange-600 font-medium">{industry.projects} projects delivered</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits your needs?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Book a free strategy call and we'll help you determine the perfect project management solution for your
              business.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Project Management Services",
            description: "Professional project management services for businesses",
            itemListElement: services.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: "DeliverForge",
              },
              offers: {
                "@type": "Offer",
                price: service.price.replace(/[^0-9]/g, ""),
                priceCurrency: "USD",
              },
            })),
          }),
        }}
      />
    </div>
  )
}
