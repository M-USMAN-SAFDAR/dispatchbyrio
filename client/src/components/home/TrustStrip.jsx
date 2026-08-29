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

// Duplicate sets to ensure a 100% smooth, infinite loop
const duplicatedBadges = [...badges, ...badges, ...badges]

const TrustStrip = () => {
  return (
    <section className="bg-dark-light/90 border-y border-white/5 py-8 sm:py-10 relative overflow-hidden group">
      {/* Left/Right Edge Fade Mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-dark to-transparent z-10" />

      {/* Marquee Carousel moving right to left */}
      <div className="flex overflow-hidden select-none py-2">
        <div className="flex shrink-0 items-center gap-5 sm:gap-7 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedBadges.map((badge, index) => (
            <div
              key={`${badge.label}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]
                         hover:bg-white/[0.08] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                         hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex-shrink-0 group/card"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0
                              group-hover/card:bg-primary group-hover/card:text-white group-hover/card:scale-105 transition-all duration-300">
                <badge.icon className="text-primary group-hover/card:text-white text-lg transition-colors duration-300" />
              </div>
              <span className="text-gray-200 group-hover/card:text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
