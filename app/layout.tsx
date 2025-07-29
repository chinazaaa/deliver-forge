import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { Mona_Sans as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "DeliverForge - Expert Project Managers in 48 Hours | USA, UK, Canada, Australia",
    template: "%s | DeliverForge - Expert Project Management Services",
  },
  description:
    "Get matched with vetted project managers in 48 hours. Full-time, fractional & sprint PMs for businesses in USA, UK, Canada & Australia. 200+ successful projects delivered.",
  keywords: [
    "project manager",
    "project management services",
    "fractional project manager",
    "full-time project manager",
    "sprint project manager",
    "project management consultant",
    "agile project manager",
    "scrum master",
    "program manager",
    "digital transformation",
    "product launch",
    "startup project manager",
    "enterprise project management",
    "remote project manager",
    "project management agency",
    "USA project manager",
    "UK project manager",
    "Canada project manager",
    "Australia project manager",
    "project delivery",
    "project success",
    "48 hour matching",
    "vetted project managers",
  ],
  authors: [{ name: "DeliverForge Team" }],
  creator: "DeliverForge",
  publisher: "DeliverForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://deliverforge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeliverForge - Expert Project Managers in 48 Hours",
    description:
      "Get matched with vetted project managers in 48 hours. Full-time, fractional & sprint PMs for businesses worldwide. 200+ successful projects delivered.",
    url: "https://deliverforge.com",
    siteName: "DeliverForge",
    images: [
      {
        url: "/deliverforge-logo.png",
        width: 1200,
        height: 630,
        alt: "DeliverForge - Expert Project Management Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeliverForge - Expert Project Managers in 48 Hours",
    description:
      "Get matched with vetted project managers in 48 hours. Full-time, fractional & sprint PMs for businesses worldwide.",
    images: ["/deliverforge-logo.png"],
    creator: "@deliverforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://deliverforge.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/deliverforge-logo.png" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Australia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DeliverForge",
              description: "Expert project management services with 48-hour matching guarantee",
              url: "https://deliverforge.com",
              logo: "https://deliverforge.com/deliverforge-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                areaServed: ["US", "GB", "CA", "AU"],
                availableLanguage: "English",
              },
              // address: {
              //   "@type": "PostalAddress",
              //   streetAddress: "123 Business Ave, Suite 100",
              //   addressLocality: "San Francisco",
              //   addressRegion: "CA",
              //   postalCode: "94105",
              //   addressCountry: "US",
              // },
              sameAs: ["https://linkedin.com/company/deliverforge", "https://twitter.com/deliverforge"],
              serviceArea: {
                "@type": "Place",
                name: "Global - USA, UK, Canada, Australia",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
