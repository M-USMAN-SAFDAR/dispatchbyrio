import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaUser, FaTruckMoving, FaCog, FaArrowRight } from 'react-icons/fa'

const plans = [
  {
    icon: FaUser,
    name: 'Owner-Operator',
    description: 'Personalized dispatch support for independent carriers.',
    features: [
      'Dedicated dispatch support',
      'Load search & rate negotiation',
      'Paperwork & admin assistance',
      'Broker communication',
      'Factoring & insurance solutions',
    ],
  },
  {
    icon: FaTruckMoving,
    name: 'Fleet',
    description: 'Coordinated dispatch support for growing fleets.',
    features: [
      'Multi-truck coordination',
      'Dedicated point of contact',
      'Fleet-wide load management',
      'Administrative support',
      'Business partner connections',
    ],
    highlighted: true,
  },
  {
    icon: FaCog,
    name: 'Custom',
    description: 'Flexible solutions for unique operations and business needs.',
    features: [
      'Tailored dispatch setup',
      'Custom support structure',
      'Flexible service options',
      'Scalable as you grow',
      'Built around your operation',
    ],
  },
]

const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden" id="pricing" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label bg-dark/5 text-dark">
              <span className="w-1.5 h-1.5 bg-dark rounded-full" />
              Pricing
            </span>
            <h2 className="section-title text-dark mb-4">
              Flexible Pricing. <span className="text-gray-400">Built Around Your Operation.</span>
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto">
              Every carrier operates differently. We'll discuss the right dispatch setup based on
              your equipment, operation, and needs.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-dark text-white border-2 border-primary/50 shadow-xl shadow-black/20'
                  : 'bg-white text-dark border border-gray-200 hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.highlighted ? 'bg-primary/15' : 'bg-dark/5'
              }`}>
                <plan.icon className={`text-2xl ${plan.highlighted ? 'text-primary' : 'text-dark'}`} />
              </div>

              <h4 className={`font-bold text-xl mb-2 ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                {plan.name}
              </h4>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className={`text-xs ${plan.highlighted ? 'text-primary' : 'text-primary'}`}>✓</span>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full text-center py-3.5 rounded-full font-bold text-sm
                           transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-dark text-white hover:bg-gray-800'
                }`}
              >
                Get a Custom Quote
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          No complicated pricing displayed online. Contact us for details.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
