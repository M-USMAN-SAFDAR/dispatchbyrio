import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import logoImg from '../assets/rio_logo_clean.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/#how-it-works' },
  { name: 'About', path: '/about' },
  { name: 'Equipment', path: '/#equipment' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Handle anchor links (/#how-it-works, /#equipment)
  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2)
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      // If not on home page, the Link will navigate to / and the hash will handle scroll
    }
    setIsOpen(false)
  }

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1)
    }
    if (path === '/') {
      return location.pathname === '/' && (!location.hash || location.hash === '#')
    }
    return location.pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <nav className="flex items-center justify-between py-3 sm:py-3.5">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
            <img
              src={logoImg}
              alt="Dispatch by RIO"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            />
            <div className="flex items-baseline select-none whitespace-nowrap font-bold text-sm sm:text-base md:text-lg tracking-tight">
              <span className="text-white font-bold">Dispatch</span>
              <span className="text-primary mx-1 font-semibold">by</span>
              <span className="text-white font-extrabold uppercase tracking-wider">RIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative py-1 text-xs xl:text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${active ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-primary rounded-full shadow-[0_0_8px_rgba(244,110,22,0.6)]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="tel:+13053303123"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <FaPhoneAlt className="text-primary text-xs xl:text-sm" />
              <span className="text-xs xl:text-sm font-semibold">+1 (305) 330-3123</span>
            </a>
            <Link to="/contact" className="btn-primary text-xs px-4 xl:px-6 py-2.5 xl:py-3 whitespace-nowrap">
              Start With Dispatch by RIO
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-lg
                    border-t border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container-custom py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative flex items-center justify-between text-base font-semibold py-3 transition-all duration-300 ${active
                    ? 'text-white border-l-2 border-primary pl-3'
                    : 'text-gray-400 hover:text-white hover:pl-2'
                  }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(244,110,22,0.8)]" />
                )}
              </Link>
            )
          })}

          <div className="border-t border-white/10 pt-5 mt-3 space-y-4">
            <a
              href="tel:+13053303123"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <FaPhoneAlt className="text-primary" />
              <span className="font-semibold">+1 (305) 330-3123</span>
            </a>
            <Link to="/contact" className="btn-primary w-full text-center">
              Start With Dispatch by RIO
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
