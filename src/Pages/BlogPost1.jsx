// import React from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from '../components/AnimatedSection';

// const BlogPost1 = () => {
//   return (
//     <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
//       <div className="container mx-auto px-4 z-10 relative pt-32">
//         <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-center">
//             How to Create a <span className="text-theme-yellow">Portfolio Website</span>
//           </h1>
//           <div className="text-sm text-gray-500 mb-8 text-center">Dec 19, 2023</div>
          
//           {/* Featured Image */}
//           <div className="mb-12">
//             <img 
//               src="https://picsum.photos/seed/portfolio-hero/800/400" 
//               alt="Portfolio Website Creation" 
//               className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           <div className="prose prose-lg dark:prose-invert max-w-none">
//               <p className="text-xl mb-6">
//                 Creating a portfolio website is essential for showcasing your work and attracting potential clients or employers. In this comprehensive guide, we'll walk through the essential steps and tools needed to build a stunning portfolio that effectively represents your skills and projects.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">1. Planning Your Portfolio</h2>
//               <p className="mb-4">
//                 Before diving into coding, take time to plan your portfolio's structure and content. Consider what you want to showcase and who your target audience is.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <img src="https://picsum.photos/seed/planning/400/250" alt="Planning Process" className="rounded-lg shadow-md" />
//                 <ul className="list-disc pl-6 space-y-2">
//                   <li>Identify your best projects and skills</li>
//                   <li>Define your target audience (clients, employers, collaborators)</li>
//                   <li>Choose a design style that reflects your personality</li>
//                   <li>Plan the site structure and navigation</li>
//                 </ul>
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">2. Choosing the Right Tools</h2>
//               <p className="mb-4">
//                 Selecting the appropriate tools and technologies is crucial for creating an effective portfolio website.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Frontend Frameworks</h3>
//                   <p className="mb-4">
//                     Modern frameworks like React, Vue.js, or Angular provide the foundation for interactive and dynamic portfolios. React is particularly popular for its component-based architecture and vast ecosystem.
//                   </p>
//                 </div>
//                 <img src="https://picsum.photos/seed/frameworks/400/250" alt="Frontend Frameworks" className="rounded-lg shadow-md" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Styling Solutions</h3>
//               <p className="mb-4">
//                 CSS frameworks like Tailwind CSS or Bootstrap can speed up development, while custom CSS gives you complete control over the design.
//               </p>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">3. Essential Features</h2>
//               <p className="mb-4">
//                 A great portfolio website should include several key features to effectively showcase your work.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <ul className="list-disc pl-6 space-y-2">
//                   <li><strong>Hero Section:</strong> A compelling introduction with your name and key skills</li>
//                   <li><strong>About Section:</strong> Tell your story and background</li>
//                   <li><strong>Projects Gallery:</strong> Showcase your work with images and descriptions</li>
//                   <li><strong>Contact Form:</strong> Make it easy for visitors to reach you</li>
//                   <li><strong>Responsive Design:</strong> Ensure it looks great on all devices</li>
//                 </ul>
//                 <img src="https://picsum.photos/seed/features/400/250" alt="Portfolio Features" className="rounded-lg shadow-md" />
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">4. Best Practices</h2>
//               <p className="mb-4">
//                 Follow these best practices to create a portfolio that stands out.
//               </p>
//               <ul className="list-disc pl-6 mb-6">
//                 <li>Keep it simple and focused on your work</li>
//                 <li>Use high-quality images and media</li>
//                 <li>Optimize for performance and loading speed</li>
//                 <li>Include clear calls-to-action</li>
//                 <li>Regularly update with new projects</li>
//               </ul>

//               <h2 className="text-2xl font-bold mb-4 text-theme-yellow">5. Deployment and Maintenance</h2>
//               <p className="mb-4">
//                 Once your portfolio is built, you need to deploy it and keep it maintained.
//               </p>
//               <p className="mb-4">
//                 Popular hosting platforms include Vercel, Netlify, and GitHub Pages. Choose one that fits your needs and budget. Remember to regularly update your portfolio with new projects and keep your contact information current.
//               </p>

//               <p className="text-lg font-semibold">
//                 Building a portfolio website is an investment in your career. Take the time to create something you're proud of, and it will pay dividends in opportunities and connections.
//               </p>
//           </div>
//         </AnimatedSection>
//         <div className="pb-20"></div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost1;


import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaLightbulb, FaCode, FaRocket, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const BlogPost1 = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      icon: <FaLightbulb className="text-theme-yellow text-2xl" />,
      title: "Planning Your Portfolio",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=350&fit=crop",
      content: "Before writing a single line of code, strategic planning is essential. Your portfolio is your digital first impression—it needs to tell your story, showcase your expertise, and convert visitors into opportunities. Start by auditing your best work, defining your personal brand, and understanding your target audience. Are you targeting startups, enterprise clients, or creative agencies? Each requires a different approach.",
      tips: [
        "Audit your top 5-8 projects with measurable results",
        "Define your unique value proposition (UVP)",
        "Create user personas for your ideal clients/employers",
        "Map out a content hierarchy that guides visitors"
      ]
    },
    {
      icon: <FaTools className="text-theme-yellow text-2xl" />,
      title: "Choosing the Right Tech Stack",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=350&fit=crop",
      content: "Your technology choices impact performance, maintainability, and how quickly you can iterate. For modern portfolios, a React-based stack with Tailwind CSS offers the perfect balance of flexibility and speed. Consider static site generators like Next.js or Astro for optimal performance and SEO benefits.",
      techStack: [
        { name: "React / Next.js", desc: "Component-based architecture with SSR/SSG" },
        { name: "Tailwind CSS", desc: "Utility-first styling for rapid custom designs" },
        { name: "Framer Motion", desc: "Production-ready animations and gestures" },
        { name: "Vercel / Netlify", desc: "Edge deployment with instant previews" }
      ]
    },
    {
      icon: <FaCode className="text-theme-yellow text-2xl" />,
      title: "Essential Features & Structure",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop",
      content: "A high-converting portfolio follows a proven structure. Each section serves a specific purpose in guiding visitors from introduction to action. The hero section must grab attention within 3 seconds—use a compelling headline, dynamic visuals, and a clear call-to-action.",
      features: [
        { title: "Hero Section", desc: "Animated intro with typewriter effect or 3D element" },
        { title: "About Section", desc: "Personal story + stats (years, projects, clients)" },
        { title: "Projects Gallery", desc: "Filterable grid with live demos and case studies" },
        { title: "Skills Matrix", desc: "Animated progress bars with tech icons" },
        { title: "Testimonials", desc: "Social proof with client photos and results" },
        { title: "Blog Section", desc: "Demonstrate expertise through content" }
      ]
    },
    {
      icon: <FaRocket className="text-theme-yellow text-2xl" />,
      title: "Design & Animation Best Practices",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=350&fit=crop",
      content: "Micro-interactions and thoughtful animations transform a static site into a memorable experience. Use scroll-triggered reveals for content sections, hover effects on project cards, and smooth page transitions. But remember: animations should enhance, not distract.",
      practices: [
        "Implement dark/light mode toggle with system preference detection",
        "Use scroll progress indicators for long pages",
        "Add magnetic button effects and cursor followers",
        "Create parallax depth with layered backgrounds",
        "Ensure all animations respect prefers-reduced-motion"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      {/* Navigation Bar */}
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
        
        {/* Hero Header */}
        <AnimatedSection direction="up" delay={0.1} className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-full text-theme-yellow text-sm font-medium mb-6">
            <FaLightbulb /> Web Design Guide
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
            How to Create a <br />
            <span className="text-theme-yellow">Portfolio Website</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt /> Dec 19, 2024</span>
            <span className="flex items-center gap-2"><FaUser /> SHAHZAIB</span>
            <span className="flex items-center gap-2"><FaClock /> 8 min read</span>
          </div>

          <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full"></div>
        </AnimatedSection>

        {/* Featured Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-theme-yellow/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop" 
            alt="Modern Portfolio Website Design" 
            className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Introduction */}
        <AnimatedSection direction="up" delay={0.3} className="max-w-4xl mx-auto mb-20">
          <div className="border-l-4 border-theme-yellow p-6 md:p-8 rounded-r-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Your portfolio is more than a collection of projects—it's your <span className="text-theme-yellow font-semibold">personal brand statement</span>. 
              In a competitive market, a well-crafted portfolio can be the difference between landing your dream job and being overlooked. 
              This guide covers everything from strategic planning to deployment, with real-world examples and actionable tips.
            </p>
          </div>
        </AnimatedSection>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto space-y-24">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                  {index + 1}. {section.title}
                </h2>
              </div>

              {/* Alternating Layout */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image */}
                <motion.div 
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-theme-yellow/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {section.title}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>

                  {/* Tips / List */}
                  {section.tips && (
                    <ul className="space-y-3">
                      {section.tips.map((tip, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-6 h-6 bg-theme-yellow text-black rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {section.techStack && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.techStack.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 rounded-xl hover:border-theme-yellow transition-colors"
                        >
                          <h4 className="font-bold text-theme-yellow mb-1">{tech.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {section.features && (
                    <div className="space-y-4">
                      {section.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-theme-yellow/50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-theme-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-theme-yellow font-bold text-sm">{i + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {section.practices && (
                    <div className="grid grid-cols-1 gap-3">
                      {section.practices.map((practice, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-3 p-3 bg-theme-yellow/5 dark:bg-theme-yellow/10 rounded-lg border-l-3 border-theme-yellow"
                        >
                          <div className="w-2 h-2 bg-theme-yellow rounded-full shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{practice}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Deployment Section */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-5xl mx-auto mt-24 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaRocket className="text-theme-yellow text-3xl" />
                <h2 className="text-2xl md:text-3xl font-bold uppercase">Deployment & Launch</h2>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg">
                Ready to go live? Choose a platform that offers speed, reliability, and developer experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Vercel", desc: "Best for Next.js/React with edge functions", color: "bg-black" },
                  { name: "Netlify", desc: "Great for JAMstack with form handling", color: "bg-teal-600" },
                  { name: "GitHub Pages", desc: "Simple hosting for static sites", color: "bg-gray-700" }
                ].map((platform, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`${platform.color} p-6 rounded-xl text-center`}
                  >
                    <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                    <p className="text-sm text-gray-300">{platform.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto text-center">
          <div className="bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 rounded-2xl p-8 md:p-12">
            <FaLightbulb className="text-theme-yellow text-4xl mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build?</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Your portfolio is a living project. Start with an MVP, gather feedback, and iterate. 
              The best portfolios aren't built overnight—they evolve with your career.
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

export default BlogPost1;