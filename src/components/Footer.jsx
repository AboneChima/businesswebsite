import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Business Strategy', href: '#services' },
      { name: 'Process Optimization', href: '#services' },
      { name: 'Team Development', href: '#services' },
      { name: 'Digital Transformation', href: '#services' },
      { name: 'Performance Analytics', href: '#services' },
      { name: 'Innovation Consulting', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Case Studies', href: '#services' },
      { name: 'Blog', href: '#contact' },
      { name: 'News', href: '#contact' }
    ],
    resources: [
      { name: 'Free Consultation', href: '#contact' },
      { name: 'Business Assessment', href: '#contact' },
      { name: 'Industry Reports', href: '#contact' },
      { name: 'Whitepapers', href: '#contact' },
      { name: 'Webinars', href: '#contact' },
      { name: 'FAQ', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#contact' },
      { name: 'Terms of Service', href: '#contact' },
      { name: 'Cookie Policy', href: '#contact' },
      { name: 'Data Protection', href: '#contact' }
    ]
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/deoracle',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/deoracle',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/deoracle',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/deoracle',
      color: 'hover:text-pink-600'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

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
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container-custom pt-16 pb-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-12 mb-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DO</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">De Oracle</h3>
                  <p className="text-gray-400 text-sm">by Abone Joseph</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through strategic excellence and innovative solutions. 
                We partner with forward-thinking organizations to drive sustainable growth and 
                create lasting competitive advantages.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>hello@deoracle.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>New York, NY</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li key={index}>
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li key={index}>
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li key={index}>
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark p-8 rounded-3xl border border-white/10 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with Industry Insights
                </h3>
                <p className="text-gray-300">
                  Get the latest business strategies, market insights, and exclusive content 
                  delivered to your inbox monthly.
                </p>
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  className="btn btn-primary px-6 py-3 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-300">
                  © {currentYear} De Oracle by Abone Joseph. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-2">
                  {footerLinks.legal.map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer