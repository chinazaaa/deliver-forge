import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Zap, Crown } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PricingPage() {
  const plans = [
    {
      name: "Sprint",
      description: "Perfect for urgent projects and quick wins",
      duration: "1-4 weeks",
      price: "$100",
      period: "per week",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      popular: false,
      features: [
        "Immediate PM assignment (24hrs)",
        "Crisis management expertise",
        "Daily progress updates",
        "Rapid problem resolution",
        "Quick wins identification",
        "Basic project documentation",
        "Email & Slack support",
      ],
    },
    {
      name: "Fractional",
      description: "Ongoing project oversight and strategic guidance",
      duration: "1-6 months",
      price: "$500",
      period: "per month",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      popular: true,
      features: [
        "20-30 hours per week",
        "Multiple project coordination",
        "Strategic planning & roadmapping",
        "Team training & development",
        "Process optimization",
        "Comprehensive reporting",
        "Priority support",
        "Monthly strategy sessions",
      ],
    },
    {
      name: "Full-Time",
      description: "Dedicated PM for your most critical projects",
      duration: "3-12 months",
      price: "$1,000",
      period: "per month",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      popular: false,
      features: [
        "100% dedicated to your project",
        "Complete project ownership",
        "Deep team integration",
        "Advanced risk management",
        "Stakeholder management",
        "Custom reporting & analytics",
        "24/7 availability",
        "Weekly executive briefings",
        "Post-project support",
      ],
    },
  ]

  const addOns = [
    { name: "Additional PM Hours", price: "$10/hour" },
    { name: "Weekend/Holiday Support", price: "$50/hour" },
    { name: "Executive Reporting", price: "$100/month" },
    { name: "Team Training Sessions", price: "$200/session" },
    { name: "Process Documentation", price: "$300/project" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <SiteHeader currentPage="pricing" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Simple, transparent{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Pay for the expertise you need, when you need it. All plans
              include our 48-hour matching guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 ${plan.popular ? "border-blue-200 shadow-xl scale-105" : "hover:border-purple-200"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${plan.color} ${plan.popular ? "mt-8" : ""}`}
                ></div>
                <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-gray-500">{plan.period}</div>
                    <Badge variant="outline">{plan.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
  className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" : ""}`}
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
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Additional{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your project management experience with our optional add-on services.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-center">Add-On Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium">{addon.name}</span>
                      <span className="text-purple-600 font-semibold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What's included in the 48-hour matching guarantee?",
                a: "We guarantee to present you with 2-3 qualified PM candidates within 48 hours of your strategy call, or we'll extend your search at no additional cost.",
              },
              {
                q: "Can I switch between plans during a project?",
                a: "Yes! We offer flexible transitions between plans based on your changing needs. We'll work with you to ensure a smooth transition.",
              },
              {
                q: "What if I'm not satisfied with my assigned PM?",
                a: "We offer a 7-day satisfaction guarantee. If you're not completely satisfied, we'll match you with a different PM at no additional cost.",
              },
              {
                q: "Do you offer custom enterprise packages?",
                a: "Yes, we offer custom packages for enterprises with multiple ongoing projects. Contact us for a personalized quote.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Book a free strategy call to discuss your project needs and get matched with the perfect PM in 48 hours.
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
    </div>
  )
}
