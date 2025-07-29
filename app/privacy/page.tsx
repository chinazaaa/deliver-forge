import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | DeliverForge - Project Management Services",
  description:
    "DeliverForge Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and international privacy laws.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://deliverforge.com/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <SiteHeader />

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200">
              Legal Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DeliverForge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  deliverforge.com or use our project management services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This policy applies to users in the United States, United Kingdom, Canada, Australia, and other
                  jurisdictions where we provide services. We comply with applicable privacy laws including GDPR, CCPA,
                  PIPEDA, and the Australian Privacy Act.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Name, email address, phone number</li>
                  <li>Company name and job title</li>
                  <li>Project requirements and business needs</li>
                  <li>Communication preferences</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.2 Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Website usage analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.3 Project Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Project specifications and requirements</li>
                  <li>Timeline and budget information</li>
                  <li>Team structure and stakeholder details</li>
                  <li>Progress reports and deliverables</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Providing project management services</li>
                  <li>Matching you with suitable project managers</li>
                  <li>Processing payments and billing</li>
                  <li>Communicating about your projects</li>
                  <li>Improving our services and website</li>
                  <li>Marketing and promotional communications (with consent)</li>
                  <li>Legal compliance and fraud prevention</li>
                  <li>Analytics and business intelligence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For users in the EU/UK, we process your data based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Contract:</strong> To provide our services and fulfill our obligations
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> To improve services and prevent fraud
                  </li>
                  <li>
                    <strong>Consent:</strong> For marketing communications and non-essential cookies
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> To comply with applicable laws
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>

                <h3 className="text-xl font-semibold mb-3">5.1 Project Managers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We share relevant project information with matched project managers to enable service delivery.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Service Providers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Cloud hosting providers (AWS, Vercel)</li>
                  <li>Analytics services (Google Analytics)</li>
                  <li>Communication tools (Calendly, email services)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">5.3 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose information when required by law, court order, or to protect our rights and safety.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure cloud storage with encryption at rest</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your data may be transferred to and processed in countries other than your own. We ensure adequate
                  protection through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Appropriate safeguards and security measures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>

                <h3 className="text-xl font-semibold mb-3">8.1 GDPR Rights (EU/UK)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification (correction)</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">8.2 CCPA Rights (California)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information</li>
                  <li>Right to non-discrimination</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">8.3 Other Jurisdictions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Similar rights may apply under PIPEDA (Canada) and the Australian Privacy Act.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We use cookies and similar technologies for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Personalization and user preferences</li>
                  <li>Marketing and advertising (with consent)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can manage cookie preferences through your browser settings or our cookie consent tool.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We retain your information for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Active accounts: Duration of service relationship</li>
                  <li>Project data: 7 years after project completion</li>
                  <li>Marketing data: Until consent is withdrawn</li>
                  <li>Legal requirements: As required by applicable law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                  personal information from children under 18.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of material changes via email or
                  website notice. Continued use of our services constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For privacy-related questions or to exercise your rights, contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@deliverforge.com
                  </p>
                  {/* <p className="text-gray-700">
                    <strong>Address:</strong> 123 Business Ave, Suite 100, San Francisco, CA 94105
                  </p> */}
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +44 7350174340
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6">Data Protection Officers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>EU/UK:</strong> dpo-eu@deliverforge.com
                  </li>
                  <li>
                    <strong>Canada:</strong> privacy-ca@deliverforge.com
                  </li>
                  <li>
                    <strong>Australia:</strong> privacy-au@deliverforge.com
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Supervisory Authorities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to lodge a complaint with relevant supervisory authorities:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>UK:</strong> Information Commissioner's Office (ICO)
                  </li>
                  <li>
                    <strong>EU:</strong> Your local Data Protection Authority
                  </li>
                  <li>
                    <strong>Canada:</strong> Office of the Privacy Commissioner
                  </li>
                  <li>
                    <strong>Australia:</strong> Office of the Australian Information Commissioner
                  </li>
                  <li>
                    <strong>California:</strong> California Attorney General's Office
                  </li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
