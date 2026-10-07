import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Don't scroll to top when navigating to a hash anchor (e.g. /#how-it-works)
    // — the Navbar's hash-scroll handler will manage scrolling to the anchor
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
