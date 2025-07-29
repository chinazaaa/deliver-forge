import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@deliverforge.com",
      description: "We'll respond within 2 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+44 7350174340",
      description: "Mon-Fri, 9AM-7PM BST",
      color: "from-green-500 to-green-600",
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   details: "123 Business Ave, Suite 100\nSan Francisco, CA 94105",
    //   description: "By appointment only",
    //   color: "from-purple-500 to-purple-600",
    // },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 hours",
      description: "Average response time",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <SiteHeader currentPage="contact" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Let's discuss your{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                project needs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get matched with a world-class project manager? Book a free strategy call or reach out to us
              directly. We're here to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <Card className="border-2 border-purple-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Select project type</option>
                    <option>Product Launch</option>
                    <option>Digital Transformation</option>
                    <option>Process Improvement</option>
                    <option>Team Scaling</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Timeline</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Select timeline</option>
                    <option>1-4 weeks</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card> */}
<div className="w-full">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdpa0T9Vi0xB6NOWxkS-9tz2talu8SADh3XmzAoahZ0pdSJpA/viewform?embedded=true"
    width="100%"
    height="1498"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    className="rounded-lg shadow-xl border-2 border-purple-100"
  >
    Loading…
  </iframe>
</div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-2 border-blue-100 shadow-xl">
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <div className={`p-3 rounded-full text-white ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-bold">{item.details}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
