import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHeadset, FaRoute, FaClipboardCheck, FaUserTie,
  FaTruck, FaHandshake
} from 'react-icons/fa'

const reasons = [
  {
    icon: FaHandshake,
    title: 'Business Partner, Not Just a Service',
    description: 'We go beyond finding loads. We help manage the business side of trucking so you can stay focused on driving.',
  },
  {
    icon: FaHeadset,
    title: 'Ongoing Communication & Support',
    description: 'Our team stays in contact throughout every load — coordinating with brokers, shippers, and your operation.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Paperwork Handled For You',
    description: 'Rate confirmations, carrier packets, invoicing, and broker documentation — we take care of the admin work.',
  },
  {
    icon: FaRoute,
    title: 'Smart Load Selection',
    description: 'We search for suitable freight, compare options, and negotiate competitive rates matched to your equipment and lanes.',
  },
  {
    icon: FaUserTie,
    title: 'Works With All Carriers',
    description: 'Owner-operators, new authorities, experienced carriers, and growing fleets — we work with all types of trucking operations.',
  },
  {
    icon: FaTruck,
    title: 'All Equipment Types Supported',
    description: 'Semi trucks, dry vans, reefers, flatbeds, step decks, hotshots, box trucks, and straight trucks — we dispatch them all.',
  },
]

const WhyCarriers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark-light py-20 lg:py-28 relative overflow-hidden" ref={ref}>
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
              Why Dispatch by RIO
            </span>
            <h2 className="section-title text-white mb-4">
              Why Carriers <span className="text-gray-400">Work With</span> Dispatch by RIO
            </h2>
            <p className="section-subtitle text-gray-400 mx-auto">
              No fabricated reviews — just the real reasons carriers choose us as their
              business support partner.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center
                            flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="text-primary text-lg" />
              </div>
              <div>
                <h5 className="text-white font-bold text-base mb-2">{reason.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyCarriers
