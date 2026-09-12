import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-theme-dark z-[999] flex flex-col items-center justify-center"
    >
      {/* Elegant Loading Spinner */}
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-gray-800 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-20 h-20 border-4 border-theme-yellow border-t-transparent rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute top-2 left-2 w-16 h-16 border-4 border-gray-700 border-r-transparent rounded-full"
        />
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider"
      >
        SHAHZAI<span className="text-theme-yellow">B</span>
      </motion.h1>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            className="h-full bg-theme-yellow"
          />
        </div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 text-sm tracking-widest uppercase"
      >
        Full Stack Developer
      </motion.p>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-theme-yellow/20 to-transparent" />
      <div className="absolute bottom-1/4 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-theme-yellow/20 to-transparent" />
    </motion.div>
  );
};

export default Preloader;;