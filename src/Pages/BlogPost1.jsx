
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaLightbulb, FaCode, FaRocket, FaTools } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import AnimatedSection from '../components/AnimatedSection';

// const BlogPost1 = () => {
//   const navigate = useNavigate();

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   const sections = [
//     {
//       icon: <FaLightbulb className="text-theme-yellow text-2xl" />,
//       title: "Planning Your Portfolio",
//       image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=350&fit=crop",
//       content: "Before writing a single line of code, strategic planning is essential. Your portfolio is your digital first impression—it needs to tell your story, showcase your expertise, and convert visitors into opportunities. Start by auditing your best work, defining your personal brand, and understanding your target audience. Are you targeting startups, enterprise clients, or creative agencies? Each requires a different approach.",
//       tips: [
//         "Audit your top 5-8 projects with measurable results",
//         "Define your unique value proposition (UVP)",
//         "Create user personas for your ideal clients/employers",
//         "Map out a content hierarchy that guides visitors"
//       ]
//     },
//     {
//       icon: <FaTools className="text-theme-yellow text-2xl" />,
//       title: "Choosing the Right Tech Stack",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=350&fit=crop",
//       content: "Your technology choices impact performance, maintainability, and how quickly you can iterate. For modern portfolios, a React-based stack with Tailwind CSS offers the perfect balance of flexibility and speed. Consider static site generators like Next.js or Astro for optimal performance and SEO benefits.",
//       techStack: [
//         { name: "React / Next.js", desc: "Component-based architecture with SSR/SSG" },
//         { name: "Tailwind CSS", desc: "Utility-first styling for rapid custom designs" },
//         { name: "Framer Motion", desc: "Production-ready animations and gestures" },
//         { name: "Vercel / Netlify", desc: "Edge deployment with instant previews" }
//       ]
//     },
//     {
//       icon: <FaCode className="text-theme-yellow text-2xl" />,
//       title: "Essential Features & Structure",
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop",
//       content: "A high-converting portfolio follows a proven structure. Each section serves a specific purpose in guiding visitors from introduction to action. The hero section must grab attention within 3 seconds—use a compelling headline, dynamic visuals, and a clear call-to-action.",
//       features: [
//         { title: "Hero Section", desc: "Animated intro with typewriter effect or 3D element" },
//         { title: "About Section", desc: "Personal story + stats (years, projects, clients)" },
//         { title: "Projects Gallery", desc: "Filterable grid with live demos and case studies" },
//         { title: "Skills Matrix", desc: "Animated progress bars with tech icons" },
//         { title: "Testimonials", desc: "Social proof with client photos and results" },
//         { title: "Blog Section", desc: "Demonstrate expertise through content" }
//       ]
//     },
//     {
//       icon: <FaRocket className="text-theme-yellow text-2xl" />,
//       title: "Design & Animation Best Practices",
//       image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=350&fit=crop",
//       content: "Micro-interactions and thoughtful animations transform a static site into a memorable experience. Use scroll-triggered reveals for content sections, hover effects on project cards, and smooth page transitions. But remember: animations should enhance, not distract.",
//       practices: [
//         "Implement dark/light mode toggle with system preference detection",
//         "Use scroll progress indicators for long pages",
//         "Add magnetic button effects and cursor followers",
//         "Create parallax depth with layered backgrounds",
//         "Ensure all animations respect prefers-reduced-motion"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
//       {/* Navigation Bar */}
//       <motion.nav 
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
//       >
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <button 
//             onClick={() => navigate('/blog')}
//             className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-theme-yellow transition-colors font-medium"
//           >
//             <FaArrowLeft /> Back to Blog
//           </button>

//         </div>
//       </motion.nav>

//       <div className="container mx-auto px-4 z-10 relative pt-24 pb-20">
        
//         {/* Hero Header */}
//         <AnimatedSection direction="up" delay={0.1} className="max-w-5xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-full text-theme-yellow text-sm font-medium mb-6">
//             <FaLightbulb /> Web Design Guide
//           </div>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
//             How to Create a <br />
//             <span className="text-theme-yellow">Portfolio Website</span>
//           </h1>
          
//           <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
//             <span className="flex items-center gap-2"><FaCalendarAlt /> Dec 19, 2024</span>
//             <span className="flex items-center gap-2"><FaUser /> SHAHZAIB</span>
//             <span className="flex items-center gap-2"><FaClock /> 8 min read</span>
//           </div>

//           <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full"></div>
//         </AnimatedSection>

//         {/* Featured Hero Image */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-theme-yellow/10"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop" 
//             alt="Modern Portfolio Website Design" 
//             className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
//           />
//         </motion.div>

//         {/* Introduction */}
//         <AnimatedSection direction="up" delay={0.3} className="max-w-4xl mx-auto mb-20">
//           <div className="border-l-4 border-theme-yellow p-6 md:p-8 rounded-r-xl">
//             <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
//               Your portfolio is more than a collection of projects—it's your <span className="text-theme-yellow font-semibold">personal brand statement</span>. 
//               In a competitive market, a well-crafted portfolio can be the difference between landing your dream job and being overlooked. 
//               This guide covers everything from strategic planning to deployment, with real-world examples and actionable tips.
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Content Sections */}
//         <div className="max-w-5xl mx-auto space-y-24">
//           {sections.map((section, index) => (
//             <motion.section
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="relative"
//             >
//               {/* Section Header */}
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-3 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-xl">
//                   {section.icon}
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold uppercase">
//                   {index + 1}. {section.title}
//                 </h2>
//               </div>

//               {/* Alternating Layout */}
//               <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
//                 {/* Image */}
//                 <motion.div 
//                   className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="absolute inset-0 bg-theme-yellow/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//                   <img 
//                     src={section.image} 
//                     alt={section.title}
//                     className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
//                   />
//                   <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
//                     {section.title}
//                   </div>
//                 </motion.div>

//                 {/* Content */}
//                 <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
//                     {section.content}
//                   </p>

//                   {/* Tips / List */}
//                   {section.tips && (
//                     <ul className="space-y-3">
//                       {section.tips.map((tip, i) => (
//                         <motion.li 
//                           key={i}
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.1 }}
//                           className="flex items-start gap-3"
//                         >
//                           <span className="w-6 h-6 bg-theme-yellow text-black rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
//                             {i + 1}
//                           </span>
//                           <span className="text-gray-600 dark:text-gray-400">{tip}</span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   )}

//                   {section.techStack && (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {section.techStack.map((tech, i) => (
//                         <motion.div
//                           key={i}
//                           whileHover={{ scale: 1.05, y: -5 }}
//                           className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 rounded-xl hover:border-theme-yellow transition-colors"
//                         >
//                           <h4 className="font-bold text-theme-yellow mb-1">{tech.name}</h4>
//                           <p className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {section.features && (
//                     <div className="space-y-4">
//                       {section.features.map((feature, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.1 }}
//                           className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-theme-yellow/50 transition-colors"
//                         >
//                           <div className="w-10 h-10 bg-theme-yellow/10 rounded-lg flex items-center justify-center shrink-0">
//                             <span className="text-theme-yellow font-bold text-sm">{i + 1}</span>
//                           </div>
//                           <div>
//                             <h4 className="font-semibold mb-1">{feature.title}</h4>
//                             <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}

//                   {section.practices && (
//                     <div className="grid grid-cols-1 gap-3">
//                       {section.practices.map((practice, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           whileInView={{ opacity: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.08 }}
//                           className="flex items-center gap-3 p-3 bg-theme-yellow/5 dark:bg-theme-yellow/10 rounded-lg border-l-3 border-theme-yellow"
//                         >
//                           <div className="w-2 h-2 bg-theme-yellow rounded-full shrink-0"></div>
//                           <span className="text-gray-700 dark:text-gray-300 text-sm">{practice}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </motion.section>
//           ))}
//         </div>

//         {/* Deployment Section */}
//         <AnimatedSection direction="up" delay={0.2} className="max-w-5xl mx-auto mt-24 mb-16">
//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl"></div>
            
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <FaRocket className="text-theme-yellow text-3xl" />
//                 <h2 className="text-2xl md:text-3xl font-bold uppercase">Deployment & Launch</h2>
//               </div>
              
//               <p className="text-gray-300 mb-8 text-lg">
//                 Ready to go live? Choose a platform that offers speed, reliability, and developer experience.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   { name: "Vercel", desc: "Best for Next.js/React with edge functions", color: "bg-black" },
//                   { name: "Netlify", desc: "Great for JAMstack with form handling", color: "bg-teal-600" },
//                   { name: "GitHub Pages", desc: "Simple hosting for static sites", color: "bg-gray-700" }
//                 ].map((platform, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -5 }}
//                     className={`${platform.color} p-6 rounded-xl text-center`}
//                   >
//                     <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
//                     <p className="text-sm text-gray-300">{platform.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Conclusion */}
//         <AnimatedSection direction="up" delay={0.2} className="max-w-4xl mx-auto text-center">
//           <div className="bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 rounded-2xl p-8 md:p-12">
//             <FaLightbulb className="text-theme-yellow text-4xl mx-auto mb-6" />
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build?</h3>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
//               Your portfolio is a living project. Start with an MVP, gather feedback, and iterate. 
//               The best portfolios aren't built overnight—they evolve with your career.
//             </p>
//             <button
//               onClick={() => navigate('/#blog')}
//               className="px-8 py-3 bg-theme-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
//             >
//               <FaArrowLeft /> Explore More Articles
//             </button>
//           </div>
//         </AnimatedSection>

//         <div className="pb-20"></div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost1;

import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaLightbulb,
  FaRobot,
  FaCode,
  FaTools,
  FaRocket,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const BlogPost1 = () => {
  const navigate = useNavigate();

  const sections = [
    {
      icon: <FaLightbulb className="text-theme-yellow text-2xl" />,
      title: "What Is an AI Agent?",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=550&fit=crop",
      content:
        "An AI agent is more than a chatbot that generates text. An agent can understand a goal, reason about the task, decide what actions are required, use external tools, access application data, and return a meaningful result. This makes agents especially useful for applications that need automation, decision-making, and interaction with real-world systems.",
      points: [
        "Understand the user's request and intent",
        "Reason about the task before responding",
        "Use tools and external APIs when required",
        "Access application or database information",
        "Perform multi-step workflows",
        "Return useful and explainable results",
      ],
    },

    {
      icon: <FaBrain className="text-theme-yellow text-2xl" />,
      title: "Choose the Right AI Model",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=550&fit=crop",
      content:
        "The first technical decision is selecting an AI model that matches your application's requirements. Claude can be integrated into applications through an API and used for reasoning, content generation, structured responses, coding assistance, and agent-style workflows.",
      techStack: [
        {
          name: "Claude API",
          desc: "Connect your application to Claude's language models",
        },
        {
          name: "Node.js",
          desc: "Create the backend service responsible for AI requests",
        },
        {
          name: "Express.js",
          desc: "Expose secure REST endpoints for your frontend",
        },
        {
          name: "React",
          desc: "Build the interactive AI assistant interface",
        },
        {
          name: "MongoDB",
          desc: "Store conversations, users, tasks, and application data",
        },
        {
          name: "Axios",
          desc: "Communicate between the React frontend and backend",
        },
      ],
    },

    {
      icon: <FaCode className="text-theme-yellow text-2xl" />,
      title: "Design the Agent Architecture",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=550&fit=crop",
      content:
        "A professional AI agent should not place all logic inside the frontend. The frontend communicates with a backend API, while the backend controls authentication, AI requests, tool execution, database access, validation, and security. This separation makes the system easier to maintain and scale.",
      architecture: [
        {
          title: "React Frontend",
          desc: "Chat interface, loading states, streaming responses, history and user controls.",
        },
        {
          title: "Express API",
          desc: "Receives requests, authenticates users and coordinates the agent workflow.",
        },
        {
          title: "Agent Service",
          desc: "Handles prompts, reasoning, tool selection and response generation.",
        },
        {
          title: "Tools Layer",
          desc: "Allows the agent to interact with APIs, databases and application services.",
        },
        {
          title: "MongoDB",
          desc: "Stores conversations, users, tool results and persistent application state.",
        },
      ],
    },

    {
      icon: <FaTools className="text-theme-yellow text-2xl" />,
      title: "Give Your Agent Tools",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=550&fit=crop",
      content:
        "Tools are what make an AI assistant behave more like an agent. Instead of simply generating an answer, the model can decide when it needs additional information or when an action should be performed. Your backend should validate every tool request before executing it.",
      tools: [
        "Search application data",
        "Retrieve information from a database",
        "Call third-party APIs",
        "Create or update records",
        "Generate reports",
        "Perform calculations",
        "Search documentation",
        "Trigger predefined application workflows",
      ],
    },

    {
      icon: <FaDatabase className="text-theme-yellow text-2xl" />,
      title: "Add Memory & Context",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=550&fit=crop",
      content:
        "A useful agent needs context. Without context, every request is treated as a completely new conversation. By storing conversation history and relevant application information, you can build an assistant that understands previous interactions and produces more useful responses.",
      practices: [
        "Store conversation history in MongoDB",
        "Use user IDs to separate conversations",
        "Send only relevant context to the model",
        "Summarize long conversations when necessary",
        "Store important preferences separately from chat history",
        "Avoid sending unnecessary sensitive information to the model",
      ],
    },

    {
      icon: <FaShieldAlt className="text-theme-yellow text-2xl" />,
      title: "Security & Production Practices",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=550&fit=crop",
      content:
        "AI features introduce new security considerations. API keys should never be exposed in React or other client-side code. AI requests should go through your backend, where authentication, authorization, validation, rate limiting, logging and tool permissions can be controlled.",
      security: [
        "Keep AI API keys in environment variables",
        "Never expose secret keys in frontend code",
        "Authenticate users before accessing private data",
        "Validate tool arguments on the server",
        "Limit what actions an agent can execute",
        "Add rate limiting to AI endpoints",
        "Log important agent operations",
        "Handle model failures and API timeouts gracefully",
      ],
    },

    {
      icon: <FaRocket className="text-theme-yellow text-2xl" />,
      title: "From Prototype to Production",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=550&fit=crop",
      content:
        "Start with a focused MVP instead of trying to build a fully autonomous agent immediately. Build one reliable workflow, test it with real users, measure failures, and gradually introduce more tools and capabilities.",
      roadmap: [
        {
          title: "Phase 1 — Chat",
          desc: "Build a basic React chat interface connected to your backend.",
        },
        {
          title: "Phase 2 — AI Integration",
          desc: "Connect the backend to Claude and implement structured prompts.",
        },
        {
          title: "Phase 3 — Tools",
          desc: "Add controlled tools that allow the agent to access application functionality.",
        },
        {
          title: "Phase 4 — Memory",
          desc: "Persist conversations and important user context.",
        },
        {
          title: "Phase 5 — Production",
          desc: "Add security, monitoring, rate limits, error handling and deployment.",
        },
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

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
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-theme-yellow transition-colors font-medium"
          >
            <FaArrowLeft />
            Back to Blog
          </button>
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 z-10 relative pt-24 pb-20">

        {/* Hero */}
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-full text-theme-yellow text-sm font-medium mb-6">
            <FaRobot />
            AI Engineering Guide
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
            How to Build an{" "}
            <span className="text-theme-yellow">AI Agent</span>
            <br />
            with Claude AI
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            A practical guide to designing AI agents with Claude, React,
            Node.js, Express and MongoDB — from the first prototype to a
            production-ready architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              Sep 12, 2026
            </span>

            <span className="flex items-center gap-2">
              <FaUser />
              SHAHZAIB
            </span>

            <span className="flex items-center gap-2">
              <FaClock />
              10 min read
            </span>
          </div>

          <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full" />
        </AnimatedSection>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-theme-yellow/10"
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=700&fit=crop"
            alt="AI Agent Development"
            className="w-full h-64 md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Introduction */}
        <AnimatedSection
          direction="up"
          delay={0.3}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="border-l-4 border-theme-yellow p-6 md:p-8 rounded-r-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              AI applications are moving beyond simple chat interfaces.
              Modern products can{" "}
              <span className="text-theme-yellow font-semibold">
                understand goals, reason about tasks, use tools and interact
                with application data
              </span>
              . This is where AI agents become powerful. In this guide, we'll
              break down how to design an agent using Claude and a modern
              JavaScript stack while keeping the architecture secure,
              maintainable and scalable.
            </p>
          </div>
        </AnimatedSection>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-24">

          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-theme-yellow/10 dark:bg-theme-yellow/20 rounded-xl">
                  {section.icon}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                  {index + 1}. {section.title}
                </h2>
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >

                {/* Image */}
                <motion.div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-theme-yellow/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />

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
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>

                  {/* Points */}
                  {section.points && (
                    <div className="space-y-3">
                      {section.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-6 h-6 bg-theme-yellow text-black rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            <FaCheckCircle size={11} />
                          </span>

                          <span className="text-gray-600 dark:text-gray-400">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  {section.techStack && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.techStack.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.04, y: -5 }}
                          className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 rounded-xl hover:border-theme-yellow transition-colors"
                        >
                          <h4 className="font-bold text-theme-yellow mb-1">
                            {tech.name}
                          </h4>

                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {tech.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Architecture */}
                  {section.architecture && (
                    <div className="space-y-4">
                      {section.architecture.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-theme-yellow/50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-theme-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-theme-yellow font-bold text-sm">
                              {i + 1}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-1">
                              {item.title}
                            </h4>

                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tools */}
                  {section.tools && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.tools.map((tool, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-3 p-3 bg-theme-yellow/5 dark:bg-theme-yellow/10 rounded-lg border-l-4 border-theme-yellow"
                        >
                          <FaCode className="text-theme-yellow shrink-0" />

                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {tool}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Memory / Security */}
                  {section.practices && (
                    <div className="grid grid-cols-1 gap-3">
                      {section.practices.map((practice, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-3 p-3 bg-theme-yellow/5 dark:bg-theme-yellow/10 rounded-lg border-l-4 border-theme-yellow"
                        >
                          <div className="w-2 h-2 bg-theme-yellow rounded-full shrink-0" />

                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {practice}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Roadmap */}
                  {section.roadmap && (
                    <div className="space-y-4">
                      {section.roadmap.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-9 h-9 rounded-full bg-theme-yellow text-black flex items-center justify-center font-bold shrink-0">
                            {i + 1}
                          </div>

                          <div>
                            <h4 className="font-bold mb-1">
                              {item.title}
                            </h4>

                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Architecture Overview */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-5xl mx-auto mt-24 mb-20"
        >
          <div className="bg-gray-950 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-theme-yellow/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-8">
                <FaRobot className="text-theme-yellow text-3xl" />

                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                  AI Agent Architecture
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                {[
                  "User",
                  "React UI",
                  "Express API",
                  "AI Agent",
                  "Tools",
                  "Database",
                ].map((item, i) => (
                  <React.Fragment key={item}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="w-full md:w-auto px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 text-center font-semibold"
                    >
                      {item}
                    </motion.div>

                    {i < 5 && (
                      <span className="hidden md:block text-theme-yellow text-xl">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-gray-400 text-sm text-center mt-8 max-w-3xl mx-auto">
                The key principle is simple: keep the model responsible for
                reasoning, while your backend remains responsible for
                authentication, permissions, business logic and actual tool
                execution.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Production Checklist */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 rounded-2xl p-8 md:p-12">

            <div className="flex items-center gap-3 mb-6">
              <FaRocket className="text-theme-yellow text-3xl" />

              <h2 className="text-2xl md:text-3xl font-bold uppercase">
                Production Checklist
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Secure environment variables",
                "Authentication & authorization",
                "Validated tool execution",
                "Conversation persistence",
                "Error handling",
                "Rate limiting",
                "Logging & monitoring",
                "User-friendly loading states",
                "Fallback responses",
                "Clear AI system instructions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-theme-yellow shrink-0" />

                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border border-theme-yellow/20 rounded-2xl p-8 md:p-12">

            <FaBrain className="text-theme-yellow text-4xl mx-auto mb-6" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Build Small. Think Big.
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Building an AI agent does not mean giving an AI model unlimited
              control over your application. The strongest implementations
              combine AI reasoning with carefully designed software
              architecture, controlled tools, secure backend services and
              meaningful user experiences.
            </p>

            <button
              onClick={() => navigate("/#blog")}
              className="px-8 py-3 bg-theme-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
            >
              <FaArrowLeft />
              Explore More Articles
            </button>
          </div>
        </AnimatedSection>

        <div className="pb-20" />
      </div>
    </div>
  );
};

export default BlogPost1;

