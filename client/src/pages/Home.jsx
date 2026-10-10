import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiTruck, FiFileText, FiShield, FiTrendingUp, FiLayers, FiPhone, FiCheck } from 'react-icons/fi'
import Hero from '../components/home/Hero'
import FAQ from '../components/home/FAQ'
import '../components/home/Polish.css'
import { FreightRoute, FreightConvoy } from '../components/home/ScrollFreight'
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
function Reveal({ children, className = '' }) {
  return <div className={className} data-reveal>{children}</div>
}
export default function Home() {
  const home = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.rio-ticker > div', { xPercent: 0 }, {
        xPercent: -22, ease: 'none', scrollTrigger: {
          trigger: '.rio-ticker', start: 'top bottom', end: 'bottom top', scrub: .6,
        },
      })
      gsap.utils.toArray('[data-reveal]').forEach(element => {
        gsap.fromTo(element, { y: 36, opacity: .25 }, {
          y: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: element, start: 'top 98%', end: 'top 74%', scrub: .45 },
        })
      })
      gsap.from('.intro-principles span', { y: 16, opacity: 0, stagger: .06, duration: .5, ease: 'power2.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: '.intro-principles', start: 'top 96%', once: true } })
      gsap.from('.equipment-type', { y: 18, opacity: 0, stagger: .04, duration: .5, ease: 'power2.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: '.equipment-list', start: 'top 96%', once: true } })
      gsap.utils.toArray('.section-heading h2 > span, .intro-layout h2 > span, .rio-final h2 > span').forEach(element => {
        gsap.fromTo(element, { clipPath: 'inset(0 100% 0 0)' }, {
          clipPath: 'inset(0 0% 0 0)', ease: 'none',
          scrollTrigger: { trigger: element, start: 'top 95%', end: 'top 72%', scrub: .45 },
        })
      })
      gsap.fromTo('.process-route-fill', { scaleY: 0 }, {
        scaleY: 1, ease: 'none', scrollTrigger: {
          trigger: '.process-steps', start: 'top 65%', end: 'bottom 65%', scrub: .35,
        },
      })
      const processSteps = gsap.utils.toArray('.process-step')
      processSteps.forEach(element => {
        ScrollTrigger.create({
          trigger: element, start: 'top 65%', end: 'bottom 65%',
          toggleClass: { targets: element, className: 'step-in-view' },
        })
      })
      // Keep continuous decorative effects off touch devices.
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.to('.final-watermark', { x: -35, ease: 'none', scrollTrigger: { trigger: '.rio-final', start: 'top bottom', end: 'bottom top', scrub: .6 } })
      }
    }, home)
    let mounted = true
    document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })
    return () => { mounted = false; media.revert() }
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
      <div className="services-grid">{services.map((service, i) => <Reveal className="service-tile" key={service.title}><span className="tile-number">0{i + 1}</span><service.icon className="service-icon" /><h3>{service.title}</h3><p>{service.desc}</p><Link to="/services" aria-label={`Explore ${service.title}`} className="tile-link"><FiArrowUpRight /></Link></Reveal>)}</div>
      <Link to="/services" className="rio-text-link services-link">Explore our services <FiArrowUpRight /></Link>
    </div></section>
    <section className="rio-process rio-wrap" id="how-it-works"><Reveal className="section-heading"><div><span className="rio-eyebrow dark-eyebrow">03 / THE ROAD AHEAD</span><h2>From the first call.<br /><span>To your next delivery.</span></h2></div><Link to="/contact" className="rio-button">Start your journey <FiArrowUpRight /></Link></Reveal>
      <div className="process-layout"><FreightRoute /><div className="process-steps"><div className="process-route" aria-hidden="true"><div className="process-route-fill" /></div>{steps.map(([title, desc], i) => <Reveal className="process-step" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></div>
    </section>
    <section className="rio-equipment" id="equipment"><div className="rio-wrap"><Reveal className="section-heading"><div><span className="rio-eyebrow">04 / YOUR EQUIPMENT. OUR EXPERTISE.</span><h2>One team.<br /><span>Whatever you drive.</span></h2></div><p>One truck or a growing fleet.<br />We work around your equipment and lanes.</p></Reveal>
      <FreightConvoy />
      <div className="equipment-list">{equipment.map((item, i) => <Link key={item} to="/contact" className="equipment-type"><span>0{i + 1}</span><h3>{item}</h3><FiArrowUpRight /></Link>)}</div>
    </div></section>
    <section className="rio-plans rio-wrap" id="pricing"><Reveal className="section-heading"><div><span className="rio-eyebrow dark-eyebrow">05 / ROOM TO GROW</span><h2>Your operation.<br /><span>Your kind of support.</span></h2></div><p>Every carrier operates differently.<br />Let’s find the right setup for yours.</p></Reveal><div className="plans-grid">{plans.map(([name, desc, features], i) => <Reveal key={name} className={`plan-tile ${i === 1 ? 'featured-plan' : ''}`}><span className="rio-eyebrow">0{i + 1} / {i === 1 ? 'BUILT FOR GROWTH' : 'BUILT FOR YOU'}</span><h3>{name}</h3><p>{desc}</p><ul>{features.map(f => <li key={f}><FiCheck />{f}</li>)}</ul><Link to="/contact" className="plan-cta">Get a custom quote <FiArrowUpRight /></Link></Reveal>)}</div><p className="pricing-note">Flexible pricing based on your equipment, operation, and needs. Contact us for details.</p></section>
    <FAQ />
    <section className="rio-final"><div className="rio-wrap"><Reveal><span className="rio-eyebrow">YOUR NEXT MILE STARTS WITH A CONVERSATION</span><h2>Let’s move<br /><span>your business forward.</span></h2><div className="final-actions"><Link to="/contact" className="rio-button light-button">Start with Dispatch by RIO <FiArrowUpRight /></Link><a href="tel:+13053303123" className="rio-text-link"><FiPhone /> +1 (305) 330-3123</a></div></Reveal><span className="final-watermark" aria-hidden="true">RIO ↗</span></div></section>
  </div>
}
