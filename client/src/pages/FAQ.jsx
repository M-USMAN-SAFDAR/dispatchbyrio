import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'
import PageHero from '../components/PageHero'

const FAQPage = () => {
  return (
    <>
      <PageHero number="04" label="GOOD TO KNOW" title="Clear answers." accent="Confident next steps." description="Get to know how we work, what we handle, and how you stay in control of your operation." image="/images/hero-truck.jpg" />
      <FAQ />
      <CTA />
    </>
  )
}

export default FAQPage
