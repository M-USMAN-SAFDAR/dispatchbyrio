import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-custom py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 group">
              <img
                src="/rio_logo_clean.png"
                alt="Dispatch by RIO"
                className="h-8 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
              <div className="flex items-baseline select-none whitespace-nowrap font-extrabold text-base sm:text-xl md:text-2xl tracking-tight">
                <span className="text-white">Dispatch</span>
                <span className="text-primary mx-1 sm:mx-1.5 font-bold">by</span>
                <span className="text-white uppercase tracking-wider">RIO</span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              More than dispatch. We help carriers manage the business side of trucking
              so they can focus on the road.
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs mb-4 sm:mb-5">
              Your Truck. Your Business. Our Support.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, link: 'https://www.instagram.com/dispatchbyrio?igsi=MTY2ZG5peGU2d3Z1cA%3D%3D&utm_source=qr', label: 'Instagram' },
                { icon: FaFacebook, link: 'https://www.facebook.com/share/1C6QHYgu7J/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: FaTiktok, link: 'https://www.tiktok.com/@dispatch.by.rio?_r=1&_t=ZP-99HnNNLHe9e', label: 'TikTok' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-6px] sm:bottom-[-8px] left-0 w-8 h-0.5 bg-primary"></span>
            </h5>
            <ul className="space-y-1.5 sm:space-y-3 mt-3 sm:mt-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm
                               flex items-center gap-2 py-1"
                  >
                    <span className="text-primary text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6 relative">
              Our Services
              <span className="absolute bottom-[-6px] sm:bottom-[-8px] left-0 w-8 h-0.5 bg-primary"></span>
            </h5>
            <ul className="space-y-1.5 sm:space-y-3 mt-3 sm:mt-4">
              {[
                'Truck Dispatching',
                'Factoring Solutions',
                'Insurance Solutions',
                'Paperwork & Admin Support',
                'Carrier Business Support',
                'Load & Rate Management',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-xs sm:text-sm flex items-center gap-2 py-1
                               hover:text-white transition-colors duration-300"
                  >
                    <span className="text-primary text-xs">›</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6 relative">
              Contact Us
              <span className="absolute bottom-[-6px] sm:bottom-[-8px] left-0 w-8 h-0.5 bg-primary"></span>
            </h5>
            <ul className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              <li>
                <a href="tel:+13053303123" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors py-0.5">
                  <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" size={13} />
                  <span className="text-xs sm:text-sm">+1 (305) 330-3123</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dispatchbyrio.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors py-0.5">
                  <FaEnvelope className="text-primary mt-1 flex-shrink-0" size={13} />
                  <span className="text-xs sm:text-sm break-all">info@dispatchbyrio.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 py-0.5">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" size={13} />
                  <span className="text-xs sm:text-sm">United States</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Dispatch by RIO. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-[11px] sm:text-xs transition-colors py-1">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-[11px] sm:text-xs transition-colors py-1">Terms of Service</Link>
            <Link to="/contact" className="text-gray-500 hover:text-white text-[11px] sm:text-xs transition-colors py-1">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
