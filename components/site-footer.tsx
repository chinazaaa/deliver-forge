import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
  <img
    src="/deliverforge-logo.png"
    alt="DeliverForge Logo"
    className="h-10 w-auto object-contain"
  />
</div>

            </div>
            <p className="text-gray-300 max-w-md">
              Expert project managers for businesses in USA, UK, Canada, and Australia. Get matched in 48 hours with our
              proven process.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              {/* <p>📍 123 Business Ave, Suite 100</p>
              <p>San Francisco, CA 94105</p> */}
              <p>📞 +44 7350174340</p>
              <p>✉️ hello@deliverforge.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link href="/services/fractional" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Fractional PMs
              </Link>
              <Link href="/services/full-time" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Full-time PMs
              </Link>
              <Link href="/services/sprint" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Sprint PMs
              </Link>
              <Link href="/process" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Our Process
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-orange-400 transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Careers
              </Link>
              <a
                href="mailto:recruitment@deliverforge.com"
                className="block text-gray-300 hover:text-orange-400 transition-colors"
                title="Want to join our team? Send us your CV"
              >
                Join Our Team
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 DeliverForge. All rights reserved.</div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              {/* <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors">
                Sitemap
              </Link> */}
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Professional project management services available in United States, United Kingdom, Canada, and Australia.
            <br />
            project manager, fractional PM, full-time project manager, sprint PM, agile project management,
            scrum master
          </div>
        </div>
      </div>
    </footer>
  )
}
