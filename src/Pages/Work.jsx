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
import { FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import img1 from '../assets/image2.png';
import img2 from '../assets/image3.png';
import img3 from '../assets/image4.png';
import img4 from '../assets/image5.png';
const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'design'];

  const projects = [
    {
      id: 1,
      title: 'Resume Builder',
      category: 'web',
      image: img1,
      description: 'Online tool for creating professional resumes.its a team collaboration project and i have done the frontend part and also some backend work as well.',
      link: 'https://github.com/Aghmaz/octet-project.git'
    },
    {
      id: 4,
      title: 'Neural Networks',
      category: 'design',
      image: img2,
      description: 'Visual representations of neural network architectures',
      link: 'https://shahzaib-02.github.io/Site-for-Neural-Network/'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'web',
      image: img3,
      description: 'Full-featured online shopping platform',
      link: 'https://shahzaib-02.github.io/ShopHub-E-Commerce-Store/'
    },
    // {
    //   id: 6,
    //   title: 'Logo Collection',
    //   category: 'design',
    //   image: 'https://picsum.photos/seed/project6/600/400',
    //   description: 'Modern logo design concepts',
    //   link: 'https://shahzaib-02.github.io/logo-collection/'
    // },
    {
      id: 9,
      title: 'Live Weather App',
      category: 'web',
      image: img4,
      description: 'A weather application that provides real-time weather updates and forecasts for any location worldwide.',
      link: 'https://shahzaib-02.github.io/Live-weather/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative py-20">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase">
              My <span className="text-theme-yellow">Work</span>
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3} className="text-center mb-16">
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome to my portfolio. Here you can find some of my recent work and projects. 
            Feel free to browse through and contact me if you have any questions.
          </p>
          <div className="w-32 h-1 mt-10 mb-10 bg-theme-yellow mx-auto"></div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection direction="up" delay={0.4} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full border font-semibold uppercase transition-all duration-300 ${
                filter === category
                  ? 'bg-theme-yellow text-black border-theme-yellow'
                  : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-theme-yellow hover:text-theme-yellow'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              direction="up"
              delay={0.1 * index}
              className="group relative rounded-lg overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold uppercase mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                    <div className="flex gap-3">
                      {/* Zoom button */}
                      <button className="w-10 h-10 rounded-full bg-theme-yellow text-black flex items-center justify-center hover:bg-theme-dark hover:text-theme-yellow transition-colors duration-300">
                        <FaSearchPlus className="text-sm" />
                      </button>

                      {/* External link button - UNIQUE per project */}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-theme-yellow text-black flex items-center justify-center hover:bg-theme-dark hover:text-theme-yellow transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-theme-yellow text-sm font-semibold uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-theme-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
          ))}
        </div>
      </div>
      <h1 className="text-5xl font-bold text-yellow-400 text-center mt-12 mb-36"> Full Stack Projects Comming Soon ....... </h1>
    </div>
  );
};

export default Portfolio;