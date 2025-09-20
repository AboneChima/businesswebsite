import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechVision Inc.',
      company: 'TechVision Inc.',
      image: 'SJ',
      rating: 5,
      text: 'De Oracle transformed our business operations completely. Their strategic insights and implementation expertise helped us increase efficiency by 40% and reduce costs significantly. Abone Joseph and his team are true professionals.',
      results: ['40% efficiency increase', '25% cost reduction', '3x faster processes']
    },
    {
      name: 'Michael Chen',
      position: 'Founder, GrowthLab',
      company: 'GrowthLab',
      image: 'MC',
      rating: 5,
      text: 'Working with De Oracle was a game-changer for our startup. Their business strategy consulting helped us secure Series A funding and scale our operations. The ROI on their services has been exceptional.',
      results: ['Series A funding secured', '300% revenue growth', 'Market expansion']
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director, RetailMax',
      company: 'RetailMax',
      image: 'ER',
      rating: 5,
      text: 'The digital transformation project led by De Oracle revolutionized our retail operations. We now have real-time analytics, automated processes, and improved customer satisfaction scores.',
      results: ['Digital transformation', '50% faster operations', '95% customer satisfaction']
    },
    {
      name: 'David Thompson',
      position: 'Managing Partner, InvestCorp',
      company: 'InvestCorp',
      image: 'DT',
      rating: 5,
      text: 'De Oracle\'s performance analytics solutions gave us unprecedented insights into our portfolio companies. Their data-driven approach helped us make better investment decisions and optimize returns.',
      results: ['Better investment decisions', '20% higher returns', 'Risk reduction']
    },
    {
      name: 'Lisa Wang',
      position: 'VP of Innovation, FutureTech',
      company: 'FutureTech',
      image: 'LW',
      rating: 5,
      text: 'The innovation consulting from De Oracle helped us develop breakthrough products that disrupted our market. Their strategic guidance was instrumental in our successful product launches.',
      results: ['3 successful launches', 'Market disruption', '150% revenue increase']
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
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
            <Star className="w-4 h-4" />
            <span>Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            What Our Clients Say About
            <span className="gradient-text"> De Oracle</span>
          </h2>
          
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business leaders say about their 
            transformation journey with De Oracle.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/20 relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
            >
              <Quote className="w-6 h-6 text-white" />
            </motion.div>

            {/* Content */}
            <div className="pt-8">
              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-1 mb-6"
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-secondary-700 leading-relaxed mb-8 font-medium"
              >
                "{currentTestimonial.text}"
              </motion.blockquote>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {currentTestimonial.results.map((result, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    ✓ {result}
                  </motion.span>
                ))}
              </motion.div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.image}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-secondary-600">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-primary-600 font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <motion.button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-secondary-300 hover:bg-secondary-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-secondary-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials