












import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import resumePdf from '../assets/SHAHZAIB.pdf';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedSkills, setTypedSkills] = useState({});
  const [typedExperiences, setTypedExperiences] = useState({});
  const [typedEducation, setTypedEducation] = useState({});

  const textsToType = [
    'MERN Stack Developer',
    'Full Stack Developer',
    'Problem Solver',
    'Creative Thinker'
  ];

  const skills = [
    { name: 'HTML', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', percentage: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', percentage: 89, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React JS', percentage: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Material UI', percentage: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Ant Design', percentage: 83, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg' },
    { name: 'Mongo DB', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Express', percentage: 83, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'C++', percentage: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', percentage: 87, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Java', percentage: 79, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', percentage: 91, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
  ];

  const experiences = [
    {
      year: 'Jun 2024 - Nov 2024',  // FIXED: Title case, space between month and year
      title: 'FRONTEND DEVELOPER - PCI Learning, Lahore',
      description: 'Developed responsive, user-friendly web pages using HTML5, CSS3, JavaScript, and Bootstrap.'
    },
    {
      year: 'Jun 2025 - Dec 2025',  // FIXED: Title case, space between month and year
      title: 'MERN STACK DEVELOPER - Octet Solutions, Lahore',
      description: 'Completed hands-on training in full-stack MERN development, covering both frontend and backend application workflows.'
    }
  ];

  const education = [
    {
      year: 'Mar 2019 - May 2021',  // FIXED: Removed leading space
      title: 'The Educator Vision Colleges, Ahmad Pur Sial',
      description: 'Intermediate in Pre-Engineering with a strong academic record and active participation in extracurricular activities.'
    },
    {
      year: 'Sep 2021 - Present',
      title: 'The Islamia University of Bahawalpur (IUB), Bahawalpur',
      description: 'Pursuing a Bachelor of Science in Computer Science, maintaining a high GPA and engaging in various tech-related projects and activities.'
    }
  ];

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative py-20">
        {/* Header */}
        <AnimatedSection className="text-center mb-20 relative" direction="up" delay={0.2}>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              About <span className="text-theme-yellow">Me</span>
            </h1>
          </div>
        </AnimatedSection>

        <div className="w-32 h-1 mb-12 bg-theme-yellow mx-auto"></div>

        {/* Personal Infos & Stats Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Personal Infos */}
          <AnimatedSection className="w-full lg:w-1/2" direction="left" delay={0.3}>
            {/* Circular Profile Image */}
            <div className="max-w-7xl mx-auto mb-12 flex justify-center lg:hidden">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-theme-yellow to-yellow-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-theme-dark">
                    <img
                      src="/profile.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold uppercase mb-8 text-theme-yellow">PERSONAL INFOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 mb-8">
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Name:</span>
                <span>Shahzaib</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Age:</span>
                <span>22 Years</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Nationality:</span>
                <span>Pakistan</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Languages:</span>
                <span>Urdu, English</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Address:</span>
                <span>Bahawalpur, Pakistan</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Phone:</span>
                <span>+92 307 6492467</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                <span className="text-gray-500 uppercase text-sm">Email:</span>
                <span>shahzaibmalik0409@gmail.com</span>
              </div>
            </div>
           
            {/* FIXED DOWNLOAD BUTTON - No green toast, auto-remove yellow toast */}
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = resumePdf;
                link.download = 'SHAHZAIB.pdf';
                link.target = '_blank';
                document.body.appendChild(link);

                // Show yellow toast only
                const toast = document.createElement('div');
                toast.className = 'fixed bottom-4 left-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse';
                toast.textContent = 'Downloading resume...';
                document.body.appendChild(toast);

                // Trigger download
                link.click();

                // Auto-remove toast after 1.5 seconds - NO GREEN TOAST
                setTimeout(() => {
                  if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                  }
                  if (document.body.contains(link)) {
                    document.body.removeChild(link);
                  }
                }, 1500);
              }}
              className="px-8 py-3 rounded-full border border-yellow-400 text-black dark:text-white font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              <FaDownload /> DOWNLOAD CV
            </button>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="w-full lg:w-1/2 grid grid-cols-2 gap-6" direction="right" delay={0.4}>
            <div className="bg-gray-900 dark:bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-theme-yellow transition-colors duration-300">
              <h3 className="text-4xl font-bold text-theme-yellow mb-2">2+</h3>
              <p className="text-gray-200 uppercase text-sm">Years of <br />Experience</p>
            </div>
            <div className="bg-gray-900 dark:bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-theme-yellow transition-colors duration-300">
              <h3 className="text-4xl font-bold text-theme-yellow mb-2">10+</h3>
              <p className="text-gray-200 uppercase text-sm">Completed <br />Projects</p>
            </div>
            <div className="bg-gray-900 dark:bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-theme-yellow transition-colors duration-300">
              <h3 className="text-4xl font-bold text-theme-yellow mb-2">15+</h3>
              <p className="text-gray-200 uppercase text-sm">Happy <br />Customers</p>
            </div>
            
          </AnimatedSection>
        </div>

        {/* Skills Section */}
        <AnimatedSection className="mb-20" direction="up" delay={0.5}>
          <h3 className="text-2xl font-bold mb-12 text-theme-yellow text-center">MY SKILLS</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.3, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  mass: 1
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -8, 8, 0],
                  transition: { 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className={`relative w-16 h-16 mx-auto mb-2 flex items-center justify-center rounded-lg ${skill.name === 'Express' ? 'bg-white' : ''}`}
                  whileHover={{ 
                    y: -8
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.8
                    }}
                    whileHover={{ 
                      rotate: 0,
                      scale: 1.3,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.div>
                <motion.p 
                  className="text-xs text-gray-600 dark:text-gray-300 font-medium hover:text-theme-yellow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.15 + 0.3
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -2,
                    transition: {
                      type: "spring",
                      stiffness: 400
                    }
                  }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience & Education Section */}
        <AnimatedSection direction="up" delay={0.6}>
          <h3 className="text-2xl font-bold mb-12 text-theme-yellow text-center">EXPERIENCE & EDUCATION</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-black dark:text-white uppercase">Experience</h4>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
                    <div className="absolute left-0 top-0 w-12 h-12 bg-theme-yellow rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-black" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 text-xs font-semibold">
                        {exp.year}
                      </span>
                      <h5 className="text-black dark:text-white font-semibold mt-3">{exp.title}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-black dark:text-white uppercase">Education</h4>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
                    <div className="absolute left-0 top-0 w-12 h-12 bg-theme-yellow rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-black" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 text-xs font-semibold">
                        {edu.year}
                      </span>
                      <h5 className="text-black dark:text-white font-semibold mt-3">{edu.title}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;