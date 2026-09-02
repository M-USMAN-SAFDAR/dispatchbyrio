import { motion } from 'framer-motion'

const TermsOfService = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 bg-dark">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2.5 sm:mb-4 tracking-tight">
              Terms of <span className="text-gray-300">Service</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              Last updated: September 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 sm:space-y-8 text-gray-600">

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">1. Acceptance of Terms</h2>
                <p className="text-xs sm:text-sm leading-relaxed">
                  By accessing and using the DispatchByRIO website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and clients of DispatchByRIO.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">2. Description of Services</h2>
                <p className="text-sm leading-relaxed mb-3">
                  DispatchByRIO provides truck dispatch services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1">
                  <li>Freight load searching and booking on behalf of owner-operators and fleet owners</li>
                  <li>Rate negotiation with brokers and shippers</li>
                  <li>Billing, invoicing, and factoring submission support</li>
                  <li>Route planning and optimization</li>
                  <li>Compliance and document management assistance</li>
                  <li>Fleet consultation and business growth advisory</li>
                </ul>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">3. Service Agreement</h2>
                <p className="text-sm leading-relaxed">
                  Engagement of our dispatch services requires a separate service agreement detailing fees, responsibilities, and terms specific to your account. The percentage-based pricing displayed on our website (3-5% of gross revenue) is subject to the terms of your individual service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">4. User Responsibilities</h2>
                <p className="text-sm leading-relaxed mb-3">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain valid operating authority, insurance, and all required licenses</li>
                  <li>Comply with all applicable federal, state, and local laws including FMCSA/DOT regulations</li>
                  <li>Communicate promptly regarding load status, delays, and any issues</li>
                  <li>Pay all agreed-upon fees in a timely manner</li>
                  <li>Not use our services for any unlawful or unauthorized purpose</li>
                </ul>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">5. Payment Terms</h2>
                <p className="text-sm leading-relaxed">
                  Dispatch fees are calculated as a percentage of gross revenue from loads booked through our services. Payment is due according to the terms specified in your service agreement. Late payments may be subject to service suspension. DispatchByRIO reserves the right to modify pricing with reasonable advance notice.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">6. Cancellation Policy</h2>
                <p className="text-sm leading-relaxed">
                  Either party may terminate the service agreement with a minimum of two (2) weeks written notice. Upon termination, you remain responsible for all fees incurred up to and including the termination date, as well as any loads already booked and in transit.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">7. Limitation of Liability</h2>
                <p className="text-sm leading-relaxed">
                  DispatchByRIO acts as a dispatch service provider and is not a motor carrier, broker, or freight forwarder. We are not liable for cargo loss, damage, delays, or any claims arising from the transportation of freight. Our liability is limited to the dispatch services we provide and shall not exceed the total fees paid by you in the preceding 3-month period.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">8. Intellectual Property</h2>
                <p className="text-sm leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of DispatchByRIO and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">9. Disclaimer of Warranties</h2>
                <p className="text-sm leading-relaxed">
                  Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee specific revenue amounts, load availability, or rate levels. Past performance and statistics referenced on our website are not guarantees of future results.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">10. Governing Law</h2>
                <p className="text-sm leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be resolved through binding arbitration in accordance with applicable rules.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">11. Changes to Terms</h2>
                <p className="text-sm leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-lg sm:text-2xl mb-2 sm:mb-3">12. Contact Information</h2>
                <p className="text-sm leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-3 bg-gray-100 rounded-xl p-6 text-sm">
                  <p className="font-semibold text-dark">Dispatch by RIO</p>
                  <p>Email: <a href="mailto:info@dispatchbyrio.com" className="text-dark font-semibold hover:underline">info@dispatchbyrio.com</a></p>
                  <p>Phone: <a href="tel:+13053303123" className="text-dark font-semibold hover:underline">+1 (305) 330-3123</a></p>
                  <p>Location: United States</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
