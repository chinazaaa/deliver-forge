import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | DeliverForge - Project Management Services",
  description:
    "DeliverForge Terms of Service. Legal terms and conditions for using our project management services across USA, UK, Canada, and Australia.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://deliverforge.com/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border-purple-200">
              Legal Agreement
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and DeliverForge
                  ("Company," "we," "our," or "us") regarding your use of our website deliverforge.com and project
                  management services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, you may not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DeliverForge provides project management services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Matching clients with qualified project managers</li>
                  <li>Full-time project management services (3-12 months)</li>
                  <li>Fractional project management services (1-6 months)</li>
                  <li>Sprint project management services (1-4 weeks)</li>
                  <li>Project consultation and strategy services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Services are available to businesses in the United States, United Kingdom, Canada, Australia, and
                  other jurisdictions where legally permitted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Be at least 18 years of age</li>
                  <li>Have the legal authority to enter into this agreement</li>
                  <li>Represent a legitimate business entity</li>
                  <li>Provide accurate and complete information</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Service Process and Matching</h2>

                <h3 className="text-xl font-semibold mb-3">4.1 48-Hour Matching Guarantee</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We guarantee to present qualified project manager candidates within 48 business hours of your strategy
                  call. If we fail to meet this timeline, we will extend your search at no additional cost.
                </p>

                <h3 className="text-xl font-semibold mb-3">4.2 Project Manager Vetting</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All project managers in our network undergo comprehensive screening including background checks,
                  reference verification, and skills assessment. However, we do not guarantee specific outcomes or
                  results.
                </p>

                <h3 className="text-xl font-semibold mb-3">4.3 Satisfaction Guarantee</h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer a 7-day satisfaction guarantee. If you are not satisfied with your matched project manager
                  within the first 7 days, we will provide a replacement at no additional cost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Pricing and Payment</h2>

                <h3 className="text-xl font-semibold mb-3">5.1 Service Fees</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Sprint PM:</strong> $100 per week
                  </li>
                  <li>
                    <strong>Fractional PM:</strong> $500 per month
                  </li>
                  <li>
                    <strong>Full-Time PM:</strong> $1,000 per month
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.2 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Payment is due in advance for each service period</li>
                  <li>Invoices are payable upon receiving</li>
                  <li>Late payments may incur a 1.5% monthly service charge</li>
                  <li>All fees are non-refundable except as specified</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.3 Taxes</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for all applicable taxes, duties, and government fees. Prices are exclusive of
                  taxes unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate project requirements and information</li>
                  <li>Cooperate with the assigned project manager</li>
                  <li>Make timely payments as agreed</li>
                  <li>Provide necessary access to systems and stakeholders</li>
                  <li>Maintain confidentiality of proprietary information</li>
                  <li>Not attempt to hire project managers directly without our consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>

                <h3 className="text-xl font-semibold mb-3">7.1 Our Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and in our services remain our
                  exclusive property. You may not use, copy, or distribute our intellectual property without written
                  permission.
                </p>

                <h3 className="text-xl font-semibold mb-3">7.2 Client Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain ownership of your intellectual property. By using our services, you grant us a limited
                  license to use your information solely for providing services.
                </p>

                <h3 className="text-xl font-semibold mb-3">7.3 Work Product</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work product created by project managers during engagements belongs to you, subject to any
                  pre-existing intellectual property rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We maintain strict confidentiality regarding your business information. All project managers sign
                  comprehensive non-disclosure agreements before engagement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You agree to maintain confidentiality regarding our business processes, methodologies, and project
                  manager information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    Our total liability shall not exceed the fees paid for services in the 12 months preceding the claim
                  </li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We do not guarantee specific project outcomes or business results</li>
                  <li>Our liability is limited to the direct costs of our services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless DeliverForge from any claims, damages, or expenses arising
                  from your use of our services, violation of these Terms, or infringement of third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>

                <h3 className="text-xl font-semibold mb-3">11.1 Termination by You</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may terminate services with 30 days written notice. Fees for the current service period are
                  non-refundable.
                </p>

                <h3 className="text-xl font-semibold mb-3">11.2 Termination by Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate services immediately for breach of Terms, non-payment, or other material violations.
                </p>

                <h3 className="text-xl font-semibold mb-3">11.3 Effect of Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, all rights and obligations cease except those that by nature should survive
                  (confidentiality, payment obligations, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>

                <h3 className="text-xl font-semibold mb-3">12.1 Governing Law</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>US Clients:</strong> California law
                  </li>
                  <li>
                    <strong>UK Clients:</strong> English law
                  </li>
                  <li>
                    <strong>Canadian Clients:</strong> Ontario law
                  </li>
                  <li>
                    <strong>Australian Clients:</strong> New South Wales law
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">12.2 Dispute Resolution Process</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Good faith negotiation (30 days)</li>
                  <li>Mediation through recognized mediation service</li>
                  <li>Binding arbitration if mediation fails</li>
                  <li>Court proceedings only for injunctive relief</li>
                </ol>

                <h3 className="text-xl font-semibold mb-3">12.3 Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any legal proceedings shall be conducted in the courts of the jurisdiction specified above based on
                  your location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  Neither party shall be liable for delays or failures due to circumstances beyond reasonable control,
                  including natural disasters, government actions, pandemics, or other force majeure events.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may modify these Terms at any time. Material changes will be communicated via email or website
                  notice 30 days in advance. Continued use constitutes acceptance of modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full
                  force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with our Privacy Policy and any service agreements, constitute the entire
                  agreement between you and DeliverForge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">For questions about these Terms, contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@deliverforge.com
                  </p>
                  {/* <p className="text-gray-700">
                    <strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105
                  </p> */}
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +44 7350174340
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6">Regional Legal Contacts</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>UK:</strong> legal-uk@deliverforge.com
                  </li>
                  <li>
                    <strong>Canada:</strong> legal-ca@deliverforge.com
                  </li>
                  <li>
                    <strong>Australia:</strong> legal-au@deliverforge.com
                  </li>
                </ul>
              </section>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Notice</h3>
                <p className="text-orange-700 text-sm">
                  These Terms are legally binding. Please read them carefully and consult with legal counsel if you have
                  questions about your rights and obligations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
