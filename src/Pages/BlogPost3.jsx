







import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaMobileAlt, FaDesktop, FaTabletAlt, FaCode, FaImage, FaHandPointer, FaTachometerAlt, FaVial, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const BlogPost3 = () => {
  const navigate = useNavigate();

  const practices = [
    {
      id: 1,
      icon: <FaMobileAlt className="text-theme-yellow text-2xl" />,
      title: "Mobile-First Approach",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=350&fit=crop",
      description: "Start designing for mobile devices first, then progressively enhance for larger screens. This forces content prioritization and prevents feature stripping later.",
      code: `/* Mobile First: Base styles for small screens */
.container {
  padding: 1rem;
  width: 100%;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
  }
}`,
      tips: [
        "Design for 320px minimum width as baseline",
        "Use min-width media queries (not max-width)",
        "Ensure touch targets are minimum 44×44px",
        "Prioritize content hierarchy for small screens",
        "Test on actual mobile devices, not just dev tools"
      ],
      stat: "58% of global web traffic is mobile"
    },
    {
      id: 2,
      icon: <FaLayerGroup className="text-theme-yellow text-2xl" />,
      title: "Flexible Grid Systems",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=350&fit=crop",
      description: "Modern CSS Grid and Flexbox create layouts that adapt naturally to any screen size without complex calculations or breakpoint overrides.",
      code: `/* CSS Grid: Auto-fitting cards */
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit, 
    minmax(280px, 1fr)
  );
  gap: 1.5rem;
}

/* Flexbox: Navigation that wraps */
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}`,
      tips: [
        "Use CSS Grid for 2D layouts (rows + columns)",
        "Use Flexbox for 1D layouts (single direction)",
        "Avoid fixed widths—use %, fr, or auto",
        "Implement container queries for component-level responsiveness",
        "Use gap property instead of margins for spacing"
      ],
      stat: "Grid + Flexbox reduce layout code by 60%"
    },
    {
      id: 3,
      icon: <FaDesktop className="text-theme-yellow text-2xl" />,
      title: "Fluid Typography",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=350&fit=crop",
      description: "Typography should scale smoothly between minimum and maximum values using modern CSS functions, eliminating breakpoint-based font size jumps.",
      code: `/* Fluid type using clamp() */
h1 {
  font-size: clamp(
    1.75rem,      /* minimum: 28px */
    4vw + 1rem,   /* preferred: fluid */
    3.5rem        /* maximum: 56px */
  );
}

/* Line height that adjusts */
p {
  line-height: clamp(1.5, 1.6 + 0.2vw, 1.8);
}`,
      tips: [
        "Use rem units for accessibility (respects user preferences)",
        "Clamp() requires 3 values: min, preferred, max",
        "Preferred value should use vw or % for fluidity",
        "Maintain readable line lengths: 60-75 characters",
        "Test with browser zoom up to 200%"
      ],
      stat: "Fluid type improves readability by 35%"
    },
    {
      id: 4,
      icon: <FaImage className="text-theme-yellow text-2xl" />,
      title: "Responsive Images",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=350&fit=crop",
      description: "Serve appropriately-sized images for each device to save bandwidth and improve load times without sacrificing visual quality.",
      code: `<img
  src="hero-800.webp"
  srcset="
    hero-400.webp 400w,
    hero-800.webp 800w,
    hero-1200.webp 1200w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1200px) 50vw,
    33vw
  "
  alt="Responsive hero image"
  loading="lazy"
/>`,
      tips: [
        "Use WebP/AVIF formats with JPEG fallbacks",
        "Implement lazy loading for below-fold images",
        "Use CSS aspect-ratio to prevent layout shift",
        "Art direction with <picture> element for crop changes",
        "Compress images to 80-85% quality for optimal size"
      ],
      stat: "Proper images reduce page weight by 40%"
    },
    {
      id: 5,
      icon: <FaHandPointer className="text-theme-yellow text-2xl" />,
      title: "Touch-Friendly Interactions",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=350&fit=crop",
      description: "Design for fingers, not cursors. Touch interfaces require larger targets, gesture support, and hover state alternatives.",
      code: `/* Minimum touch target size */
.btn {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

/* Remove hover effects on touch */
@media (hover: hover) {
  .btn:hover {
    background: #f0f0f0;
  }
}

/* Add active state for touch feedback */
.btn:active {
  transform: scale(0.98);
}`,
      tips: [
        "Minimum 44×44px touch targets (Apple HIG standard)",
        "Space interactive elements 8px apart minimum",
        "Replace hover dropdowns with click/tap toggles",
        "Support swipe gestures for carousels and galleries",
        "Provide haptic feedback where available"
      ],
      stat: "Touch optimization reduces errors by 50%"
    },
    {
      id: 6,
      icon: <FaTachometerAlt className="text-theme-yellow text-2xl" />,
      title: "Performance Optimization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
      description: "Responsive design must not compromise speed. Optimize assets, minimize reflows, and deliver critical content first across all breakpoints.",
      code: `/* Content-visibility for off-screen sections */
.section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

/* Critical CSS inlined, async load rest */
<link rel="preload" href="critical.css" as="style">
<link rel="stylesheet" href="critical.css">

/* Async non-critical CSS */
<link rel="preload" href="main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
      tips: [
        "Inline critical CSS in <head> for fast first paint",
        "Use content-visibility for below-fold sections",
        "Minimize layout shifts with reserved spaces",
        "Preload key resources with <link rel='preload'>",
        "Use service workers for offline functionality"
      ],
      stat: "1s delay reduces conversions by 7%"
    },
    {
      id: 7,
      icon: <FaVial className="text-theme-yellow text-2xl" />,
      title: "Testing Across Devices",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=350&fit=crop",
      description: "Real-world testing on actual devices reveals issues that emulators miss—touch responsiveness, performance, and viewport quirks.",
      code: `/* Device testing checklist */
Breakpoints to test:
├── 320px  (iPhone SE)
├── 375px  (iPhone 12/13)
├── 414px  (iPhone Max)
├── 768px  (iPad portrait)
├── 1024px (iPad landscape)
├── 1440px (Laptop)
└── 1920px (Desktop)

Orientations: portrait + landscape
Zoom levels: 100%, 150%, 200%`,
      tips: [
        "Test on real devices, not just Chrome DevTools",
        "Use BrowserStack or LambdaTest for device variety",
        "Test both portrait and landscape orientations",
        "Verify at different zoom levels (100%-200%)",
        "Check with slow 3G throttling for performance"
      ],
      stat: "Real device testing catches 3x more bugs"
    },
    {
      id: 8,
      icon: <FaCode className="text-theme-yellow text-2xl" />,
      title: "Progressive Enhancement",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop",
      description: "Build a solid foundation that works everywhere, then layer enhancements for modern browsers. This ensures accessibility for all users regardless of device capability.",
      code: `/* Base: Works everywhere */
.card {
  border: 1px solid #ddd;
  padding: 1rem;
}

/* Enhanced: Modern browsers */
@supports (display: grid) {
  .card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}

/* Advanced: Cutting edge */
@supports (container-type: inline-size) {
  .card {
    container-type: inline-size;
  }
}`,
      tips: [
        "Core functionality works without JavaScript",
        "Use @supports for feature detection",
        "Provide fallbacks for CSS Grid and Flexbox",
        "Respect prefers-reduced-motion for animations",
        "Ensure forms submit without JS enhancement"
      ],
      stat: "Progressive sites work on 99.2% of devices"
    }
  ];

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-theme-yellow transition-colors font-medium"
          >
            <FaArrowLeft /> Back to Blog
          </button>

        </div>
      </motion.nav>

      <div className="container mx-auto px-4 z-10 relative pt-24 pb-20">
        
        {/* Hero */}
        <AnimatedSection direction="up" delay={0.1} className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-full text-theme-yellow text-sm font-medium mb-6">
            <FaDesktop /> Development Guide
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
            Responsive Design <br />
            <span className="text-theme-yellow">Best Practices</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt /> May 10, 2025</span>
            <span className="flex items-center gap-2"><FaUser /> SHAHZAIB</span>
            <span className="flex items-center gap-2"><FaClock /> 15 min read</span>
          </div>

          <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full"></div>
        </AnimatedSection>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-64 md:h-96">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop" 
              alt="Responsive Design Across Devices" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Device Icons Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-8 md:gap-16 py-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
              <FaMobileAlt className="text-2xl" />
              <span className="text-xs font-medium">Mobile</span>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
              <FaTabletAlt className="text-2xl" />
              <span className="text-xs font-medium">Tablet</span>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
              <FaDesktop className="text-2xl" />
              <span className="text-xs font-medium">Desktop</span>
            </div>
          </div>
        </motion.div>

        {/* Intro */}
        <AnimatedSection direction="up" delay={0.3} className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-theme-yellow/5 to-theme-yellow/5 dark:from-theme-yellow/10 dark:to-theme-yellow/10 border-l-4 border-theme-yellow p-6 md:p-8 rounded-r-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              In today's multi-device world, responsive design is <span className="text-theme-yellow font-semibold">non-negotiable</span>. 
              With over 58% of traffic coming from mobile devices, your site must adapt flawlessly to any screen. 
              This guide covers battle-tested techniques—from mobile-first strategy to performance optimization—that professional developers use daily.
            </p>
          </div>
        </AnimatedSection>

        {/* Practices */}
        <div className="max-w-6xl mx-auto space-y-24">
          {practices.map((practice, index) => (
            <motion.article
              key={practice.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Section Number - FIXED POSITIONING */}
              <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 bg-theme-yellow text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold shadow-lg z-10 border-4 border-white dark:border-gray-950">
                {practice.id}
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 ml-2 md:ml-4">
                  <div className="p-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-lg">
                    {practice.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold uppercase">{practice.title}</h2>
                </div>

                {/* Main Content Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? '' : ''}`}>
                  
                  {/* Image + Stat - FIXED HEIGHT */}
                  <motion.div 
                    className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background decoration - same height as image container */}
                    <div className="absolute inset-0 bg-theme-yellow/20 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300 h-56 md:h-72"></div>
                    
                    {/* Image container with fixed height */}
                    <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={practice.image} 
                        alt={practice.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                        <FaCheckCircle className="text-theme-yellow" /> {practice.stat}
                      </div>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                      {practice.description}
                    </p>

                    {/* Code Block */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-6 shadow-lg">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-gray-400 font-mono">example.css</span>
                      </div>
                      <pre className="p-4 overflow-x-auto max-h-48">
                        <code className="text-sm text-gray-300 font-mono whitespace-pre">
                          {practice.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Tips Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-2 md:ml-4">
                  {practice.tips.map((tip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-theme-yellow/50 transition-colors"
                    >
                      <FaCheckCircle className="text-theme-yellow shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Summary Checklist */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-5xl mx-auto mt-24 mb-16">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <FaDesktop className="text-theme-yellow text-3xl" />
                <h3 className="text-2xl md:text-3xl font-bold uppercase">Responsive Checklist</h3>
              </div>
              
              <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Before shipping any project, verify these essentials are in place:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  "Tested on real mobile devices",
                  "Images optimized with srcset",
                  "Touch targets 44×44px minimum",
                  "Fluid typography with clamp()",
                  "Core functionality works without JS",
                  "Lighthouse score 90+ on mobile",
                  "No horizontal scroll at any width",
                  "Respects prefers-reduced-motion"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg"
                  >
                    <span className="text-theme-yellow font-bold">✓</span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto text-center">
          <div className="bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 rounded-2xl p-8 md:p-12">
            <FaMobileAlt className="text-theme-yellow text-4xl mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Build for Everyone</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Responsive design isn't a feature—it's a mindset. Every decision should consider the full spectrum of devices, 
              connections, and abilities your users bring. Ship inclusive experiences that work for all.
            </p>
            <button 
              onClick={() => navigate('/blog')}
              className="px-8 py-3 bg-theme-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
            >
              <FaArrowLeft /> Explore More Articles
            </button>
          </div>
        </AnimatedSection>

        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default BlogPost3;