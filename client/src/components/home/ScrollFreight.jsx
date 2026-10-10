import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import './ScrollFreight.css'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

// Original SVG artwork: no external models, videos, or subscriptions.
function Truck() {
  return <svg viewBox="0 0 260 100" aria-hidden="true">
    <ellipse cx="130" cy="88" rx="119" ry="7" fill="#000" opacity=".25" />
    <rect x="9" y="19" width="171" height="55" rx="4" fill="#eee6d3" />
    <path d="M13 24h163M13 69h163" stroke="#b7ae9b" strokeWidth="2" />
    {Array.from({ length: 16 }, (_, i) => <path key={i} d={`M${18 + i * 10} 27v37`} stroke="#c9c0ad" />)}
    <path d="M171 72h72v8H24v-5h147z" fill="#536066" />
    <path d="M185 25h27l14 24 19 6 7 22h-70V31z" fill="#e47c43" />
    <path d="M185 25h13v52h-16V31z" fill="#bd542e" />
    <path d="M201 31h9l10 18h-19z" fill="#263f4a" />
    <path d="M202 54h12" stroke="#f5c39e" strokeWidth="2" />
    <rect x="240" y="61" width="8" height="5" rx="1" fill="#ffe1a2" />
    <rect x="244" y="72" width="11" height="7" rx="2" fill="#c3c8c5" />
    <path d="M193 63h12v11h-12z" fill="#ad4928" />
    <text x="89" y="54" textAnchor="middle" fill="#a8502f" fontSize="17" fontWeight="700" fontFamily="Arial, sans-serif">RIO ↗</text>
    {[30, 51, 174, 192, 229].map(x => <g key={x}><circle cx={x} cy="79" r="11" fill="#172227" /><circle cx={x} cy="79" r="5" fill="#a3adae" /><circle cx={x} cy="79" r="2" fill="#4c5a60" /></g>)}
  </svg>
}

export function FreightRoute() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' }, context => {
      if (!context.conditions.motion) return
      const path = root.current.querySelector('.freight-map-path')
      const length = path.getTotalLength()
      gsap.set('.freight-map-trace', { strokeDasharray: length, strokeDashoffset: length })
      gsap.timeline({ scrollTrigger: {
        trigger: context.conditions.desktop ? root.current.closest('.process-layout') : root.current,
        start: context.conditions.desktop ? 'top 65%' : 'top 80%',
        end: context.conditions.desktop ? 'bottom 45%' : 'bottom 35%', scrub: .6,
        invalidateOnRefresh: true,
      } })
        .to('.freight-map-trace', { strokeDashoffset: 0, duration: 1, ease: 'none' }, 0)
        .to('.freight-map-truck', { duration: 1, ease: 'none', motionPath: {
          path, align: path, alignOrigin: [.5, .5], autoRotate: true,
        } }, 0)
        .to('.freight-map-progress', { scaleX: 1, duration: 1, ease: 'none' }, 0)
    }, root)
    return () => media.revert()
  }, [])
  return <div className="freight-map" ref={root}>
    <div className="freight-map-heading"><span>THE RIO ROUTE</span><span>FROM FIRST CALL TO DELIVERY ↗</span></div>
    <svg viewBox="0 0 600 500" role="img" aria-label="A truck travels from pickup through dispatch to delivery as you scroll">
      <defs><pattern id="rio-map-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" strokeOpacity=".045" /></pattern></defs>
      <rect width="600" height="500" fill="url(#rio-map-grid)" />
      <g fill="none" stroke="#82968b" strokeOpacity=".12" strokeWidth="1">
        <path d="M-20 320Q170 70 340 160T650 50M-20 340Q170 90 340 180T650 70M-20 360Q170 110 340 200T650 90" />
        <path d="M-20 400Q200 510 390 350T650 370M-20 420Q200 530 390 370T650 390M-20 440Q200 550 390 390T650 410" />
      </g>
      <g fill="#263a3d" stroke="#52635d" strokeWidth="1">
        <rect x="45" y="95" width="75" height="46" rx="4" /><rect x="55" y="147" width="44" height="18" rx="2" />
        <rect x="454" y="308" width="95" height="52" rx="4" /><path d="M464 320h12v26h-12zm22 0h12v26h-12zm22 0h12v26h-12z" fill="#17282c" />
      </g>
      <path className="freight-map-path" d="M90 190 C160 190 235 120 300 155 S435 225 350 275 S185 335 270 385 S415 385 500 385" fill="none" stroke="#344c4d" strokeWidth="30" strokeLinecap="round" />
      <path d="M90 190 C160 190 235 120 300 155 S435 225 350 275 S185 335 270 385 S415 385 500 385" fill="none" stroke="#a2b1a2" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="6 8" />
      <path className="freight-map-trace" d="M90 190 C160 190 235 120 300 155 S435 225 350 275 S185 335 270 385 S415 385 500 385" fill="none" stroke="#f28b53" strokeWidth="3" strokeLinecap="round" />
      <g fill="#ef8a51" stroke="#192a2e" strokeWidth="5"><circle cx="90" cy="190" r="8" /><circle cx="350" cy="275" r="8" /><circle cx="500" cy="385" r="8" /></g>
      <g fill="#c1cdc2" fontSize="11" letterSpacing="2" fontFamily="Arial, sans-serif"><text x="50" y="215">PICKUP</text><text x="385" y="275">DISPATCH</text><text x="455" y="420">DELIVERY</text></g>
      <g className="freight-map-truck" transform="translate(90 190)">
        <rect x="-25" y="-9" width="35" height="18" rx="2" fill="#eee6d3" stroke="#9b9e91" />
        <path d="M-20-6h25m-25 4h25m-25 4h25m-25 4h25" stroke="#c5bdac" />
        <rect x="12" y="-10" width="15" height="20" rx="3" fill="#ef8a51" />
        <rect x="21" y="-7" width="4" height="14" rx="1" fill="#243b44" />
        <path d="M13-11h8m-8 22h8M-22-10h8m-8 20h8" stroke="#0d191d" strokeWidth="3" />
      </g>
    </svg>
    <div className="freight-map-copy"><span>YOUR TRUCK. YOUR BUSINESS.</span><h3>Every turn.<br /><em>A team beside you.</em></h3><p>You keep moving. We connect the moving parts.</p></div>
    <div className="freight-map-meter" aria-hidden="true"><div className="freight-map-progress" /></div>
  </div>
}

export function FreightConvoy() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.convoy-truck', { x: () => -root.current.clientWidth * .22 }, {
        x: () => root.current.clientWidth * .64, ease: 'none', scrollTrigger: {
          trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: .7, invalidateOnRefresh: true,
        },
      })
      gsap.fromTo('.convoy-landscape', { xPercent: 0 }, {
        xPercent: -12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: .8 },
      })
    }, root)
    return () => media.revert()
  }, [])
  return <div className="freight-convoy" ref={root} aria-hidden="true">
    <div className="convoy-landscape"><span>RIO</span><svg viewBox="0 0 1400 180" preserveAspectRatio="none"><path d="M0 160L90 85l70 48 110-100 140 117 110-66 90 56 140-100 140 105 120-40 100 60 100-90 120 75 110-45v95H0z" fill="#2a3b3c" /><path d="M0 176L140 120l100 40 140-45 170 60 140-55 200 45 130-55 160 65 160-35 60 40H0z" fill="#354644" /></svg></div>
    <div className="convoy-road" /><div className="convoy-truck"><Truck /></div>
    <span className="convoy-caption">BUILT FOR THE NEXT MILE.</span>
  </div>
}

