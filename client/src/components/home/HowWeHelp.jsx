import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your Operation',
    desc: 'Share your equipment type, preferred lanes, and business goals so we can understand your operation.',
  },
  {
    num: '02',
    title: 'We Learn Your Equipment & Lanes',
    desc: 'Our team studies your truck setup, trailer type, and the lanes that make sense for your business.',
  },
  {
    num: '03',
    title: 'We Find & Negotiate Freight',
    desc: 'We search for suitable loads, compare options, and negotiate competitive rates with brokers.',
  },
  {
    num: '04',
    title: 'We Handle the Paperwork',
    desc: 'Rate confirmations, carrier packets, broker setup, invoicing — we take care of the admin work.',
  },
  {
    num: '05',
    title: 'Factoring & Insurance Solutions',
    desc: 'Get support navigating factoring solutions and insurance options that fit your trucking operation.',
  },
  {
    num: '06',
    title: 'You Stay Focused On The Road',
    desc: 'With the business side handled, you can focus on driving, delivering, and growing your operation.',
  },
]

const HowWeHelp = () => {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28 relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gray-100 rounded-full blur-3xl
                      -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label bg-dark/5 text-dark">
              <span className="w-1.5 h-1.5 bg-dark rounded-full" />
              How It Works
            </span>
            <h2 className="section-title text-dark mb-2.5 sm:mb-4">
              How We <span className="text-gray-400">Help</span> You
            </h2>
            <p className="section-subtitle text-gray-500 mx-auto text-xs sm:text-base md:text-lg">
              From your first call to daily dispatch support — here's how Dispatch by RIO
              works alongside your operation.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.2,
                delay: (index % 3) * 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-8
                        hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-4 leading-none select-none">
                {step.num}
              </div>
              <h4 className="text-dark font-bold text-base sm:text-lg mb-1.5 sm:mb-3">{step.title}</h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
