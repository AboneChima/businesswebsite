import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Globe,
  Heart
} from 'lucide-react'

const About = () => {
  const stats = [
    {
      number: '500+',
      label: 'Clients Served',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '98%',
      label: 'Success Rate',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '50+',
      label: 'Countries Reached',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'We put our clients at the heart of everything we do, ensuring personalized solutions that drive real results.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Excellence',
      description: 'Constantly evolving our methodologies and embracing cutting-edge technologies to deliver superior outcomes.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity & Trust',
      description: 'Building lasting relationships through transparency, honesty, and unwavering commitment to our promises.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            <span>About De Oracle</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Transforming Businesses with
            <span className="gradient-text"> Strategic Excellence</span>
          </h2>
          
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Founded by Abone Joseph, De Oracle has been at the forefront of business transformation, 
            helping companies navigate challenges and unlock their full potential through innovative solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              At De Oracle, we believe every business has untapped potential waiting to be discovered. 
              Our mission is to unlock this potential through strategic consulting, innovative solutions, 
              and unwavering commitment to excellence.
            </p>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              We partner with forward-thinking organizations to drive sustainable growth, optimize operations, 
              and create lasting competitive advantages in an ever-evolving marketplace.
            </p>
            
            {/* Founder Highlight */}
            <motion.div
              className="glass p-6 rounded-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Abone Joseph</h4>
                  <p className="text-secondary-600">Founder & CEO</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-secondary-500 ml-2">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="card card-hover p-6 text-center h-full"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="text-3xl font-bold text-secondary-900 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <p className="text-secondary-600 text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
            Our Core Values
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="card card-hover p-8 text-center h-full"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-dark p-8 rounded-3xl border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of successful businesses that have transformed their operations with De Oracle.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About