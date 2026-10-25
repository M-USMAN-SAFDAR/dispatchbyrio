import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import BackToTop from './components/BackToTop'
import MobileCTA from './components/MobileCTA'
import BrandArrival from './components/BrandArrival'
import { INITIAL_LOADER_MIN_MS, loadWithMinimum } from './utils/loadWithMinimum'

let initialPageLoad = true
const lazyPage = load => lazy(() => {
  const minimumMs = initialPageLoad ? INITIAL_LOADER_MIN_MS : 0
  initialPageLoad = false
  return loadWithMinimum(load, minimumMs)
})

const Home = lazyPage(() => import('./pages/Home'))
const About = lazyPage(() => import('./pages/About'))
const ServicesPage = lazyPage(() => import('./pages/Services'))
const Contact = lazyPage(() => import('./pages/Contact'))
const FAQPage = lazyPage(() => import('./pages/FAQ'))
const NotFound = lazyPage(() => import('./pages/NotFound'))
const PrivacyPolicy = lazyPage(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazyPage(() => import('./pages/TermsOfService'))

const PageLoader = ({ home }) => (
  <div className="min-h-screen bg-dark flex items-center justify-center" role="status" aria-label="Loading page">
    {!home && <div className="w-10 h-10 border-3 border-white/20 border-t-primary rounded-full animate-spin motion-reduce:animate-none" />}
  </div>
)

function App() {
  const { pathname } = useLocation()
  return (
    <MotionConfig reducedMotion="user"><div className="min-h-screen bg-dark">
      <ScrollToTop />
      <Navbar />
      {pathname === '/' && <BrandArrival />}
      <main id="main-content" className={pathname === '/' ? '' : 'rio-page'}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader home={pathname === '/'} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
      <MobileCTA />
    </div></MotionConfig>
  )
}

export default App
