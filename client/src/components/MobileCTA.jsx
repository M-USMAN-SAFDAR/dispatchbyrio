import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'

const MobileCTA = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-dark/95 backdrop-blur-xl
                    border-t border-white/10 px-3.5 py-2.5 safe-area-bottom">
      <div className="flex items-center gap-2.5">
        <a
          href="tel:+13053303123"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20
                     text-white font-bold py-2.5 rounded-full text-xs transition-all duration-300
                     active:scale-95 min-h-[42px]"
        >
          <FaPhoneAlt className="text-primary text-xs" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-500
                     text-white font-bold py-2.5 rounded-full text-xs transition-all duration-300
                     hover:shadow-lg hover:shadow-primary/25 active:scale-95 min-h-[42px]"
        >
          Get Started
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </div>
  )
}

export default MobileCTA
