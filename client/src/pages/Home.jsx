import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiTruck, FiFileText, FiShield, FiTrendingUp, FiLayers, FiPhone, FiCheck } from 'react-icons/fi'
import Hero from '../components/home/Hero'
import FAQ from '../components/home/FAQ'
gsap.registerPlugin(ScrollTrigger)
const services = [
  { icon: FiTruck, title: 'Truck dispatching', desc: 'The right freight for your equipment and lanes. Load search, booking, rate negotiation, and broker communication.' },
  { icon: FiFileText, title: 'Paperwork. Handled.', desc: 'Carrier packets, rate confirmations, BOL/POD documents, and invoicing. Less admin, more time on the road.' },
  { icon: FiTrendingUp, title: 'Factoring solutions', desc: 'Connections to trusted factoring partners, with support for setup, paperwork, and invoice submission.' },
  { icon: FiShield, title: 'Insurance support', desc: 'Explore options with insurance partners and get help coordinating your coverage documentation.' },
  { icon: FiLayers, title: 'Carrier business support', desc: 'One dependable team to keep your operation organized, connected, and moving forward.' },
  { icon: FiArrowRight, title: 'Load & rate management', desc: 'Smart load selection, lane planning, and experienced negotiation to keep your truck productive.' },
]
const steps = [
  ['Tell us about your operation', 'Share your equipment, preferred lanes, and business goals.'],
  ['We learn your equipment & lanes', 'We build a dispatch setup around the way you work.'],
  ['We find & negotiate freight', 'We compare suitable loads and negotiate with brokers. You make the final call.'],
  ['We handle the paperwork', 'Carrier packets, broker setup, rate confirmations, and invoicing.'],
  ['We connect the business side', 'Get help navigating factoring partners and insurance options.'],
  ['You focus on the road', 'We stay in communication while you drive, deliver, and grow.'],
]
const equipment = ['Dry Van', 'Reefer', 'Flatbed', 'Step Deck', 'Hotshot', 'Box Truck', 'Semi Truck', 'Straight Truck']
const plans = [
  ['Owner-operator', 'Your truck. A team in your corner.', ['Dedicated dispatch support', 'Load search & rate negotiation', 'Paperwork & admin assistance', 'Broker communication', 'Factoring & insurance connections']],
  ['Fleet', 'More trucks. The same attention to detail.', ['Multi-truck coordination', 'Dedicated point of contact', 'Fleet-wide load management', 'Administrative support', 'Business partner connections']],
  ['Custom', 'Support that fits the way you operate.', ['Tailored dispatch setup', 'Custom support structure', 'Flexible service options', 'Scalable as you grow', 'Built around your operation']],
]
function Reveal({ children, className = '', delay = 0 }) {
  return <div className={className} data-reveal data-delay={delay}>{children}</div>
}
export default function Home() {
  const home = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray('[data-reveal]').forEach(element => {
        gsap.fromTo(element, { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: .85, delay: Number(element.dataset.delay), ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 92%', toggleActions: 'play none none none' } })
      })
      gsap.fromTo('.process-photo img', { scale: 1.16, yPercent: -5 }, { scale: 1.02, yPercent: 5, ease: 'none', scrollTrigger: { trigger: '.process-photo', start: 'top bottom', end: 'bottom top', scrub: 1 } })
      gsap.from('.intro-principles span', { y: 20, opacity: 0, stagger: .15, duration: .7, scrollTrigger: { trigger: '.intro-principles', start: 'top 90%' } })
      gsap.from('.equipment-type', { rotateX: -40, y: 25, opacity: 0, stagger: .08, duration: .7, scrollTrigger: { trigger: '.equipment-list', start: 'top 90%' } })
      gsap.to('.final-watermark', { x: -70, ease: 'none', scrollTrigger: { trigger: '.rio-final', start: 'top bottom', end: 'bottom top', scrub: 1 } })
      const cleanups = []
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.utils.toArray('.service-tile, .plan-tile').forEach(card => {
          const tilt = event => {
            const rect = card.getBoundingClientRect()
            gsap.to(card, { rotationY: ((event.clientX - rect.left) / rect.width - .5) * 7, rotationX: -((event.clientY - rect.top) / rect.height - .5) * 7, transformPerspective: 1000, duration: .4, overwrite: 'auto' })
          }
          const reset = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: .6 })
          card.addEventListener('pointermove', tilt); card.addEventListener('pointerleave', reset)
          cleanups.push(() => { card.removeEventListener('pointermove', tilt); card.removeEventListener('pointerleave', reset); gsap.killTweensOf(card) })
        })
      }
      return () => cleanups.forEach(cleanup => cleanup())
    }, home)
    return () => media.revert()
  }, [])
  return <div className="rio-home" ref={home}>
    <Hero />
    <div className="rio-ticker" aria-label="Dispatch, freight, paperwork, factoring, insurance, carrier support"><div>{[0, 1].map(i => <span key={i} aria-hidden={i === 1}>DISPATCH <b>↗</b> FREIGHT <b>↗</b> PAPERWORK <b>↗</b> FACTORING <b>↗</b> INSURANCE <b>↗</b> CARRIER SUPPORT <b>↗</b> </span>)}</div></div>
    <section className="rio-intro rio-wrap" id="about-section">
      <Reveal><span className="rio-eyebrow dark-eyebrow">01 / BUILT AROUND THE CARRIER</span></Reveal>
      <Reveal className="intro-layout"><h2>The road is yours.<br /><span>We take care of<br />the moving parts.</span></h2><div><p>Running a trucking company takes more than finding a load. It takes communication, paperwork, cash flow, and constant attention to the details.</p><p>Dispatch by RIO brings those moving parts together. We work alongside owner-operators, new authorities, and fleets so you can stay focused on what’s ahead.</p><Link to="/about" className="rio-text-link dark-link">Get to know RIO <FiArrowUpRight /></Link></div></Reveal>
      <div className="intro-principles"><span><FiCheck /> No forced dispatch</span><span><FiCheck /> All equipment types</span><span><FiCheck /> Nationwide support</span></div>
    </section>
    <section className="rio-services" id="services-section"><div className="rio-wrap">
      <Reveal className="section-heading"><div><span className="rio-eyebrow">02 / MORE THAN A LOAD BOARD</span><h2>Every mile.<br /><span>Every moving part.</span></h2></div><p>From your next load to the business behind it.<br />Practical support, all through one team.</p></Reveal>
      <div className="services-grid">{services.map((service, i) => <Reveal className="service-tile" key={service.title} delay={(i % 3) * .08}><span className="tile-number">0{i + 1}</span><service.icon className="service-icon" /><h3>{service.title}</h3><p>{service.desc}</p><Link to="/services" aria-label={`Explore ${service.title}`} className="tile-link"><FiArrowUpRight /></Link></Reveal>)}</div>
      <Link to="/services" className="rio-text-link services-link">Explore our services <FiArrowUpRight /></Link>
    </div></section>
    <section className="rio-process rio-wrap" id="how-it-works"><Reveal className="section-heading"><div><span className="rio-eyebrow dark-eyebrow">03 / THE ROAD AHEAD</span><h2>From the first call.<br /><span>To your next delivery.</span></h2></div><Link to="/contact" className="rio-button">Start your journey <FiArrowUpRight /></Link></Reveal>
      <div className="process-layout"><div className="process-photo"><img src="/images/stats-truck.jpg" alt="Truck ready for its next delivery" loading="lazy" /><div><span>YOUR TRUCK. YOUR BUSINESS.</span><h3>Always in<br />the driver’s seat.</h3><p>We present the options.<br />You choose the loads.</p></div></div><div className="process-steps">{steps.map(([title, desc], i) => <Reveal className="process-step" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></div>
    </section>
    <section className="rio-equipment" id="equipment"><div className="rio-wrap"><Reveal className="section-heading"><div><span className="rio-eyebrow">04 / YOUR EQUIPMENT. OUR EXPERTISE.</span><h2>One team.<br /><span>Whatever you drive.</span></h2></div><p>One truck or a growing fleet.<br />We work around your equipment and lanes.</p></Reveal>
      <div className="equipment-list">{equipment.map((item, i) => <Link key={item} to="/contact" className="equipment-type"><span>0{i + 1}</span><h3>{item}</h3><FiArrowUpRight /></Link>)}</div>
    </div></section>
    <section className="rio-plans rio-wrap" id="pricing"><Reveal className="section-heading"><div><span className="rio-eyebrow dark-eyebrow">05 / ROOM TO GROW</span><h2>Your operation.<br /><span>Your kind of support.</span></h2></div><p>Every carrier operates differently.<br />Let’s find the right setup for yours.</p></Reveal><div className="plans-grid">{plans.map(([name, desc, features], i) => <Reveal key={name} className={`plan-tile ${i === 1 ? 'featured-plan' : ''}`} delay={i * .08}><span className="rio-eyebrow">0{i + 1} / {i === 1 ? 'BUILT FOR GROWTH' : 'BUILT FOR YOU'}</span><h3>{name}</h3><p>{desc}</p><ul>{features.map(f => <li key={f}><FiCheck />{f}</li>)}</ul><Link to="/contact" className="plan-cta">Get a custom quote <FiArrowUpRight /></Link></Reveal>)}</div><p className="pricing-note">Flexible pricing based on your equipment, operation, and needs. Contact us for details.</p></section>
    <FAQ />
    <section className="rio-final"><div className="rio-wrap"><Reveal><span className="rio-eyebrow">YOUR NEXT MILE STARTS WITH A CONVERSATION</span><h2>Let’s move<br /><span>your business forward.</span></h2><div className="final-actions"><Link to="/contact" className="rio-button light-button">Start with Dispatch by RIO <FiArrowUpRight /></Link><a href="tel:+13053303123" className="rio-text-link"><FiPhone /> +1 (305) 330-3123</a></div></Reveal><span className="final-watermark" aria-hidden="true">RIO ↗</span></div></section>
  </div>
}
