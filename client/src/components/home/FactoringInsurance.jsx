import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFileInvoiceDollar, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const FactoringInsurance = () => {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label bg-dark/5 text-dark">
              <span className="w-1.5 h-1.5 bg-dark rounded-full" />
              Beyond Dispatch
            </span>
            <h2 className="section-title text-dark mb-2.5 sm:mb-4">
              Need More Than <span className="text-gray-400">Dispatch?</span>
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto text-xs sm:text-base md:text-lg">
              We can help connect you with trusted industry partners for the services
              your trucking business needs.
            </p>
          </motion.div>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* Factoring */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-dark rounded-2xl p-5 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden
                      group hover:border-primary/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaFileInvoiceDollar className="text-primary text-xl sm:text-3xl" />
              </div>
              <h3 className="text-white font-bold text-lg sm:text-2xl mb-2 sm:mb-4">Factoring Solutions</h3>
              <p className="text-gray-400 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                Get help finding a factoring solution that fits your operation, with support
                through setup, paperwork, and invoice submission.
              </p>
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-8">
                {[
                  'Help finding the right factoring solution',
                  'Assistance with factoring paperwork',
                  'Invoice submission support',
                  'Communication with factoring providers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <span className="text-primary text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold
                                           text-xs sm:text-sm hover:gap-3 transition-all duration-300 min-h-[40px]">
                Explore Your Options <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>

          {/* Insurance */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-dark rounded-2xl p-5 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden
                      group hover:border-primary/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaShieldAlt className="text-primary text-xl sm:text-3xl" />
              </div>
              <h3 className="text-white font-bold text-lg sm:text-2xl mb-2 sm:mb-4">Insurance Solutions</h3>
              <p className="text-gray-400 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                Explore insurance options that fit your trucking operation, with help connecting
                to trusted insurance providers and coordinating the process.
              </p>
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-8">
                {[
                  'Explore suitable coverage options',
                  'Connecting with trusted insurance providers',
                  'Assistance with coverage requirements',
                  'Certificate of Insurance coordination',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <span className="text-primary text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold
                                           text-xs sm:text-sm hover:gap-3 transition-all duration-300 min-h-[40px]">
                Explore Your Options <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FactoringInsurance
