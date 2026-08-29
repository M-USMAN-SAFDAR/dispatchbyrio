import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-truck.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Decorative */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20
                          rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Carrier Business Support Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white
                          leading-[1.1] mb-6">
              More Than Dispatch.
              <br />
              <span className="text-gray-400">We Help You Run</span>
              <br />
              the Business.
            </h1>

            {/* Subheadline */}
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
              Dispatch, freight, paperwork, factoring solutions, insurance options, and ongoing
              carrier support — all through one reliable team.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link to="/contact" className="btn-primary text-base px-10 py-4">
                Start With Dispatch by RIO
                <FaArrowRight className="text-sm" />
              </Link>
              <a href="tel:+13053303123" className="btn-outline text-base px-10 py-4">
                <FaPhoneAlt className="text-sm" />
                Talk to a Dispatcher
              </a>
            </div>

            {/* Mini trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {['All Equipment Types', 'Owner-Operators & Fleets', 'Nationwide Support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}

export default Hero
