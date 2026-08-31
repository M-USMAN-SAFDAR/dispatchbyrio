import { motion } from 'framer-motion'
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
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28 relative overflow-hidden" id="pricing">
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
              Pricing
            </span>
            <h2 className="section-title text-dark mb-2.5 sm:mb-4">
              Flexible Pricing. <span className="text-gray-400">Built Around Your Operation.</span>
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto text-xs sm:text-base md:text-lg">
              Every carrier operates differently. We'll discuss the right dispatch setup based on
              your equipment, operation, and needs.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.2,
                delay: index * 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-2xl p-5 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-dark text-white border-2 border-primary/50 shadow-xl shadow-black/20'
                  : 'bg-white text-dark border border-gray-200 hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${
                plan.highlighted ? 'bg-primary/15' : 'bg-dark/5'
              }`}>
                <plan.icon className={`text-lg sm:text-2xl ${plan.highlighted ? 'text-primary' : 'text-dark'}`} />
              </div>

              <h4 className={`font-bold text-base sm:text-xl mb-1.5 sm:mb-2 ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                {plan.name}
              </h4>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span className="text-primary text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span className={`text-xs sm:text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full text-center py-3 sm:py-3.5 min-h-[44px] rounded-full font-bold text-xs sm:text-sm
                           transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark active:scale-95'
                    : 'bg-dark text-white hover:bg-gray-800 active:scale-95'
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-10"
        >
          No complicated pricing displayed online. Contact us for details.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
