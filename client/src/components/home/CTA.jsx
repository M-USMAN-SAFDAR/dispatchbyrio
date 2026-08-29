import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/cta-truck.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title text-white mb-6">
            Ready to Put Your <span className="text-gray-300">Truck to Work?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Let Dispatch by RIO handle the freight, communication, paperwork, and carrier support
            while you focus on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              Start With Dispatch by RIO
              <FaArrowRight className="text-sm" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-10 py-4">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
