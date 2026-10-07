import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import './Footer.css'

const socialLinks = [
{ icon: FaInstagram, link: 'https://www.instagram.com/dispatchbyrio?igsi=MTY2ZG5peGU2d3Z1cA%3D%3D&utm_source=qr', label: 'Instagram' },
                { icon: FaFacebook, link: 'https://www.facebook.com/share/1C6QHYgu7J/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: FaTiktok, link: 'https://www.tiktok.com/@dispatch.by.rio?_r=1&_t=ZP-99HnNNLHe9e', label: 'TikTok' },
                { icon: FaWhatsapp, link: 'https://wa.me/message/LOY54STXIPUQN1', label: 'WhatsApp' }
]
const exploreLinks = [
  ['Home', '/'], ['Our services', '/services'], ['About RIO', '/about'],
  ['Questions & answers', '/faq'], ['Get started', '/contact'],
]
const services = ['Truck dispatching', 'Paperwork & admin', 'Factoring solutions', 'Insurance support', 'Business support', 'Load management']

export default function Footer() {
  return (
    <footer className="rio-footer">
      <div className="rio-wrap">
        <div className="rio-footer-grid">
          <div className="rio-footer-brand">
            <h2>Your truck.<br />Your business.<br />Our support.</h2>
            <p>Helping owner-operators and fleets handle the business behind every mile.</p>
            <div className="rio-footer-socials">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a key={label} href={link} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
              ))}
            </div>
          </div>
          <nav className="rio-footer-column" aria-label="Footer navigation">
            <h3>Explore</h3>
            <ul>{exploreLinks.map(([label, path]) => <li key={path}><Link to={path}>{label}<FiArrowUpRight aria-hidden="true" /></Link></li>)}</ul>
          </nav>
          <nav className="rio-footer-column" aria-label="Footer services">
            <h3>Our expertise</h3>
            <ul>{services.map(service => <li key={service}><Link to="/services">{service}</Link></li>)}</ul>
          </nav>
          <div className="rio-footer-column rio-footer-contact">
            <h3>Let’s connect</h3>
            <ul>
              <li><a href="tel:+13053303123">+1 (305) 330-3123 <FiArrowUpRight aria-hidden="true" /></a></li>
              <li><a href="mailto:info@dispatchbyrio.com">info@dispatchbyrio.com</a></li>
              <li><a href="https://wa.me/message/LOY54STXIPUQN1" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <FiArrowUpRight aria-hidden="true" /></a></li>
            </ul>
            <p className="rio-footer-location">United States<span>Nationwide carrier support</span></p>
          </div>
        </div>
        <p className="rio-footer-statement" aria-hidden="true">MORE THAN DISPATCH.</p>
        <div className="rio-footer-bottom">
          <p>© {new Date().getFullYear()} <Link to="/">Dispatch by RIO.</Link></p>
          <nav aria-label="Legal"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link></nav>
          <span>Built for the next mile. <FiArrowUpRight aria-hidden="true" /></span>
        </div>
      </div>
    </footer>
  )
}
