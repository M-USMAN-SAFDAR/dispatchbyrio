import { useLayoutEffect, useRef } from 'react'
import './BrandArrival.css'

// The scene loads behind the entrance and reveals after the navbar handoff.
export default function BrandArrival() {
  const brand = useRef(null)

  useLayoutEffect(() => {
    const element = brand.current
    const target = document.querySelector('[data-rio-brand]')
    if (!target || typeof element.animate !== 'function' || window.location.hash || window.scrollY > 40 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let risen = false, loaded = false, docking = false, finished = false
    let rise = [], dock
    const page = document.documentElement
    const previousIntro = page.getAttribute('data-rio-intro')
    const originalOpacity = target.style.opacity
    const words = element.querySelectorAll('[data-brand-word]')
    const restore = () => {
      finished = true
      target.style.opacity = originalOpacity
      element.style.visibility = 'hidden'
      page.setAttribute('data-rio-intro', 'complete')
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', resize)
      motion.removeEventListener('change', reduce)
    }
    const settle = (immediate = false) => {
      if (finished || docking || (!immediate && (!risen || !loaded))) return
      docking = true
      rise.forEach(animation => animation.cancel())
      const destination = target.getBoundingClientRect()
      dock = element.animate([
        { transform: element.style.transform },
        { transform: `translate(${destination.left}px, ${destination.top}px) scale(${destination.width / element.offsetWidth})` },
      ], { duration: immediate ? 400 : 750, easing: 'cubic-bezier(.65,0,.2,1)', fill: 'forwards' })
      dock.onfinish = restore
    }
    const ready = () => { loaded = true; settle() }
    const scroll = () => { if (window.scrollY > 40) settle(true) }
    // On resize the live navbar is the source of truth, including mobile sizing.
    const resize = () => { rise.forEach(animation => animation.cancel()); dock?.cancel(); restore() }
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const reduce = () => { if (motion.matches) resize() }
    page.setAttribute('data-rio-intro', 'pending')
    target.style.opacity = '0'
    element.style.visibility = 'visible'
    element.style.transform = `translate(${(window.innerWidth - element.offsetWidth) / 2}px, ${Math.max(140, window.innerHeight * .38)}px)`
    rise = Array.from(words, (word, index) => word.animate([
      { transform: 'translateY(110%)', opacity: .15 },
      { transform: 'translateY(0)', opacity: 1 },
    ], { duration: 800, delay: index * 90, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'both' }))
    Promise.all(rise.map(animation => animation.finished)).then(() => {
      risen = true
      settle()
    }).catch(() => { /* Interrupted by scrolling, navigation or reduced motion. */ })
    window.addEventListener('rio:hero-ready', ready)
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    motion.addEventListener('change', reduce)
    // Late mounting, WebGL failure and slow connections must never strand the brand.
    if (document.querySelector('.scene-ready, .scene-fallback-mode')) ready()
    const deadline = window.setTimeout(ready, 2200)
    return () => {
      clearTimeout(deadline)
      window.removeEventListener('rio:hero-ready', ready)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', resize)
      motion.removeEventListener('change', reduce)
      rise.forEach(animation => animation.cancel())
      dock?.cancel()
      target.style.opacity = originalOpacity
      element.style.visibility = 'hidden'
      if (previousIntro === null) page.removeAttribute('data-rio-intro')
      else page.setAttribute('data-rio-intro', previousIntro)
    }
  }, [])

  return <div className="rio-brand-arrival" ref={brand} aria-hidden="true">
    <span className="rio-brand-horizon"><span data-brand-word>Dispatch</span></span>
    <span className="rio-brand-horizon rio-brand-by"><span data-brand-word>by</span></span>
    <span className="rio-brand-horizon rio-brand-rio"><span data-brand-word>RIO</span></span>
  </div>
}
