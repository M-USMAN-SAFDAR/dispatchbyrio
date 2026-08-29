import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import AboutSection from '../components/home/About'
import HowWeHelp from '../components/home/HowWeHelp'
import Services from '../components/home/Services'
import FactoringInsurance from '../components/home/FactoringInsurance'
import Equipment from '../components/home/Equipment'
import Pricing from '../components/home/Pricing'
import WhyCarriers from '../components/home/WhyCarriers'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <HowWeHelp />
      <Services />
      <FactoringInsurance />
      <Equipment />
      <Pricing />
      <WhyCarriers />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home
