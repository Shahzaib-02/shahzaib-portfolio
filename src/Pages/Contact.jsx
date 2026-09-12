import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaInstagram, FaPaperPlane, FaGithub, FaLinkedin, FaClock, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Address',
      value: 'Bahawalpur, Pakistan',
      color: 'bg-red-500/10 text-red-500'
    },
    {
      icon: <FaEnvelopeOpen />,
      label: 'Email',
      value: 'shahzaibmalik0409@gmail.com',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: <FaPhoneSquareAlt />,
      label: 'Phone',
      value: '+92 307 6492467',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: <FaClock />,
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM',
      color: 'bg-purple-500/10 text-purple-500'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/shahzaib-02', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  ];

  return (
    <div id="contact" className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative py-20">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              Get in <span className="text-theme-yellow">Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="w-32 h-1 mb-16 bg-theme-yellow mx-auto"></div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Enhanced Contact Info */}
          <AnimatedSection direction="left" delay={0.3} className="w-full lg:w-2/5">
            <div className="mb-12">
              <h3 className="text-3xl font-bold uppercase mb-4 text-theme-yellow">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-theme-yellow transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-gray-500 uppercase text-xs font-semibold mb-1">{info.label}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Follow Me</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => {
                  let hoverClasses = '';
                  if (social.label === 'GitHub') {
                    hoverClasses = 'hover:bg-gray-900 hover:text-white hover:border-gray-900';
                  } else if (social.label === 'LinkedIn') {
                    hoverClasses = 'hover:bg-blue-600 hover:text-white hover:border-blue-600';
                  } else if (social.label === 'Facebook') {
                    hoverClasses = 'hover:bg-blue-500 hover:text-white hover:border-blue-500';
                  } else if (social.label === 'Instagram') {
                    hoverClasses = 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:border-transparent';
                  }

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center transition-all duration-300 group ${hoverClasses}`}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Contact Form */}
          <AnimatedSection direction="right" delay={0.4} className="w-full lg:w-3/5">
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-green-700 dark:text-green-300 font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative hover:border-theme-yellow border border-transparent rounded-xl transition-all duration-300">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="YOUR NAME"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300"
                    />
                  </div>
                  <div className="relative hover:border-theme-yellow border border-transparent rounded-xl transition-all duration-300">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="YOUR EMAIL"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 relative hover:border-theme-yellow border border-transparent rounded-xl transition-all duration-300">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="YOUR SUBJECT"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 relative hover:border-theme-yellow border border-transparent rounded-xl transition-all duration-300">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="YOUR MESSAGE"
                      rows="6"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-theme-yellow text-black font-bold uppercase hover:bg-black hover:text-theme-yellow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-lg" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Response Time:</span> I typically respond within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
