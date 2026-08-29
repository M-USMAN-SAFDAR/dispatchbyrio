import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const highlights = [
  'Dispatch, paperwork, and admin support in one place',
  'Factoring and insurance solutions',
  'Works with owner-operators, fleets, and new authorities',
  'No forced dispatch — carriers stay in control',
]

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" id="about-section" ref={ref}>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl
                      translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/team-work.jpg"
                alt="Dispatch by RIO carrier support team"
                className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/15
                          rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label bg-primary/10 text-primary border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              About Dispatch by RIO
            </span>

            <h2 className="section-title text-white mb-6">
              Built Around <span className="text-gray-400">the Carrier.</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Running a trucking company takes more than finding a load. It takes communication,
              paperwork, cash flow, insurance, broker relationships, and constant attention to the details.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Dispatch by RIO was built to help carriers handle those moving parts from one place.
              We work alongside owner-operators and fleets to simplify the business side of trucking
              and help them stay focused on the road.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary flex-shrink-0 text-sm" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
