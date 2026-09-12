// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';
// import AnimatedSection from '../components/AnimatedSection';
// import img1 from '../assets/image2.png';
// import img2 from '../assets/image.png';
// const Portfolio = () => {
//   const [filter, setFilter] = useState('all');

//   const categories = ['all', 'web',  'design', ];
  
//   const projects = [
//     {
//       id: 1,
//       title: 'Resume Builder',
//       category: 'web',
//       image: img1,
//       description: 'Online tool for creating professional resumes'
//     },
   
   
//     {
//       id: 4,
//       title: 'Neural Networks ',
//       category: 'design',
//       image: img2,
//       description: 'Visual representations of neural network architectures'
//     },
//     {
//       id: 5,
//       title: 'E-commerce Platform',
//       category: 'web',
//       image: 'https://picsum.photos/seed/project5/600/400',
//       description: 'Full-featured online shopping platform'
//     },
//     {
//       id: 6,
//       title: 'Logo Collection',
//       category: 'design',
//       image: 'https://picsum.photos/seed/project6/600/400',
//       description: 'Modern logo design concepts'
//     },
    
   
//     {
//       id: 9,
//       title: 'Web Application',
//       category: 'web',
//       image: 'https://picsum.photos/seed/project9/600/400',
//       description: 'Progressive web application development'
//     }
//   ];

//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === filter);

//   return (
//     <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">

//       <div className="container mx-auto px-4 z-10 relative py-20">
//         {/* Header */}
//         <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
         
//           <div className="relative z-10">
//             <h1 className="text-5xl md:text-7xl font-bold  uppercase ">
//               My <span className="text-theme-yellow ">Work</span>
//             </h1>
         
            
//           </div>
//         </AnimatedSection>

//         <AnimatedSection direction="up" delay={0.3} className="text-center mb-16">
//           <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
//             Welcome to my portfolio. Here you can find some of my recent work and projects. 
//             Feel free to browse through and contact me if you have any questions.
//           </p>
//           <div className="w-32 h-1 mt-10 mb-10 bg-theme-yellow mx-auto"></div>
//         </AnimatedSection>

//         {/* Filter Buttons */}
//         <AnimatedSection direction="up" delay={0.4} className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-6 py-3 rounded-full border font-semibold uppercase transition-all duration-300 ${
//                 filter === category
//                   ? 'bg-theme-yellow text-black border-theme-yellow'
//                   : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-theme-yellow hover:text-theme-yellow'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </AnimatedSection>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <AnimatedSection
//               key={project.id}
//               direction="up"
//               delay={0.1 * index}
//               className="group relative rounded-lg overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-white text-xl font-bold uppercase mb-2">{project.title}</h3>
//                     <p className="text-gray-200 text-sm mb-4">{project.description}</p>
//                     <div className="flex gap-3">
//                       <button className="w-10 h-10 rounded-full bg-theme-yellow text-black flex items-center justify-center hover:bg-theme-dark hover:text-theme-yellow transition-colors duration-300">
//                         <FaSearchPlus className="text-sm" />
//                       </button>
//                       <button className="w-10 h-10 rounded-full bg-theme-yellow text-black flex items-center justify-center hover:bg-theme-dark hover:text-theme-yellow transition-colors duration-300">
//                       <a href="https://shahzaib-02.github.io/Site-for-Neural-Network/" target="_blank" rel="noopener noreferrer">  <FaExternalLinkAlt className="text-sm" /></a>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-theme-yellow text-sm font-semibold uppercase">
//                     {project.category}
//                   </span>
//                   <div className="flex gap-2">
//                     <div className="w-2 h-2 bg-theme-yellow rounded-full"></div>
//                     <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
//                     <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;














import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaSearchPlus, FaGithub, FaCode, FaPalette, FaServer, FaMobileAlt, FaStar } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import img1 from '../assets/image2.png';
import img2 from '../assets/image3.png';
import img3 from '../assets/image4.png';
import img4 from '../assets/image5.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'web', 'design'];

  const projects = [
    {
      id: 1,
      title: 'Resume Builder',
      category: 'web',
      image: img1,
      description: 'Online tool for creating professional resumes. A team collaboration project where I handled the frontend development and contributed to backend functionality.',
      link: 'https://github.com/Aghmaz/octet-project.git',
      technologies: ['React', 'Node.js', 'MongoDB'],
      featured: true,
      rating: 4.8
    },
    {
      id: 4,
      title: 'Neural Networks',
      category: 'design',
      image: img2,
      description: 'Visual representations of neural network architectures with interactive diagrams and educational content.',
      link: 'https://shahzaib-02.github.io/Site-for-Neural-Network/',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      rating: 4.5
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'web',
      image: img3,
      description: 'Full-featured online shopping platform with product management, cart functionality, and payment integration.',
      link: 'https://shahzaib-02.github.io/ShopHub-E-Commerce-Store/',
      technologies: ['React', 'Redux', 'Firebase'],
      featured: true,
      rating: 4.9
    },
    {
      id: 9,
      title: 'Live Weather App',
      category: 'web',
      image: img4,
      description: 'A weather application that provides real-time weather updates and forecasts for any location worldwide.',
      link: 'https://shahzaib-02.github.io/Live-weather/',
      technologies: ['React', 'API Integration', 'CSS'],
      featured: false,
      rating: 4.6
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return <FaCode />;
      case 'design': return <FaPalette />;
      default: return <FaMobileAlt />;
    }
  };

  return (
    <div id="portfolio" className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative py-20">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              My <span className="text-theme-yellow">Work</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my passion for creating digital experiences through code and design
            </p>
          </div>
        </AnimatedSection>

        <div className="w-32 h-1 mb-16 bg-theme-yellow mx-auto"></div>

        {/* Enhanced Filter Buttons */}
        <AnimatedSection direction="up" delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full border-2 font-semibold uppercase transition-all duration-300 flex items-center gap-2 ${
                filter === category
                  ? 'bg-theme-yellow text-black border-theme-yellow shadow-lg shadow-yellow-500/30'
                  : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-theme-yellow hover:text-theme-yellow'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              direction="up"
              delay={0.1 * index}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 cursor-pointer"
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-theme-yellow text-black px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                          <FaStar className="text-xs" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FaStar className="text-theme-yellow text-xs" />
                      {project.rating}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-1 bg-theme-yellow text-black py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-theme-yellow transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        View Project
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:bg-theme-yellow hover:text-black transition-colors"
                      >
                        <FaSearchPlus />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-theme-yellow text-sm font-semibold uppercase flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{project.technologies.slice(0, 2).join(', ')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-theme-yellow transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-theme-yellow hover:text-black transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Coming Soon Section */}
        <AnimatedSection direction="up" delay={0.8} className="mt-20 mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 text-center border border-gray-700">
            <h3 className="text-3xl md:text-4xl font-bold text-theme-yellow mb-4">
              Full Stack Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              I'm currently working on exciting full-stack applications that will be added to my portfolio soon. Stay tuned!
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-3 h-3 bg-theme-yellow rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-theme-yellow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-theme-yellow rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Portfolio;