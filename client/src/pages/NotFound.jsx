import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-[140px] font-extrabold text-primary leading-none mb-2 sm:mb-4">
            404
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2.5 sm:mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-xs sm:text-base md:text-lg max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto">
            <Link to="/" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base">
              Go Home
            </Link>
            <Link to="/contact" className="btn-outline w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
