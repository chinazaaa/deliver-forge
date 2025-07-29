import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Management Blog | Expert Insights & Best Practices | DeliverForge",
  description:
    "Expert insights on project management, fractional PMs, startup project management, and best practices. Learn when to hire project managers and optimize your project delivery.",
  keywords: [
    "project management blog",
    "fractional project manager",
    "startup project manager",
    "project management best practices",
    "hire project manager",
    "project management insights",
    "PM tips",
    "project delivery",
  ],
  openGraph: {
    title: "Project Management Blog | DeliverForge",
    description:
      "Expert insights on project management, fractional PMs, and startup project management best practices.",
    url: "https://deliverforge.com/blog",
  },
  alternates: {
    canonical: "https://deliverforge.com/blog",
  },
}

export default function BlogPage() {
  const featuredPost = {
    title: "When to Hire a Fractional Project Manager for Your Startup",
    excerpt:
      "Discover the key indicators that signal it's time to bring in fractional project management expertise for your growing startup. Learn cost-effective strategies for scaling your operations.",
    author: "Agnes",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Startup Growth",
    slug: "when-to-hire-fractional-project-manager-startup",
    featured: true,
  }

  const blogPosts = [
    {
      title: "Fixed-Term Project Management: 6 Benefits of Short-Term PMs",
      excerpt:
        "Explore how short-term project managers can deliver immediate value and drive rapid results for time-sensitive initiatives.",
      author: "Calvin",
      date: "March 12, 2025",
      readTime: "6 min read",
      category: "Project Strategy",
      slug: "fixed-term-project-management-benefits-short-term-pms",
    },
    {
      title: "How an Outsourced Project Manager Saves Agencies from Burnout",
      excerpt:
        "Learn how agencies are using outsourced project managers to reduce team burnout, improve client satisfaction, and scale operations efficiently.",
      author: "Yvonne",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Agency Management",
      slug: "outsourced-project-manager-saves-agencies-burnout",
    },
    {
      title: "3 Signs Your Product Launch Needs a Project Manager",
      excerpt:
        "Identify the critical warning signs that indicate your product launch requires dedicated project management expertise to ensure success.",
      author: "David",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Product Launch",
      slug: "signs-product-launch-needs-project-manager",
    },
    {
      title: "Fractional vs Full-Time Project Managers: Which One Should You Choose?",
      excerpt:
        "A comprehensive comparison guide to help you decide between fractional and full-time project managers based on your business needs and budget.",
      author: "Lisa",
      date: "October 5, 2024",
      readTime: "9 min read",
      category: "Hiring Guide",
      slug: "fractional-vs-full-time-project-managers-comparison",
    },
  ]

  const categories = [
    { name: "Startup Growth", count: 4, color: "from-green-500 to-green-600" },
    { name: "Project Strategy", count: 2, color: "from-blue-500 to-blue-600" },
    { name: "Agency Management", count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Product Launch", count: 1, color: "from-orange-500 to-orange-600" },
    { name: "Hiring Guide", count: 2, color: "from-red-500 to-red-600" },
    { name: "Best Practices", count: 0, color: "from-pink-500 to-pink-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200">
              Expert Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Project Management{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, best practices, and actionable advice on project management, fractional PMs, startup
              scaling, and building high-performing teams.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="border-2 border-orange-200 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-2xl">📈</span>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700">{featuredPost.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800">Featured Article</h3>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">{featuredPost.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600" asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <Card
                      key={index}
                      className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-8">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold leading-tight hover:text-orange-600 transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/blog/${post.slug}`}>
                                Read More
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category, index) => (
                      <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full group-hover:scale-110 transition-transform`}
                            ></div>
                            <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-red-50">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-xl">📧</span>
                    </div>
                    <h3 className="text-lg font-bold">Stay Updated</h3>
                    <p className="text-sm text-gray-600">
                      Get the latest project management insights and tips delivered to your inbox.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                  {[
  {
    title: "5 Project Management Mistakes That Kill Startups",
    slug: "project-management-mistakes-kill-startups",
    readTime: "5 min read",
  },
  {
    title: "The Complete Guide to Agile Project Management",
    slug: "complete-guide-agile-project-management",
    readTime: "7 min read",
  },
  {
    title: "How to Choose the Right PM for Your Team",
    slug: "how-to-choose-right-project-manager",
    readTime: "6 min read",
  },
].map((post, index) => (
  <Link key={index} href={`/blog/${post.slug}`} className="group block cursor-pointer">
    <h4 className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors leading-tight">
      {post.title}
    </h4>
    <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
  </Link>
))}

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to implement these insights?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get matched with an expert project manager who can help you apply these best practices to your business.
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
