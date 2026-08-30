import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'What does Dispatch by RIO do?',
    answer: 'Dispatch by RIO is a carrier business support partner. We help with truck dispatching, freight search, rate negotiation, paperwork, invoicing, broker communication, and we can connect you with trusted factoring and insurance partners. We handle the business side of trucking so you can focus on driving.',
  },
  {
    question: 'Do you work with all types of trucks?',
    answer: 'Yes. We work with semi trucks, dry vans, reefers, flatbeds, step decks, hotshots, box trucks, straight trucks, and other commercial equipment. Whatever you operate, we can build a dispatch setup around it.',
  },
  {
    question: 'Do I choose which loads to take?',
    answer: 'Absolutely. We present load options and provide recommendations, but you always have the final say. There is no forced dispatch — you stay in control of your truck and your business.',
  },
  {
    question: 'Can you negotiate rates?',
    answer: 'Yes. Our team has experience negotiating with brokers and shippers to secure competitive rates. We work to find freight that matches your operation and negotiate on your behalf.',
  },
  {
    question: 'Can you help with broker paperwork?',
    answer: 'Yes. We handle carrier packets, broker setup, rate confirmations, BOL/POD paperwork, invoicing, and general administrative support. Our goal is to take the paperwork off your plate.',
  },
  {
    question: 'Do you work with factoring companies?',
    answer: 'We are not a factoring company ourselves, but we can connect you with trusted factoring partners. We also help with the setup process, invoice submission, and communication with your factoring provider.',
  },
  {
    question: 'Can you help me find insurance?',
    answer: 'We are not an insurance company, but we can connect you with insurance partners and help you explore coverage options suitable for your trucking operation. We can also help coordinate Certificate of Insurance documentation.',
  },
  {
    question: 'Can you submit invoices to my factoring company?',
    answer: 'Yes. As part of our administrative support, we can help prepare and submit invoices to your factoring company, including rate confirmations and signed proof of delivery documents.',
  },
  {
    question: 'Do you work with owner-operators and fleets?',
    answer: 'Yes. We work with owner-operators, new authorities, experienced carriers, small fleets, and growing fleets. Our support is flexible and built around each carrier\'s specific operation.',
  },
  {
    question: 'How do I get started?',
    answer: 'Fill out our carrier application form or give us a call. We\'ll learn about your operation, equipment, and goals, and set up a dispatch plan that works for you. Most carriers are set up within 24–48 hours.',
  },
  {
    question: 'What documents do I need to onboard?',
    answer: 'Typically we\'ll need your MC authority, DOT number, W9, Certificate of Insurance, and any relevant equipment information. Our team will guide you through the onboarding process step by step.',
  },
]

const AccordionItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-primary/30 bg-dark-light/50' : 'border-white/10 hover:border-white/20'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-3.5 sm:p-5 md:p-6 text-left group cursor-pointer min-h-[48px]"
      >
        <span className={`font-bold text-xs sm:text-sm md:text-base pr-2.5 sm:pr-4 transition-colors duration-300 ${
          isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
        }`}>
          {faq.question}
        </span>
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0
                        transition-all duration-300 ${
          isOpen ? 'bg-primary text-white' : 'bg-white/10 text-white'
        }`}>
          {isOpen ? <FaMinus className="text-[9px] sm:text-xs" /> : <FaPlus className="text-[9px] sm:text-xs" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-3.5 sm:px-5 md:px-6 pb-3.5 sm:pb-5 md:pb-6">
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-12 sm:py-20 lg:py-28 relative overflow-hidden" id="faq" ref={ref}>
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              FAQ
            </span>
            <h2 className="section-title text-white mb-2.5 sm:mb-4">
              Frequently Asked <span className="text-gray-400">Questions</span>
            </h2>
            <p className="section-subtitle text-gray-300 mx-auto text-xs sm:text-base md:text-lg">
              Have questions about working with Dispatch by RIO? Find answers below.
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
