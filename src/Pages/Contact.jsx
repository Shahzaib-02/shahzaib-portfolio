import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble, FaPaperPlane } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">

      <div className="container mx-auto px-4 z-10 relative py-20">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
        
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              Get in <span className="text-theme-yellow">Touch</span>
            </h1>

          </div>
        </AnimatedSection>
        <div className="w-32 h-1 mb-12  bg-theme-yellow mx-auto"></div>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.3} className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold uppercase mb-8 text-theme-yellow">Don't be shy!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-12 leading-relaxed text-lg">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-800">
                  <FaMapMarkerAlt className="text-theme-yellow text-xl" />
                </div>
                <div>
                  <span className="block text-gray-500 uppercase text-sm font-semibold mb-2">Address Point</span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">Bahawalpur,Pakistan</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-800">
                  <FaEnvelopeOpen className="text-theme-yellow text-xl" />
                </div>
                <div>
                  <span className="block text-gray-500 uppercase text-sm font-semibold mb-2">Mail Me</span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">shahzaibmalik0409@dmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-800">
                  <FaPhoneSquareAlt className="text-theme-yellow text-xl" />
                </div>
                <div>
                  <span className="block text-gray-500 uppercase text-sm font-semibold mb-2">Call Me</span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">+92 307 6492467</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-theme-yellow hover:text-black transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-theme-yellow hover:text-black transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-theme-yellow hover:text-black transition-all duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-theme-yellow hover:text-black transition-all duration-300">
                <FaDribbble />
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.4} className="w-full lg:w-2/3">
            <form className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-white dark:bg-theme-dark border border-gray-300 dark:border-gray-800 rounded-full py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="w-full bg-white dark:bg-theme-dark border border-gray-300 dark:border-gray-800 rounded-full py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300" 
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <input 
                    type="text" 
                    placeholder="YOUR SUBJECT" 
                    className="w-full bg-white dark:bg-theme-dark border border-gray-300 dark:border-gray-800 rounded-full py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300" 
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea 
                    placeholder="YOUR MESSAGE" 
                    rows="6" 
                    className="w-full bg-white dark:bg-theme-dark border border-gray-300 dark:border-gray-800 rounded-2xl py-4 px-6 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-yellow focus:border-theme-yellow transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button 
                    type="submit" 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-theme-yellow bg-transparent text-black dark:text-white font-bold uppercase hover:bg-theme-yellow hover:text-black transition-all duration-300"
                  >
                    <FaPaperPlane className="text-lg" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
