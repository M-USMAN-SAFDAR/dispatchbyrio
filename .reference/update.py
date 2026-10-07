from pathlib import Path
p=Path('client/src/components/experience/freightTruck.js')
s=p.read_text().replace('indices.push(a, b, c, b, d, c)','indices.push(a, c, b, b, c, d)').replace('indices.push(0, j + 1, j); indices.push(end, end + j, end + j + 1)','indices.push(0, j, j + 1); indices.push(end, end + j + 1, end + j)')
p.write_text(s)
p=Path('client/src/pages/Home.jsx');s=p.read_text(encoding='utf-8')
s=s.replace("import { lazy, Suspense, useState } from 'react'", "import { useLayoutEffect, useRef } from 'react'\nimport { gsap } from 'gsap'\nimport { ScrollTrigger } from 'gsap/ScrollTrigger'")
s=s.replace("import { motion } from 'framer-motion'\n",'').replace("const TruckScene = lazy(() => import('../components/home/TruckScene'))",'gsap.registerPlugin(ScrollTrigger)')
a=s.index('function Reveal(');b=s.index('    <Hero />',a)
s=s[:a]+'''function Reveal({ children, className = '', delay = 0 }) {
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
    }, home)
    return () => media.revert()
  }, [])
  return <div className="rio-home" ref={home}>
'''+s[b:]
a=s.index('      <div className="equipment-stage">');b=s.index('    </div></section>',a)
s=s[:a]+'''      <div className="equipment-list">{equipment.map((item, i) => <Link key={item} to="/contact" className="equipment-type"><span>0{i + 1}</span><h3>{item}</h3><FiArrowUpRight /></Link>)}</div>
'''+s[b:]
p.write_text(s,encoding='utf-8')
