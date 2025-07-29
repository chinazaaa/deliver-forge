"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface SiteHeaderProps {
  currentPage?: string
}

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Services", href: "/services", current: currentPage === "services" },
    { name: "Process", href: "/process", current: currentPage === "process" },
    { name: "Pricing", href: "/pricing", current: currentPage === "pricing" },
    { name: "About", href: "/about", current: currentPage === "about" },
    { name: "Contact", href: "/contact", current: currentPage === "contact" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
  <img
    src="/deliverforge-logo.png"
    alt="DeliverForge Logo"
    className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
  />
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  item.current ? "text-orange-600 border-b-2 border-orange-600 pb-1" : ""
                }`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 hover:from-orange-700 hover:via-red-700 hover:to-purple-700"
              asChild
            >
              <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                Book Call
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    item.current
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-600" asChild>
                  <a href="https://calendly.com/deliverforge/30min" target="_blank" rel="noopener noreferrer">
                    Book Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
