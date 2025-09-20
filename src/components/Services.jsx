import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Settings, 
  Users, 
  Smartphone, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Strategic planning and market analysis to drive your business forward with data-driven insights and competitive advantages.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Planning', 'ROI Optimization'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency through innovative process improvement solutions and automation.',
      features: ['Workflow Analysis', 'Automation Setup', 'Quality Control', 'Cost Reduction'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Build high-performing teams through leadership training and organizational development programs.',
      features: ['Leadership Training', 'Team Building', 'Performance Management', 'Culture Development'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Smartphone,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology solutions and digital strategies for the future.',
      features: ['Technology Integration', 'Digital Strategy', 'Cloud Migration', 'Data Analytics'],
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Comprehensive performance tracking and analytics to measure success and identify improvement opportunities.',
      features: ['KPI Tracking', 'Data Visualization', 'Performance Reports', 'Predictive Analytics'],
      color: 'from-indigo-500 to-purple-500',
      delay: 0.5
    },
    {
      icon: Zap,
      title: 'Innovation Consulting',
      description: 'Foster innovation culture and implement breakthrough solutions that give you competitive edge in the market.',
      features: ['Innovation Strategy', 'R&D Planning', 'Product Development', 'Market Disruption'],
      color: 'from-yellow-500 to-orange-500',
      delay: 0.6
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="services" className="section-padding bg-gradient-to-b from-white to-secondary-50">
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
            <Settings className="w-4 h-4" />
            <span>Our Services</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Comprehensive Solutions for
            <span className="gradient-text"> Modern Businesses</span>
          </h2>
          
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end business solutions designed to transform your operations, 
            accelerate growth, and position your company for long-term success in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <motion.div
                  className="card card-hover p-8 h-full relative overflow-hidden"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center space-x-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
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
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-secondary-600 mb-6">
              Let's discuss how our comprehensive solutions can drive your business forward.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services