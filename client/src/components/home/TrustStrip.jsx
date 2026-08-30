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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark border-t border-white/5 pt-8 pb-6 lg:pt-14 lg:pb-8" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative flex flex-col items-center justify-center text-center p-3 xs:p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl
                         bg-white/[0.03] border border-white/[0.08] shadow-sm
                         hover:bg-dark-mid hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                         hover:scale-105 hover:-translate-y-2 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3.5
                              group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <badge.icon className="text-primary group-hover:text-white text-base sm:text-xl transition-colors duration-300" />
              </div>
              <span className="text-white text-[10px] xs:text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-tight xs:tracking-normal sm:tracking-wider leading-snug break-words
                               group-hover:text-primary-light transition-colors duration-300">
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
