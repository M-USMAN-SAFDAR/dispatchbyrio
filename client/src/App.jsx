import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BookIntro from './components/BookIntro'
import ErrorBoundary from './components/ErrorBoundary'
import BackToTop from './components/BackToTop'
import MobileCTA from './components/MobileCTA'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ServicesPage = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQPage = lazy(() => import('./pages/FAQ'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))

const PageLoader = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-white/20 border-t-primary rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <BookIntro />
      <ScrollToTop />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
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
    </div>
  )
}

export default App
