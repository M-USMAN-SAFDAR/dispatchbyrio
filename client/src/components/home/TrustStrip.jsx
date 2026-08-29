import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaUsers, FaHeadset, FaGlobeAmericas,
  FaFileInvoiceDollar, FaShieldAlt, FaHandsHelping
} from 'react-icons/fa'

const badges = [
  { icon: FaUsers, label: 'Carrier-Focused' },
  { icon: FaHeadset, label: 'Experienced Dispatch Support' },
  { icon: FaGlobeAmericas, label: 'Nationwide Freight Support' },
  { icon: FaFileInvoiceDollar, label: 'Factoring Solutions' },
  { icon: FaShieldAlt, label: 'Insurance Solutions' },
  { icon: FaHandsHelping, label: 'Hands-On Support' },
]

const TrustStrip = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="bg-dark-light border-y border-white/5 py-10 lg:py-12" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center gap-3 py-2"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <badge.icon className="text-primary text-lg" />
              </div>
              <span className="text-gray-300 text-xs font-semibold uppercase tracking-wide leading-tight">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
