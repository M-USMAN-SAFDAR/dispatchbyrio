import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaTruck, FaTrailer, FaSnowflake, FaLayerGroup,
  FaTruckMoving, FaShuttleVan, FaBoxOpen, FaTruckLoading
} from 'react-icons/fa'

const equipment = [
  { icon: FaTruck, name: 'Semi Trucks' },
  { icon: FaTrailer, name: 'Dry Vans' },
  { icon: FaSnowflake, name: 'Reefers' },
  { icon: FaLayerGroup, name: 'Flatbeds' },
  { icon: FaTruckLoading, name: 'Step Decks' },
  { icon: FaTruckMoving, name: 'Hotshots' },
  { icon: FaBoxOpen, name: 'Box Trucks' },
  { icon: FaShuttleVan, name: 'Straight Trucks' },
]

const Equipment = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="equipment" ref={ref}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
          style={{ backgroundImage: `url('/images/stats-truck.jpg')` }}
        />
      </div>

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
              Equipment
            </span>
            <h2 className="section-title text-white mb-4">
              One Dispatch Team. <span className="text-gray-400">All Types of Equipment.</span>
            </h2>
            <p className="section-subtitle text-gray-400 mx-auto">
              Whether you operate one truck or manage a growing fleet, Dispatch by RIO works around
              your equipment, lanes, and business goals.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass-card p-6 text-center hover:border-primary/30 hover:-translate-y-1
                        transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center
                            mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="text-primary text-xl" />
              </div>
              <span className="text-white font-semibold text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment
