import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle } from 'react-icons/fa'
import CTA from '../components/home/CTA'

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('/images/hero-truck.jpg')` }} />
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-label bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Built Around <span className="text-gray-300">the Carrier.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Dispatch by RIO was built to help carriers handle the business side of trucking
              from one place — so they can stay focused on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28" ref={storyRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src="/images/team-work.jpg"
                  alt="Dispatch by RIO team"
                  className="rounded-2xl w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-label bg-dark/5 text-dark">
                <span className="w-1.5 h-1.5 bg-dark rounded-full" />
                Our Story
              </span>
              <h2 className="section-title text-dark mb-6">
                More Than Dispatch. <span className="text-gray-400">A Business Partner.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Running a trucking company takes more than finding a load. It takes communication,
                paperwork, cash flow, insurance, broker relationships, and constant attention to
                the details.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Dispatch by RIO was built to help carriers handle those moving parts from one place.
                We work alongside owner-operators and fleets to simplify the business side of
                trucking and help them stay focused on the road.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you're a new authority getting started or an experienced carrier looking for
                reliable support — we're here to help manage the details so you can keep moving.
              </p>
              <div className="space-y-3">
                {[
                  'Dispatch, paperwork, and admin support in one place',
                  'Factoring and insurance solutions',
                  'Works with all equipment types and carrier sizes',
                  'No forced dispatch — carriers stay in control',
                  'Honest, straightforward communication',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 text-sm" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-dark py-20 lg:py-28" ref={valuesRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label bg-white/10 text-white border border-white/20">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                How We Work
              </span>
              <h2 className="section-title text-white mb-4">
                What Carriers Can <span className="text-gray-400">Expect</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-primary/30 transition-all duration-500"
              >
                <h4 className="text-white font-bold text-lg mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
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
