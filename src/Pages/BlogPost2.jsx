// import React from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from '../components/AnimatedSection';

// const BlogPost2 = () => {
//   return (
//     <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
//       <div className="container mx-auto px-4 z-10 relative pt-32">
//         <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-center">
//             Top 10 Web Design <span className="text-theme-yellow">Trends for 2024</span>
//           </h1>
//           <div className="text-sm text-gray-500 mb-8 text-center">Dec 15, 2023</div>
          
//           {/* Featured Image */}
//           <div className="mb-12">
//             <img 
//               src="https://picsum.photos/seed/design-trends/800/400" 
//               alt="Web Design Trends 2024" 
//               className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           <div className="prose prose-lg dark:prose-invert max-w-none">
//               <p className="text-xl mb-6">
//                 As we move into 2024, web design continues to evolve with new technologies, user expectations, and creative innovations. Here are the top 10 web design trends that will shape the digital landscape this year.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">1. AI-Powered Design</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <p className="mb-4">
//                   Artificial Intelligence is revolutionizing web design with tools that can generate layouts, suggest color palettes, and even create entire websites. AI assistants are becoming indispensable for designers, helping to streamline workflows and spark creativity.
//                 </p>
//                 <img src="https://picsum.photos/seed/ai-design/400/250" alt="AI-Powered Design" className="rounded-lg shadow-md" />
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">2. Dark Mode Everywhere</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <img src="https://picsum.photos/seed/dark-mode/400/250" alt="Dark Mode Design" className="rounded-lg shadow-md" />
//                 <p className="mb-4">
//                   Dark mode has moved beyond being a nice-to-have feature to an essential design element. With improved battery life on OLED screens and reduced eye strain, dark mode is now a standard expectation for modern web applications.
//                 </p>
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">3. Micro-Interactions</h2>
//               <p className="mb-4">
//                 Subtle animations and micro-interactions are becoming more sophisticated. These small details enhance user experience by providing feedback, guiding users, and adding personality to interfaces.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">4. 3D Elements and WebGL</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <p className="mb-4">
//                   Three-dimensional elements are breaking the flat design paradigm. WebGL and CSS 3D transforms allow for immersive experiences that were previously only possible in native applications.
//                 </p>
//                 <img src="https://picsum.photos/seed/3d-elements/400/250" alt="3D Elements" className="rounded-lg shadow-md" />
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">5. Glassmorphism</h2>
//               <p className="mb-4">
//                 The frosted glass effect continues to evolve, creating depth and layering in web interfaces. This trend combines transparency, blur effects, and subtle shadows for a modern, layered aesthetic.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">6. Variable Fonts</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <img src="https://picsum.photos/seed/variable-fonts/400/250" alt="Variable Fonts" className="rounded-lg shadow-md" />
//                 <p className="mb-4">
//                   Variable fonts offer unprecedented typographic flexibility. A single font file can contain multiple weights, widths, and styles, allowing for smoother animations and more responsive typography.
//                 </p>
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">7. Inclusive Design</h2>
//               <p className="mb-4">
//                 Accessibility is no longer optional. Inclusive design principles are becoming mainstream, with websites designed to work for everyone, regardless of ability or device.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">8. Minimalist Navigation</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <p className="mb-4">
//                   Navigation patterns are becoming more intuitive and less cluttered. Hamburger menus are evolving, and new patterns like mega menus and sticky navigation are gaining popularity.
//                 </p>
//                 <img src="https://picsum.photos/seed/navigation/400/250" alt="Minimalist Navigation" className="rounded-lg shadow-md" />
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">9. Voice User Interfaces</h2>
//               <p className="mb-4">
//                 As voice assistants become more prevalent, web designers are incorporating voice interactions into their designs. This includes voice search, voice commands, and voice-guided experiences.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">10. Sustainable Web Design</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <img src="https://picsum.photos/seed/sustainable/400/250" alt="Sustainable Design" className="rounded-lg shadow-md" />
//                 <p className="mb-4">
//                   Environmental consciousness is extending to web design. Sustainable practices include optimizing images, reducing JavaScript bloat, and choosing energy-efficient hosting solutions.
//                 </p>
//               </div>

//               <p className="text-lg font-semibold mt-8">
//                 These trends represent the cutting edge of web design for 2024. While not every trend will be appropriate for every project, staying informed about these developments will help you create more effective and future-proof websites.
//               </p>
//           </div>
//         </AnimatedSection>
//         <div className="pb-20"></div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost2;









import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaFire, FaRobot, FaMoon, FaHandPointer, FaCube, FaWater, FaFont, FaUniversalAccess, FaCompass, FaMicrophone, FaLeaf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const BlogPost2 = () => {
  const navigate = useNavigate();

  const trends = [
    {
      id: 1,
      icon: <FaRobot className="text-theme-yellow text-2xl" />,
      title: "AI-Powered Design",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=350&fit=crop",
      description: "Artificial Intelligence is revolutionizing web design with tools that generate layouts, suggest color palettes, and even create entire websites from prompts.",
      details: [
        "AI tools like Midjourney and DALL-E for custom imagery",
        "Generative UI tools that create layouts from wireframes",
        "Smart content personalization based on user behavior",
        "Automated A/B testing with AI-driven insights"
      ],
      stat: "73% of designers now use AI tools weekly"
    },
    {
      id: 2,
      icon: <FaMoon className="text-theme-yellow text-2xl" />,
      title: "Dark Mode Everywhere",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop",
      description: "Dark mode has moved beyond a nice-to-have to an essential feature. With OLED battery savings and reduced eye strain, it's now a standard expectation.",
      details: [
        "System preference detection with seamless toggling",
        "Careful color desaturation to prevent vibrancy issues",
        "Elevated surfaces using lighter darks instead of pure black",
        "Consistent contrast ratios across both themes"
      ],
      stat: "82% of users prefer apps with dark mode option"
    },
    {
      id: 3,
      icon: <FaHandPointer className="text-theme-yellow text-2xl" />,
      title: "Micro-Interactions",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=350&fit=crop",
      description: "Subtle animations and feedback loops that guide users, provide status updates, and add delightful personality to interfaces.",
      details: [
        "Button state changes with satisfying haptic feedback",
        "Loading skeletons that mimic content structure",
        "Success animations that confirm user actions",
        "Cursor followers and magnetic button effects"
      ],
      stat: "Micro-interactions increase engagement by 40%"
    },
    {
      id: 4,
      icon: <FaCube className="text-theme-yellow text-2xl" />,
      title: "3D Elements & WebGL",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=350&fit=crop",
      description: "Three-dimensional elements are breaking the flat design paradigm with immersive experiences powered by WebGL and CSS 3D transforms.",
      details: [
        "Three.js and React Three Fiber for 3D scenes",
        "Interactive product viewers with 360° rotation",
        "Parallax depth effects with layered backgrounds",
        "Lightweight 3D icons using Spline tool"
      ],
      stat: "3D product views increase conversions by 27%"
    },
    {
      id: 5,
      icon: <FaWater className="text-theme-yellow text-2xl" />,
      title: "Glassmorphism 2.0",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=350&fit=crop",
      description: "The frosted glass effect evolves with animated gradients, noise textures, and dynamic blur that responds to user interaction.",
      details: [
        "Backdrop-filter with animated gradient borders",
        "Noise overlays for tactile texture feel",
        "Depth layering with multiple glass panels",
        "Interactive glass that reacts to cursor movement"
      ],
      stat: "Glassmorphism usage grew 60% in 2025"
    },
    {
      id: 6,
      icon: <FaFont className="text-theme-yellow text-2xl" />,
      title: "Variable Fonts & Kinetic Type",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=350&fit=crop",
      description: "Variable fonts offer unprecedented flexibility—one file contains multiple weights, widths, and styles for fluid, animated typography.",
      details: [
        "Fluid typography using CSS clamp() and vw units",
        "Animated font-weight transitions on scroll",
        "Text path animations along SVG curves",
        "Variable font axes for custom brand expression"
      ],
      stat: "Variable fonts reduce file sizes by up to 90%"
    },
    {
      id: 7,
      icon: <FaUniversalAccess className="text-theme-yellow text-2xl" />,
      title: "Inclusive by Default",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=350&fit=crop",
      description: "Accessibility is no longer optional—it's a fundamental design requirement that improves experience for all users, not just those with disabilities.",
      details: [
        "WCAG 2.2 AA compliance as baseline standard",
        "Focus indicators that are visible and stylish",
        "Screen reader optimized content structures",
        "Keyboard navigation for all interactive elements"
      ],
      stat: "Accessible sites reach 15% more potential users"
    },
    {
      id: 8,
      icon: <FaCompass className="text-theme-yellow text-2xl" />,
      title: "Minimalist Navigation",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=350&fit=crop",
      description: "Navigation patterns are becoming more intuitive with hidden menus, context-aware options, and gesture-based controls.",
      details: [
        "Bottom navigation bars for thumb-friendly mobile use",
        "Contextual menus that appear based on scroll position",
        "Gesture-based navigation on touch devices",
        "Command palettes (Cmd+K) for power users"
      ],
      stat: "Simplified nav reduces bounce rate by 23%"
    },
    {
      id: 9,
      icon: <FaMicrophone className="text-theme-yellow text-2xl" />,
      title: "Voice & Conversational UI",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=350&fit=crop",
      description: "Voice assistants are becoming integral to web experiences with voice search, commands, and AI-powered conversational interfaces.",
      details: [
        "Voice search optimization for natural language queries",
        "Speech-to-text input fields with visual feedback",
        "AI chatbots with contextual understanding",
        "Voice navigation for hands-free browsing"
      ],
      stat: "50% of searches will be voice-based by 2025"
    },
    {
      id: 10,
      icon: <FaLeaf className="text-theme-yellow text-2xl" />,
      title: "Sustainable Web Design",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=350&fit=crop",
      description: "Environmental consciousness extends to digital—optimizing performance, reducing data transfer, and choosing green hosting solutions.",
      details: [
        "Image optimization with next-gen formats (AVIF, WebP)",
        "Carbon-aware design that adapts to energy grid",
        "Minimal JavaScript with progressive enhancement",
        "Green hosting powered by renewable energy"
      ],
      stat: "The internet produces 3.7% of global CO2 emissions"
    }
  ];

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
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
            <FaFire /> Trending Now
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
            Top 10 Web Design <br />
            <span className="text-theme-yellow">Trends for 2024</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt /> Feb 25, 2025</span>
            <span className="flex items-center gap-2"><FaUser /> SHAHZAIB</span>
            <span className="flex items-center gap-2"><FaClock /> 12 min read</span>
          </div>

          <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full"></div>
        </AnimatedSection>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-theme-yellow/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop" 
            alt="2024 Web Design Trends" 
            className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Intro */}
        <AnimatedSection direction="up" delay={0.3} className="max-w-4xl mx-auto mb-20">
          <div className="bg-theme-yellow/5 dark:bg-theme-yellow/10 border-l-4 border-theme-yellow p-6 md:p-8 rounded-r-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              As we move into 2024, web design continues to evolve at breakneck speed. From <span className="text-theme-yellow font-semibold">AI-generated interfaces</span> to 
              <span className="text-theme-yellow font-semibold"> sustainable design practices</span>, these trends will define the digital landscape. 
              Stay ahead of the curve with this comprehensive guide to what's next.
            </p>
          </div>
        </AnimatedSection>

        {/* Trends Grid */}
        <div className="max-w-6xl mx-auto space-y-16">
          {trends.map((trend, index) => (
            <motion.article
              key={trend.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Trend Number Badge */}
              <div className="absolute -left-4 md:-left-8 top-0 w-12 h-12 md:w-16 md:h-16 bg-theme-yellow text-black rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg z-10">
                {trend.id}
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ml-8 md:ml-12 ${index % 2 === 1 ? '' : ''}`}>
                
                {/* Image */}
                <motion.div 
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-theme-yellow/20 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                  <img 
                    src={trend.image} 
                    alt={trend.title}
                    className="relative w-full h-56 md:h-72 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <FaFire className="text-theme-yellow" /> {trend.stat}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-lg">
                      {trend.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase">{trend.title}</h2>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    {trend.description}
                  </p>

                  <ul className="space-y-3">
                    {trend.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-5 h-5 bg-theme-yellow/20 text-theme-yellow rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Summary Section */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-5xl mx-auto mt-24 mb-16">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <FaFire className="text-theme-yellow text-4xl mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">The Future is Now</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                These trends aren't predictions—they're already here. The designers who adopt them thoughtfully will create experiences that feel 
                modern, accessible, and delightful. Which trend will you implement first?
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { label: "AI Tools", value: "73%" },
                  { label: "Dark Mode", value: "82%" },
                  { label: "Micro-Interactions", value: "+40%" },
                  { label: "3D Elements", value: "+27%" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-theme-yellow">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto text-center">
          <div className="bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Trends come and go, but great design principles endure. Apply these trends with purpose, 
              always keeping your users' needs at the center of every decision.
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

export default BlogPost2;