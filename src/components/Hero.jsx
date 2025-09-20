import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-15 blur-2xl"
        transition={{ delay: 1 }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-25 blur-lg"
        transition={{ delay: 2 }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Professional Business Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Transform Your{' '}
              <span className="gradient-text">Business</span>
              <br />
              with{' '}
              <span className="relative">
                <span className="gradient-text">De Oracle</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl leading-relaxed"
            >
              Led by{' '}
              <span className="font-semibold text-primary-600">Abone Joseph</span>,
              we deliver innovative solutions that drive growth, optimize processes,
              and create measurable results for businesses of all sizes.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
            >
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '15+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary text-lg px-8 py-4 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-secondary text-lg px-8 py-4 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="glass p-8 rounded-3xl shadow-2xl border border-white/20"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Business Analytics</h3>
                      <p className="text-sm text-secondary-600">Real-time insights</p>
                    </div>
                  </div>
                  
                  {/* Chart Simulation */}
                  <div className="space-y-3">
                    {[85, 92, 78, 96, 88].map((value, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-16 text-sm text-secondary-600">
                          Q{index + 1}
                        </div>
                        <div className="flex-1 bg-secondary-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                          />
                        </div>
                        <div className="w-8 text-sm font-medium text-secondary-700">
                          {value}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-lg border border-white/20"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-secondary-700">Live</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-lg border border-white/20"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text">+127%</div>
                  <div className="text-xs text-secondary-600">Growth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero