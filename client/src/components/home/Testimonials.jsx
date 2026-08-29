import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft, FaCheckCircle, FaTruck } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Marcus Vance',
    role: 'Owner-Operator',
    company: 'Vance Freight Logistics',
    equipment: 'Dry Van (53ft)',
    location: 'Midwest & Southeast Lanes',
    rating: 5,
    date: 'Verified Carrier',
    quote:
      'Dispatch by RIO changed the way I run my truck. I don’t spend hours searching load boards or arguing with brokers anymore. They negotiate strong rates and keep me moving without forced dispatch.',
  },
  {
    name: 'Dmitri & Elena K.',
    role: 'Fleet Owners (3 Trucks)',
    company: 'Apex Express Carriers LLC',
    equipment: 'Reefer Units',
    location: 'Cross-Country & West Coast',
    rating: 5,
    date: 'Verified Fleet',
    quote:
      'Running 3 reefers was overwhelming until we partnered with RIO. Their team handles all our broker packets, rate confirmations, and factoring paperwork seamlessly. Our gross revenue increased by over 20%.',
  },
  {
    name: 'Jamal Washington',
    role: 'Owner-Operator (New Authority)',
    company: 'JW Heavy Haul',
    equipment: 'Flatbed & Step Deck',
    location: 'Southern & Midwest Lanes',
    rating: 5,
    date: 'New Authority Carrier',
    quote:
      'Starting a new MC authority is tough when brokers refuse to work with you. Dispatch by RIO guided me through setup, connected me with good factoring, and found me consistent freight from day one.',
  },
  {
    name: 'Carlos Mendez',
    role: 'Independent Carrier',
    company: 'Mendez Roadway Express',
    equipment: 'Hotshot 40ft',
    location: 'Texas & Gulf Coast',
    rating: 5,
    date: 'Verified Carrier',
    quote:
      'Great communication and genuine support. My dedicated dispatcher knows my preferred lanes and always checks in with weather and dock updates. I feel like I have a real back-office team behind me.',
  },
  {
    name: 'Anthony Rossi',
    role: 'Small Fleet Owner (2 Trucks)',
    company: 'Rossi Line Haulage',
    equipment: 'Box Trucks (26ft CDL)',
    location: 'East Coast Corridor',
    rating: 5,
    date: 'Verified Carrier',
    quote:
      'Box truck freight can be tricky with deadhead miles, but RIO keeps our trucks loaded with high-paying LTL and full loads. Invoicing is done right away so cash flow is never an issue.',
  },
  {
    name: 'Sarah & Todd Miller',
    role: 'Team Drivers / Owner-Operators',
    company: 'Miller Transport Team',
    equipment: 'Power Only & Dry Van',
    location: 'Nationwide Long-Haul',
    rating: 5,
    date: 'Verified Team',
    quote:
      'They treat you like a true business partner, not just another truck number. Transparent percentages, no hidden fees, and they respect our schedule when we need home time. Highly recommended!',
  },
]

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="testimonials" ref={ref}>
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Carrier Reviews & Testimonials
            </span>
            <h2 className="section-title text-white mb-4">
              Trusted by <span className="text-primary">Carriers Across the USA</span>
            </h2>
            <p className="section-subtitle mx-auto text-gray-400">
              Hear directly from owner-operators and fleet owners who rely on Dispatch by RIO
              to keep their trucks loaded, paperwork organized, and business profitable.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-2xl p-7 bg-white/[0.03] border border-white/[0.08] shadow-lg
                         hover:bg-dark-mid hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                         hover:scale-105 hover:-translate-y-2.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <FaCheckCircle size={10} />
                    {item.date}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <FaQuoteLeft className="text-primary/20 text-2xl mb-3 group-hover:text-primary/40 transition-colors duration-300" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Equipment Details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-primary-light transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium">
                    {item.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                    <FaTruck size={10} />
                    {item.equipment.split(' ')[0]}
                  </span>
                  <p className="text-gray-500 text-[10px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
