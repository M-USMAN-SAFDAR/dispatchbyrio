import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-8xl md:text-[150px] font-extrabold text-primary leading-none mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary px-10 py-4">
              Go Home
            </Link>
            <Link to="/contact" className="btn-outline px-10 py-4">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
