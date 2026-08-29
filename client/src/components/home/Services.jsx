import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  FaTruck, FaFileInvoiceDollar, FaShieldAlt,
  FaClipboardList, FaHandshake, FaChartLine
} from 'react-icons/fa'

const services = [
  {
    icon: FaTruck,
    title: 'Truck Dispatching',
    description: 'Load search, booking, rate negotiation, broker communication, lane planning, and ongoing dispatch support tailored to your operation.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Factoring Solutions',
    description: 'Get help finding a factoring solution that fits your operation, with support through setup, paperwork, and invoice submission.',
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance Solutions',
    description: 'Explore insurance options that fit your trucking operation, with help connecting to trusted insurance providers and coordinating the process.',
  },
  {
    icon: FaClipboardList,
    title: 'Paperwork & Admin Support',
    description: 'Carrier packets, broker setup, rate confirmations, BOL/POD paperwork, invoicing, and general administrative support — handled for you.',
  },
  {
    icon: FaHandshake,
    title: 'Carrier Business Support',
    description: 'Stay organized and connected with the people and services you need to operate. We act as your business support partner.',
  },
  {
    icon: FaChartLine,
    title: 'Load & Rate Management',
    description: 'Smart load selection, experienced rate negotiation, and broker communication throughout every load to keep your truck productive.',
  },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="services-section" ref={ref}>
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              What We Do
            </span>
            <h2 className="section-title text-white mb-4">
              More Than <span className="text-gray-400">Just Dispatch</span>
            </h2>
            <p className="section-subtitle text-gray-400 mx-auto">
              Dispatch by RIO provides the support carriers need to manage the business side
              of trucking — from freight to paperwork to industry connections.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-primary/30 hover:-translate-y-1
                        transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="text-primary text-2xl" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
