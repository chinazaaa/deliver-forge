import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Clock, Target, AlertTriangle, TrendingUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SprintPMPage() {
  const benefits = [
    {
      title: "Immediate Impact",
      description: "Start making progress within 24 hours of engagement",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Crisis Management",
      description: "Expert handling of urgent situations and tight deadlines",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Quick Wins",
      description: "Identify and deliver immediate improvements and results",
      icon: Target,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Rapid Assessment",
      description: "Fast evaluation of current state and action planning",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
    },
  ]

  const features = [
    "Immediate PM assignment (24hrs)",
    "Crisis management expertise",
    "Daily progress updates",
    "Rapid problem resolution",
    "Quick wins identification",
    "Basic project documentation",
    "Email & Slack support",
    "Emergency escalation",
    "Fast team mobilization",
    "Urgent deadline management",
  ]

  const idealFor = [
    "Projects with urgent deadlines (weeks, not months)",
    "Crisis situations requiring immediate intervention",
    "Quick product launches or feature releases",
    "Emergency process improvements",
    "Time-sensitive compliance requirements",
    "Rapid prototyping and validation",
    "Short-term team augmentation",
    "Event or campaign management",
  ]

  const testimonials = [
    {
      quote:
        "Our sprint PM saved our product launch. They turned a potential disaster into our most successful release ever.",
      author: "Alex Thompson",
      role: "Product Director, FitsCheck",
      company: "FitsCheck",
    },
    {
      quote: "When we had only 3 weeks to meet a compliance deadline, DeliverForge's sprint PM made it happen.",
      author: "Maria Santos",
      role: "Operations Manager, FitsCheck",
      company: "FitsCheck",
    },
  ]

  const urgencyLevels = [
    {
      level: "Critical",
      timeframe: "24-48 hours",
      description: "Emergency situations requiring immediate intervention",
      color: "from-red-500 to-red-600",
      icon: AlertTriangle,
    },
    {
      level: "High",
      timeframe: "1 week",
      description: "Urgent projects with tight deadlines",
      color: "from-orange-500 to-orange-600",
      icon: Clock,
    },
    {
      level: "Standard",
      timeframe: "2-4 weeks",
      description: "Short-term projects requiring rapid delivery",
      color: "from-yellow-500 to-yellow-600",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-yellow-100 to-orange-200 text-orange-700 border-orange-200">
              Sprint Project Managers
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold">
              Rapid-fire{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                sprint PM expertise
              </span>{" "}
              for urgent projects
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you need results fast, our sprint PMs deliver immediate impact. Perfect for urgent deadlines, crisis
              management, and projects that can't wait for traditional timelines.
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
                <span>1-4 week engagements</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>24hr start time</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>$100/week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Levels Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              We handle{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                any urgency level
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emergency interventions to rapid project delivery, we match the right expertise to your timeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {urgencyLevels.map((level, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center mx-auto`}
                  >
                    <level.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{level.level} Priority</h3>
                  <div className="text-2xl font-bold text-orange-600">{level.timeframe}</div>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                sprint PMs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When time is critical and failure is not an option
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
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
                  Our sprint PMs provide focused, high-intensity project management designed for rapid results.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Sprint PM Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">$100</div>
                    <div className="text-gray-500">per week</div>
                    <Badge variant="outline" className="mt-2">
                      1-4 weeks
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Start time:</span>
                      <span className="font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Daily updates:</span>
                      <span className="font-medium">Guaranteed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency support:</span>
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Perfect for{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  urgent situations
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {idealFor.map((item, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
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
            <h2 className="text-3xl md:text-4xl font-bold">Need urgent PM support?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Don't let tight deadlines derail your project. Book a strategy call and get a sprint PM assigned within 24
              hours.
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
