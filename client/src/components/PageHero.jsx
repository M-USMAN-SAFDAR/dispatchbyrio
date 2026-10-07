import { motion } from 'framer-motion'

export default function PageHero({ number, label, title, accent, description, image }) {
  return (
    <section className="rio-page-hero">
      <img className="rio-page-hero-image" src={image} alt="" fetchPriority="high" />
      <motion.div className="rio-wrap rio-page-hero-content" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: [.22, 1, .36, 1] }}>
        <div className="rio-page-kicker"><span>{number} / {label}</span><span>DISPATCH BY RIO ↗</span></div>
        <h1>{title}<br /><span>{accent}</span></h1>
        <p>{description}</p>
        <div className="rio-page-hero-foot"><span>Your truck. Your business. Our support.</span><span>Nationwide service</span></div>
      </motion.div>
    </section>
  )
}

