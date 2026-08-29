import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'

const FAQPage = () => {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="pt-20 bg-dark" />
      <FAQ />
      <CTA />
    </>
  )
}

export default FAQPage
