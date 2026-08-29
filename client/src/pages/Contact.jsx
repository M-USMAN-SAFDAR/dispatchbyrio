import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const contactInfo = [
  { icon: FaPhoneAlt, title: 'Call Us', details: '+1 (305) 330-3123', link: 'tel:+13053303123' },
  { icon: FaEnvelope, title: 'Email Us', details: 'info@dispatchbyrio.com', link: 'mailto:info@dispatchbyrio.com' },
  { icon: FaMapMarkerAlt, title: 'Location', details: 'United States', link: null },
  { icon: FaClock, title: 'Availability', details: 'Dispatch Support Available', link: null },
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/dispatchbyrio?igsi=MTY2ZG5peGU2d3Z1cA%3D%3D&utm_source=qr',
    color: 'hover:text-pink-500 hover:border-pink-500/40',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/share/1C6QHYgu7J/?mibextid=wwXIfr',
    color: 'hover:text-blue-500 hover:border-blue-500/40',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    link: 'https://www.tiktok.com/@dispatch.by.rio?_r=1&_t=ZP-99HnNNLHe9e',
    color: 'hover:text-neutral-900 hover:border-neutral-900/40',
  },
]

const equipmentOptions = [
  'Semi Truck', 'Dry Van', 'Reefer', 'Flatbed', 'Step Deck',
  'Hotshot', 'Box Truck', 'Straight Truck', 'Other',
]

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    dot: '', mc: '', equipmentType: '', numberOfTrucks: '',
    trailerType: '', location: '', preferredLanes: '',
    factoringCompany: '', insuranceStatus: '', message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const subject = encodeURIComponent(`Carrier Application: ${formData.company || formData.name}`)
    const body = encodeURIComponent(
`Carrier Application - Dispatch by RIO

Contact Information:
- Full Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- Phone: ${formData.phone}
- Email: ${formData.email}

Authority & Equipment:
- DOT #: ${formData.dot || 'N/A'}
- MC #: ${formData.mc || 'N/A'}
- Equipment Type: ${formData.equipmentType || 'N/A'}
- Number of Trucks: ${formData.numberOfTrucks || 'N/A'}
- Trailer Type: ${formData.trailerType || 'N/A'}
- Location: ${formData.location || 'N/A'}

Business Details:
- Preferred Lanes: ${formData.preferredLanes || 'N/A'}
- Factoring Company: ${formData.factoringCompany || 'N/A'}
- Insurance Status: ${formData.insuranceStatus || 'N/A'}

Message / Additional Notes:
${formData.message || 'None'}`
    )

    window.location.href = `mailto:info@dispatchbyrio.com?subject=${subject}&body=${body}`

    setStatus({
      type: 'success',
      message: 'Your application draft has been prepared in your email client. You can also call us directly at +1 (305) 330-3123 or message us on social media for immediate assistance.',
    })
    setLoading(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('/images/cta-truck.jpg')` }} />
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Start With <span className="text-gray-300">Dispatch by RIO</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Fill out the carrier application below or give us a call. Most carriers are
              set up within 24–48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-14 relative -mt-8 z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <info.icon className="text-primary text-lg" />
                </div>
                <h5 className="text-dark font-bold text-sm mb-1">{info.title}</h5>
                {info.link ? (
                  <a href={info.link} className="text-gray-500 text-sm hover:text-primary transition-colors">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-500 text-sm">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Channels */}
          <div className="mt-8 text-center">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-4">
              Connect With Us On Social Media
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200
                             text-gray-700 text-xs font-semibold hover:border-primary/40 hover:bg-white
                             shadow-sm transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-sm" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-100 py-20 lg:py-28" ref={formRef}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="section-title text-dark mb-3">Carrier Application</h2>
                <p className="text-gray-500 text-base">
                  Tell us about your operation and we'll get back to you shortly.
                </p>
              </div>

              {status.message && (
                <div className={`mb-8 p-5 rounded-xl flex items-start gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {status.type === 'success' && <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 lg:p-10">
                {/* Personal Info */}
                <h3 className="text-dark font-bold text-lg mb-6 pb-3 border-b border-gray-100">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                           required placeholder="John Doe" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                           placeholder="Your Company LLC" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                           required placeholder="+1 (555) 000-0000" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                           required placeholder="john@example.com" className="input-field" />
                  </div>
                </div>

                {/* Authority Info */}
                <h3 className="text-dark font-bold text-lg mb-6 pb-3 border-b border-gray-100">
                  Authority & Equipment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">DOT #</label>
                    <input type="text" name="dot" value={formData.dot} onChange={handleChange}
                           placeholder="DOT Number" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">MC #</label>
                    <input type="text" name="mc" value={formData.mc} onChange={handleChange}
                           placeholder="MC Number" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Equipment Type</label>
                    <select name="equipmentType" value={formData.equipmentType} onChange={handleChange}
                            className="input-field appearance-none cursor-pointer">
                      <option value="">Select Equipment Type</option>
                      {equipmentOptions.map((opt) => (
                        <option key={opt} value={opt.toLowerCase().replace(' ', '-')}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Number of Trucks</label>
                    <select name="numberOfTrucks" value={formData.numberOfTrucks} onChange={handleChange}
                            className="input-field appearance-none cursor-pointer">
                      <option value="">Select</option>
                      <option value="1">1 Truck</option>
                      <option value="2-5">2–5 Trucks</option>
                      <option value="6-10">6–10 Trucks</option>
                      <option value="11-25">11–25 Trucks</option>
                      <option value="25+">25+ Trucks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Trailer Type</label>
                    <input type="text" name="trailerType" value={formData.trailerType} onChange={handleChange}
                           placeholder="e.g. 53' Dry Van" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Current Location / Primary Area</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}
                           placeholder="e.g. Dallas, TX" className="input-field" />
                  </div>
                </div>

                {/* Business Info */}
                <h3 className="text-dark font-bold text-lg mb-6 pb-3 border-b border-gray-100">
                  Business Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Preferred Lanes</label>
                    <input type="text" name="preferredLanes" value={formData.preferredLanes} onChange={handleChange}
                           placeholder="e.g. TX to CA, Southeast" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-sm font-semibold mb-2">Factoring Company</label>
                    <input type="text" name="factoringCompany" value={formData.factoringCompany} onChange={handleChange}
                           placeholder="Current factoring company (if any)" className="input-field" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-dark text-sm font-semibold mb-2">Insurance Status</label>
                    <select name="insuranceStatus" value={formData.insuranceStatus} onChange={handleChange}
                            className="input-field appearance-none cursor-pointer">
                      <option value="">Select Insurance Status</option>
                      <option value="active">Active — Currently Insured</option>
                      <option value="shopping">Shopping for Insurance</option>
                      <option value="need-help">Need Help Finding Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-dark text-sm font-semibold mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                            rows={4} placeholder="Tell us anything else about your operation..."
                            className="input-field resize-none" />
                </div>

                <button type="submit" disabled={loading}
                        className="btn-primary w-full sm:w-auto py-4 px-12 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Submitting...' : 'Submit Carrier Application'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
