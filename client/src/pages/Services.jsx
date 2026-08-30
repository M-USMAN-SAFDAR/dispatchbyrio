import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  FaTruck, FaFileInvoiceDollar, FaShieldAlt,
  FaClipboardList, FaHandshake, FaChartLine,
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa'
import CTA from '../components/home/CTA'

const services = [
  {
    icon: FaTruck,
    title: 'Truck Dispatching',
    description: 'Load search, booking, rate negotiation, broker communication, lane planning, and ongoing dispatch support tailored to your operation.',
    bullets: [
      'Load search across multiple sources',
      'Load booking and confirmation',
      'Experienced rate negotiation',
      'Broker and shipper communication',
      'Lane planning and optimization',
      'Pickup and delivery coordination',
      'Ongoing dispatch support',
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Factoring Solutions',
    description: 'Get help finding a factoring solution that fits your operation, with support through setup, paperwork, and invoice submission.',
    bullets: [
      'Faster access to freight payments',
      'Help finding the right factoring solution',
      'Assistance with factoring paperwork',
      'Invoice submission support',
      'Communication with factoring providers',
      'Help comparing available options',
    ],
    note: 'Dispatch by RIO is not a factoring company. We help carriers find and set up the right factoring solutions.',
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance Solutions',
    description: 'Explore insurance options that fit your trucking operation, with help connecting to trusted insurance providers and coordinating the process.',
    bullets: [
      'Explore suitable coverage options',
      'Help connecting with trusted insurance providers',
      'Assistance with coverage requirements',
      'Certificate of Insurance coordination',
    ],
    note: 'Dispatch by RIO is not an insurance company. We help carriers explore and coordinate suitable insurance options.',
  },
  {
    icon: FaClipboardList,
    title: 'Paperwork & Admin Support',
    description: 'Carrier packets, broker setup, rate confirmations, BOL/POD paperwork, invoicing, and general administrative support — handled for you.',
    bullets: [
      'Carrier packets and broker setup',
      'Rate confirmations',
      'BOL/POD paperwork',
      'Invoicing and billing support',
      'Factoring invoice submission',
      'Broker documentation',
      'General administrative support',
    ],
  },
  {
    icon: FaHandshake,
    title: 'Carrier Business Support',
    description: 'Stay organized and connected with the people and services you need to operate. We act as your business support partner.',
    bullets: [
      'Day-to-day operational support',
      'Broker relationship management',
      'Business partner connections',
      'Organizational support',
      'Ongoing communication and coordination',
    ],
  },
  {
    icon: FaChartLine,
    title: 'Load & Rate Management',
    description: 'Smart load selection, experienced rate negotiation, and broker communication throughout every load to keep your truck productive.',
    bullets: [
      'Search for suitable freight',
      'Compare available loads',
      'Negotiate competitive rates',
      'Help avoid unfavorable lanes when possible',
      'Focus on keeping the truck productive',
      'Communicate with brokers throughout the load',
    ],
  },
]

const ServicesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('/images/cta-truck.jpg')` }} />
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Our Services
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-6 leading-tight tracking-tight">
              You Drive. <span className="text-gray-300">We Handle the Business Side.</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From dispatching and freight management to paperwork, factoring solutions,
              and insurance options — Dispatch by RIO is your carrier business support partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-10 sm:space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start"
                >
                  {/* Icon + Title block */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-11 h-11 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3.5 sm:mb-6">
                      <service.icon className="text-primary text-xl sm:text-3xl" />
                    </div>
                    <h3 className="text-dark font-extrabold text-lg sm:text-2xl md:text-3xl mb-2 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-base leading-relaxed mb-3.5 sm:mb-6">
                      {service.description}
                    </p>
                    {service.note && (
                      <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 sm:p-4 mb-3.5 sm:mb-6">
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {service.note}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bullets */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-8">
                      <div className="space-y-2.5 sm:space-y-4">
                        {service.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2.5 sm:gap-3">
                            <FaCheckCircle className="text-primary flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                            <span className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 sm:mt-20">
            <Link to="/contact" className="btn-primary w-full sm:w-auto text-xs sm:text-base px-8 sm:px-10 py-3.5 sm:py-4">
              Start With Dispatch by RIO
              <FaArrowRight className="text-xs sm:text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default ServicesPage
