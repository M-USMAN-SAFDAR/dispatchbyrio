import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Privacy <span className="text-gray-300">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-container">
            <div className="space-y-8 text-gray-600">

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">1. Information We Collect</h2>
                <p className="text-sm leading-relaxed mb-3">
                  When you use our website or services, we may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other details you provide through our contact form.</li>
                  <li><strong>Business Information:</strong> Truck type, fleet size, MC/DOT numbers, and other trucking-specific information relevant to our dispatch services.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and browser type.</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">2. How We Use Your Information</h2>
                <p className="text-sm leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1">
                  <li>Provide, maintain, and improve our truck dispatch services</li>
                  <li>Respond to your inquiries and contact form submissions</li>
                  <li>Send you service-related communications</li>
                  <li>Process and manage your dispatch account</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">3. Information Sharing</h2>
                <p className="text-sm leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mt-3">
                  <li><strong>Service Providers:</strong> With trusted third-party partners who assist us in operating our business (e.g., load boards, brokers, factoring companies) solely to provide dispatch services.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">4. Data Security</h2>
                <p className="text-sm leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">5. Data Retention</h2>
                <p className="text-sm leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are retained for up to 2 years unless you request earlier deletion.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">6. Your Rights</h2>
                <p className="text-sm leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-sm leading-relaxed mt-3">
                  To exercise any of these rights, please contact us at <a href="mailto:info@dispatchbyrio.com" className="text-dark font-semibold hover:underline">info@dispatchbyrio.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">7. Third-Party Links</h2>
                <p className="text-sm leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">8. Changes to This Policy</h2>
                <p className="text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-dark font-bold text-2xl mb-3">9. Contact Us</h2>
                <p className="text-sm leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy
