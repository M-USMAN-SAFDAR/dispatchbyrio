import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12
                  bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/25
                  flex items-center justify-center cursor-pointer
                  transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95
                  ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  )
}

export default BackToTop
