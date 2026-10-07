import { motion } from 'framer-motion'
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
  return (
    <section className="bg-dark py-12 sm:py-20 lg:py-28 relative overflow-hidden" id="equipment">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url('/images/stats-truck.jpg')` }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Equipment
            </span>
            <h2 className="section-title text-white mb-2.5 sm:mb-4">
              One Dispatch Team. <span className="gradient-text">All Types of Equipment.</span>
            </h2>
            <p className="section-subtitle text-gray-300 mx-auto text-xs sm:text-base md:text-lg">
              Whether you operate one truck or manage a growing fleet, Dispatch by RIO works around
              your equipment, lanes, and business goals.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.1,
                delay: (index % 4) * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card p-3.5 sm:p-6 text-center hover:border-primary/30 hover:-translate-y-1 active:scale-95
                        transition-all duration-500 group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center
                            mx-auto mb-2.5 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="text-primary text-base sm:text-xl" />
              </div>
              <span className="text-white font-semibold text-xs sm:text-sm break-words">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment
