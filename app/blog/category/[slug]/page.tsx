import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User, ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Blog posts data
const allBlogPosts = [
  {
    title: "When to Hire a Fractional Project Manager for Your Startup",
    excerpt:
      "Discover the key indicators that signal it's time to bring in fractional project management expertise for your growing startup. Learn cost-effective strategies for scaling your operations.",
    author: "Agnes",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Startup Growth",
    slug: "when-to-hire-fractional-project-manager-startup",
    featured: true,
  },
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
    title: "5 Project Management Mistakes That Kill Startups",
    excerpt:
      "Learn from the most common project management failures that cause startups to fail, and discover actionable strategies to avoid these critical mistakes.",
    author: "Johnson",
    date: "January 20, 2024",
    readTime: "5 min read",
    category: "Startup Growth",
    slug: "project-management-mistakes-kill-startups",
  },
  {
    title: "The Complete Guide to Agile Project Management",
    excerpt:
      "Master agile methodologies to improve your project delivery, enhance team collaboration, and adapt quickly to changing requirements.",
    author: "Mike",
    date: "January 18, 2024",
    readTime: "12 min read",
    category: "Project Strategy",
    slug: "complete-guide-agile-project-management",
  },
  {
    title: "How to Choose the Right Project Manager for Your Team",
    excerpt:
      "Essential guide to finding and hiring the perfect project manager for your specific needs, team culture, and business objectives.",
    author: "David",
    date: "January 22, 2024",
    readTime: "7 min read",
    category: "Hiring Guide",
    slug: "how-to-choose-right-project-manager",
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
  // Additional posts for demonstration
  {
    title: "Scaling Your Startup: When to Add Project Management",
    excerpt:
      "Learn the critical growth stages where adding project management becomes essential for startup success and sustainable scaling.",
    author: "Marcus",
    date: "June 25, 2025",
    readTime: "7 min read",
    category: "Startup Growth",
    slug: "scaling-startup-when-add-project-management",
  },
  {
    title: "Startup Project Management: Avoiding Common Pitfalls",
    excerpt:
      "Discover the most common project management mistakes that derail startups and how to avoid them in your growing business.",
    author: "Lisa",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Startup Growth",
    slug: "startup-project-management-avoiding-pitfalls",
  },
]

const categories = {
  "startup-growth": {
    name: "Startup Growth",
    description: "Insights and strategies for scaling your startup with effective project management",
    color: "from-green-500 to-green-600",
    icon: "📈",
  },
  "project-strategy": {
    name: "Project Strategy",
    description: "Strategic approaches to project planning, execution, and delivery",
    color: "from-blue-500 to-blue-600",
    icon: "🎯",
  },
  "agency-management": {
    name: "Agency Management",
    description: "Project management solutions specifically designed for agencies",
    color: "from-purple-500 to-purple-600",
    icon: "🏢",
  },
  "product-launch": {
    name: "Product Launch",
    description: "Essential project management for successful product launches",
    color: "from-orange-500 to-orange-600",
    icon: "🚀",
  },
  "hiring-guide": {
    name: "Hiring Guide",
    description: "Complete guides for hiring the right project management talent",
    color: "from-red-500 to-red-600",
    icon: "👥",
  },
  "best-practices": {
    name: "Best Practices",
    description: "Proven methodologies and best practices in project management",
    color: "from-pink-500 to-pink-600",
    icon: "⭐",
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categorySlug = params.slug
  const category = categories[categorySlug as keyof typeof categories]

  if (!category) {
    return {
      title: "Category Not Found | DeliverForge Blog",
    }
  }

  return {
    title: `${category.name} Articles | Project Management Blog | DeliverForge`,
    description: `${category.description}. Expert insights and practical advice on ${category.name.toLowerCase()}.`,
    keywords: [
      category.name.toLowerCase(),
      "project management",
      "fractional project manager",
      "startup project management",
      "project management best practices",
    ],
    openGraph: {
      title: `${category.name} Articles | DeliverForge Blog`,
      description: category.description,
      url: `https://deliverforge.com/blog/category/${categorySlug}`,
    },
    alternates: {
      canonical: `https://deliverforge.com/blog/category/${categorySlug}`,
    },
  }
}

export default function CategoryPage({ params }: Props) {
  const categorySlug = params.slug
  const category = categories[categorySlug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = allBlogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === categorySlug)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      {/* Category Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <div className="text-center space-y-6">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto`}
              >
                <span className="text-white font-bold text-2xl">{category.icon}</span>
              </div>
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200">
                Category
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                {category.name}{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                  Articles
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>{categoryPosts.length} articles</span>
                <span>•</span>
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            {categoryPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found in this category yet.</p>
                <Button className="mt-4" asChild>
                  <Link href="/blog">Browse All Articles</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {categoryPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <div
                            className={`w-full h-32 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-3xl">{category.icon}</span>
                          </div>
                        </div>
                        <div className="md:col-span-3 space-y-4">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                            {post.featured && <Badge className="bg-orange-100 text-orange-700">Featured</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold leading-tight hover:text-orange-600 transition-colors">
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
                            <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600" asChild>
                              <Link href={`/blog/${post.slug}`}>
                                Read Article
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-bold">Explore Other Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(categories)
                .filter(([slug]) => slug !== categorySlug)
                .slice(0, 3)
                .map(([slug, cat]) => (
                  <Card
                    key={slug}
                    className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <Link href={`/blog/category/${slug}`}>
                      <CardContent className="p-6 text-center space-y-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${cat.color} rounded-full flex items-center justify-center mx-auto`}
                        >
                          <span className="text-white font-bold text-xl">{cat.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold">{cat.name}</h3>
                        <p className="text-sm text-gray-600">{cat.description}</p>
                      </CardContent>
                    </Link>
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

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }))
}
