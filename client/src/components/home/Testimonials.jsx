import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaCheckCircle, FaTruck, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
      "Dispatch by RIO changed the way I run my truck. I don't spend hours searching load boards or arguing with brokers anymore. They negotiate strong rates and keep me moving without forced dispatch.",
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

const TestimonialCard = ({ item }) => (
  <div
    className="relative rounded-2xl p-4 sm:p-7 bg-white/[0.03] border border-white/[0.08] shadow-lg
               hover:bg-dark-mid hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
               hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer group flex flex-col justify-between
               min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] snap-center"
  >
    <div>
      {/* Header: Stars & Verified Badge */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2 flex-wrap">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} className="text-xs sm:text-sm" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
          <FaCheckCircle size={10} />
          {item.date}
        </span>
      </div>

      {/* Quote Icon & Text */}
      <FaQuoteLeft className="text-primary/20 text-lg sm:text-2xl mb-2 sm:mb-3 group-hover:text-primary/40 transition-colors duration-300" />
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
        "{item.quote}"
      </p>
    </div>

    {/* Author & Equipment Details */}
    <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-2">
      <div className="min-w-0 flex-1">
        {/* Initials avatar */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">
              {item.name.split(' ').map(w => w[0]).join('').substring(0, 2)}
            </span>
          </div>
          <div className="min-w-0">
            <h4 className="text-white font-bold text-xs sm:text-sm truncate group-hover:text-primary-light transition-colors duration-300">
              {item.name}
            </h4>
            <p className="text-gray-400 text-[10px] sm:text-xs font-medium truncate">
              {item.company}
            </p>
          </div>
        </div>
      </div>
      <div className="text-right flex-shrink-0 pl-1.5">
        <span className="inline-flex items-center gap-1 text-primary text-[10px] sm:text-xs font-semibold">
          <FaTruck size={10} />
          {item.equipment.split(' ')[0]}
        </span>
        <p className="text-gray-500 text-[10px] whitespace-nowrap">
          {item.role}
        </p>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScrollState, { passive: true })
    checkScrollState()
    return () => el.removeEventListener('scroll', checkScrollState)
  }, [])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector(':scope > *')?.offsetWidth || 380
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' })
  }

  return (
    <section className="bg-dark py-12 sm:py-20 lg:py-28 relative overflow-hidden" id="testimonials">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Carrier Reviews & Testimonials
            </span>
            <h2 className="section-title text-white mb-2.5 sm:mb-4">
              Trusted by <span className="gradient-text">Carriers Across the USA</span>
            </h2>
            <p className="section-subtitle mx-auto text-gray-300 text-xs sm:text-base md:text-lg">
              Hear directly from owner-operators and fleet owners who rely on Dispatch by RIO
              to keep their trucks loaded, paperwork organized, and business profitable.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll arrows - desktop */}
          <button
            onClick={() => scroll(-1)}
            className={`hidden lg:flex absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white/10 border border-white/20 items-center justify-center
                       text-white hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer
                       ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={() => scroll(1)}
            className={`hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white/10 border border-white/20 items-center justify-center
                       text-white hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer
                       ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xs" />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4
                       -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Scroll indicator dots - mobile */}
        <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
