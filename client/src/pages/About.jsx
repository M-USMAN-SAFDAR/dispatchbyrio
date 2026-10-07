import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import CTA from '../components/home/CTA'
import PageHero from '../components/PageHero'

const About = () => {
  return (
    <>
      <PageHero number="01" label="ABOUT RIO" title="Built around" accent="the carrier." description="Dispatch by RIO brings the business side of trucking together, so you can stay focused on the road." image="/images/hero-truck.jpg" />

      {/* Story */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <img
                  src="/images/team-work.jpg"
                  alt="Dispatch by RIO team"
                  className="rounded-2xl w-full h-[220px] xs:h-[280px] sm:h-[350px] lg:h-[500px] object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label bg-dark/5 text-dark">
                <span className="w-1.5 h-1.5 bg-dark rounded-full" />
                Our Story
              </span>
              <h2 className="section-title text-dark mb-3 sm:mb-6">
                More Than Dispatch. <span className="text-gray-400">A Business Partner.</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-3.5 sm:mb-5">
                Running a trucking company takes more than finding a load. It takes communication,
                paperwork, cash flow, insurance, broker relationships, and constant attention to
                the details.
              </p>
              <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-3.5 sm:mb-5">
                Dispatch by RIO was built to help carriers handle those moving parts from one place.
                We work alongside owner-operators and fleets to simplify the business side of
                trucking and help them stay focused on the road.
              </p>
              <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-5 sm:mb-8">
                Whether you're a new authority getting started or an experienced carrier looking for
                reliable support — we're here to help manage the details so you can keep moving.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  'Dispatch, paperwork, and admin support in one place',
                  'Factoring and insurance solutions',
                  'Works with all equipment types and carrier sizes',
                  'No forced dispatch — carriers stay in control',
                  'Honest, straightforward communication',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <FaCheckCircle className="text-primary flex-shrink-0 text-xs sm:text-sm mt-1" />
                    <span className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-dark py-12 sm:py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label bg-white/10 text-white border border-white/20">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                How We Work
              </span>
              <h2 className="section-title text-white mb-2.5 sm:mb-4">
                What Carriers Can <span className="text-gray-400">Expect</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Straightforward Communication',
                desc: 'We keep it honest and direct. No overpromising, no pressure — just clear communication about your loads and business.',
              },
              {
                title: 'Carrier-First Approach',
                desc: 'Every decision we make is centered around what works for the carrier. Your operation, your schedule, your business.',
              },
              {
                title: 'Reliable Support',
                desc: 'When you need help with a load, a broker, or paperwork — we\'re available and responsive.',
              },
              {
                title: 'No Forced Dispatch',
                desc: 'You choose your loads. We present options and recommendations, but the final decision is always yours.',
              },
              {
                title: 'Admin Handled For You',
                desc: 'From rate confirmations to invoicing to broker setup — we handle the paperwork so you don\'t have to.',
              },
              {
                title: 'Factoring & Insurance Solutions',
                desc: 'Need factoring or insurance? We can help you explore options and connect with trusted providers that fit your operation.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-5 sm:p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-3">{value.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default About
