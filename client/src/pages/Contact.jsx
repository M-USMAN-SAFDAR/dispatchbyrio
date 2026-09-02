import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle, FaTimes, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import WaveDivider from '../components/WaveDivider'

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
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    dot: '', mc: '', equipmentType: '', numberOfTrucks: '',
    trailerType: '', location: '', preferredLanes: '',
    factoringCompany: '', insuranceStatus: '', message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  // Auto-dismiss popup after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status.message])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const payload = {
        _subject: `New Carrier Application: ${formData.company || formData.name}`,
        _template: 'table',
        _captcha: 'false',
        'Full Name': formData.name,
        'Company Name': formData.company || 'N/A',
        'Phone Number': formData.phone,
        'Email Address': formData.email,
        'DOT Number': formData.dot || 'N/A',
        'MC Number': formData.mc || 'N/A',
        'Equipment Type': formData.equipmentType || 'N/A',
        'Number of Trucks': formData.numberOfTrucks || 'N/A',
        'Trailer Type': formData.trailerType || 'N/A',
        'Operating Location': formData.location || 'N/A',
        'Preferred Lanes': formData.preferredLanes || 'N/A',
        'Factoring Company': formData.factoringCompany || 'N/A',
        'Insurance Status': formData.insuranceStatus || 'N/A',
        'Additional Notes': formData.message || 'None',
      }

      const response = await fetch('https://formsubmit.co/ajax/info@dispatchbyrio.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || `Submission failed with status ${response.status}`)
      }

      setStatus({
        type: 'success',
        message: 'Your carrier application has been submitted successfully! A Dispatch by RIO representative will review your details and contact you within 24 hours.',
      })

      setFormData({
        name: '', company: '', phone: '', email: '',
        dot: '', mc: '', equipmentType: '', numberOfTrucks: '',
        trailerType: '', location: '', preferredLanes: '',
        factoringCompany: '', insuranceStatus: '', message: '',
      })
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong while submitting your application. Please try again or contact us directly at +1 (305) 330-3123.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('/images/cta-truck.jpg')` }} />
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Get Started
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Start With <span className="text-gray-300">Dispatch by RIO</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Fill out the carrier application below or give us a call. Most carriers are
              set up within 24–48 hours.
            </p>
          </motion.div>
        </div>
      </section>
      <WaveDivider color="white" bgColor="dark" />

      {/* Contact Info Cards */}
      <section className="bg-white py-10 sm:py-14 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.2,
                  delay: (index % 4) * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-200
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
                  <info.icon className="text-primary text-base sm:text-lg" />
                </div>
                <h5 className="text-dark font-bold text-xs sm:text-sm mb-1">{info.title}</h5>
                {info.link ? (
                  <a href={info.link} className="text-gray-500 text-xs sm:text-sm hover:text-primary transition-colors">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-500 text-xs sm:text-sm">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Channels */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-gray-400 mb-3 sm:mb-4">
              Connect With Us On Social Media
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-50 border border-gray-200
                             text-gray-700 text-xs font-semibold hover:border-primary/40 hover:bg-white
                             shadow-sm transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-xs sm:text-sm" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider color="gray-100" bgColor="white" />

      {/* Application Form */}
      <section className="bg-gray-100 py-12 sm:py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center mb-7 sm:mb-12">
                <h2 className="section-title text-dark mb-2 sm:mb-3">Carrier Application</h2>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                  Tell us about your operation and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-8 lg:p-10">
                {/* Personal Info */}
                <h3 className="text-dark font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-gray-100">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 mb-5 sm:mb-8">
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                           required placeholder="John Doe" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                           placeholder="Your Company LLC" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                           required placeholder="+1 (555) 000-0000" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                           required placeholder="john@example.com" className="input-field" />
                  </div>
                </div>

                {/* Authority Info */}
                <h3 className="text-dark font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-gray-100">
                  Authority & Equipment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 mb-5 sm:mb-8">
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">DOT #</label>
                    <input type="text" name="dot" value={formData.dot} onChange={handleChange}
                           placeholder="DOT Number" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">MC #</label>
                    <input type="text" name="mc" value={formData.mc} onChange={handleChange}
                           placeholder="MC Number" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Equipment Type</label>
                    <select name="equipmentType" value={formData.equipmentType} onChange={handleChange}
                            className="select-field">
                      <option value="">Select Equipment Type</option>
                      {equipmentOptions.map((opt) => (
                        <option key={opt} value={opt.toLowerCase().replace(' ', '-')}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Number of Trucks</label>
                    <select name="numberOfTrucks" value={formData.numberOfTrucks} onChange={handleChange}
                            className="select-field">
                      <option value="">Select</option>
                      <option value="1">1 Truck</option>
                      <option value="2-5">2–5 Trucks</option>
                      <option value="6-10">6–10 Trucks</option>
                      <option value="11-25">11–25 Trucks</option>
                      <option value="25+">25+ Trucks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Trailer Type</label>
                    <input type="text" name="trailerType" value={formData.trailerType} onChange={handleChange}
                           placeholder="e.g. 53' Dry Van" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Current Location / Primary Area</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}
                           placeholder="e.g. Dallas, TX" className="input-field" />
                  </div>
                </div>

                {/* Business Info */}
                <h3 className="text-dark font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-gray-100">
                  Business Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 mb-5 sm:mb-8">
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Preferred Lanes</label>
                    <input type="text" name="preferredLanes" value={formData.preferredLanes} onChange={handleChange}
                           placeholder="e.g. TX to CA, Southeast" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Factoring Company</label>
                    <input type="text" name="factoringCompany" value={formData.factoringCompany} onChange={handleChange}
                           placeholder="Current factoring company (if any)" className="input-field" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Insurance Status</label>
                    <select name="insuranceStatus" value={formData.insuranceStatus} onChange={handleChange}
                            className="select-field">
                      <option value="">Select Insurance Status</option>
                      <option value="active">Active — Currently Insured</option>
                      <option value="shopping">Shopping for Insurance</option>
                      <option value="need-help">Need Help Finding Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-dark text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                            rows={4} placeholder="Tell us anything else about your operation..."
                            className="input-field resize-none" />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button type="submit" disabled={loading}
                          className="btn-primary w-full sm:w-auto py-3.5 sm:py-4 px-8 sm:px-12 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs sm:text-base">
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      'Submit Carrier Application'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <WaveDivider color="dark" bgColor="gray-100" />

      {/* Floating Bottom Popup Notification with Auto-Dismiss */}
      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[calc(100%-1.5rem)] sm:w-auto p-3.5 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-start gap-2.5 sm:gap-3 ${
              status.type === 'success'
                ? 'bg-[#0A0F1C]/95 border-emerald-500/40 text-white shadow-emerald-950/40'
                : 'bg-[#0A0F1C]/95 border-red-500/40 text-white shadow-red-950/40'
            }`}
          >
            <div
              className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                status.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {status.type === 'success' ? <FaCheckCircle size={15} /> : <FaExclamationCircle size={15} />}
            </div>
            <div className="flex-1 pr-1 sm:pr-2">
              <h5 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                {status.type === 'success' ? 'Application Submitted Successfully' : 'Submission Notice'}
              </h5>
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">{status.message}</p>
            </div>
            <button
              onClick={() => setStatus({ type: '', message: '' })}
              className="text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0 cursor-pointer min-w-[28px] min-h-[28px] flex items-center justify-center"
              aria-label="Close notification"
            >
              <FaTimes size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Contact
