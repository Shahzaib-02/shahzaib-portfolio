// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import { motion, useInView } from 'framer-motion';

// const Home = () => {
//   const [typedRole, setTypedRole] = useState('');
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [typedName, setTypedName] = useState('');
//   const [typedDescription, setTypedDescription] = useState('');

//   // Refs for scroll-triggered animations
//   const imageRef = React.useRef(null);
//   const contentRef = React.useRef(null);
//   const imageInView = useInView(imageRef, { margin: '-100px' });
//   const contentInView = useInView(contentRef, { margin: '-100px' });

//   const roles = [
//     'MERN STACK DEVELOPER',
//     'FULL STACK DEVELOPER',
//     'REACT DEVELOPER',
    
//     'CREATIVE THINKER'
//   ];

//   const name = "I'M SHAHZAIB";
//   const description = "I'm a Pakistan based MERN stack developer focused on building full-stack web applications with MongoDB, Express, and  React. I am passionate about crafting clean, scalable software that improves the lives of those around me.";

//   // Name typing animation
//   useEffect(() => {
//     let charIndex = 0;
//     const nameInterval = setInterval(() => {
//       if (charIndex <= name.length) {
//         setTypedName(name.slice(0, charIndex));
//         charIndex++;
//       } else {
//         clearInterval(nameInterval);
//       }
//     }, 120); // Slower for smoother effect

//     return () => clearInterval(nameInterval);
//   }, []);

//   // Role typing animation
//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     let charIndex = 0;

//     const roleInterval = setInterval(() => {
//       if (charIndex <= currentRole.length) {
//         setTypedRole(currentRole.slice(0, charIndex));
//         charIndex++;
//       } else {
//         clearInterval(roleInterval);
//         setTimeout(() => {
//           setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//           setTypedRole('');
//         }, 1800); 
//       }
//     }, 90); 

//     return () => clearInterval(roleInterval);
//   }, [currentRoleIndex]);

//   // Description typing animation
//   useEffect(() => {
//     const descriptionTimeout = setTimeout(() => {
//       let charIndex = 0;
//       const descInterval = setInterval(() => {
//         if (charIndex <= description.length) {
//           setTypedDescription(description.slice(0, charIndex));
//           charIndex++;
//         } else {
//           clearInterval(descInterval);
//         }
//       }, 15); 

//       return () => clearInterval(descInterval);
//     }, 800); 

//     return () => clearTimeout(descriptionTimeout);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 text-black dark:bg-theme-dark dark:text-white font-sans overflow-x-hidden overflow-y-hidden relative w-screen left-1/2 -translate-x-1/2 transition-colors duration-300">
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes imageReveal {
//           from { opacity: 0; transform: scale(0.88); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         @keyframes ringPulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.7; }
//         }
//       `}</style>
//       <div className="relative min-h-screen flex items-center">
//         {/* <div className="absolute inset-0 pointer-events-none">
//           <div
//             className="absolute top-0 left-0 h-[130px] w-[230px] sm:h-[150px] sm:w-[260px] lg:h-[180px] lg:w-[320px] bg-theme-yellow"
//             style={{ clipPath: 'polygon(0 0, 50% 0, 70% 100%, 0% 100%)' }}
//           />
//           <div
//             className="absolute bottom-0 left-0 h-[160px] w-[260px] sm:h-[180px] sm:w-[300px] lg:h-[220px] lg:w-[360px] bg-theme-yellow"
//             style={{ clipPath: 'polygon(0 0, 0% 0, 100% 100%, 0% 100%)' }}
//           />
//         </div> */}
        


//         <div className="w-full mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center  ">
//           <div className="relative flex justify-center lg:justify-start lg:-ml-14">
//             <div className="relative hidden sm:block">
           
//               {/* <div
//                 className="relative   rounded-[48px] sm:rounded-l-[3rem] overflow-hidden shadow-2xl w-[260px] h-[260px] sm:w-[300px] sm:h-[400px] lg:w-[370px] lg:h-[370px]"
//                 style={{
//                   animation: 'imageReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards',
//                   opacity: 0
//                 }}
//               >
//                 <img
//                   src="profile.jpeg"
//                   alt="Profile"
//                   className=" object-cover object-center  rounded-full"
//                 />
//               </div> */}
//               <div
//   className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden shadow-2xl"
//   style={{
//     animation: 'imageReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards',
//     opacity: 0
//   }}
// >
//   <img
//     src="profile.jpeg"
//     alt="Profile"
//     className="w-full h-full object-cover object-center"
//   />
// </div>
//             </div>
//           </div>

//           <div
//             className="text-center lg:text-left px-6 lg:px-0"
//             style={{
//               animation: 'fadeIn 1s ease-in-out 0.5s forwards',
//               opacity: 0
//             }}
//           >
//             <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
//               <span className="hidden lg:block w-14 h-[3px] bg-theme-yellow" />
//               <h1 className="text-4xl lg:text-5xl font-extrabold text-theme-yellow uppercase tracking-wide transition-all duration-300 min-h-[48px] lg:min-h-[56px]">
//                 {typedName}
//               </h1>
//             </div>

//             <h2 className="text-4xl lg:text-4xl font-extrabold uppercase mb-6 text-gray-900 dark:text-white transition-all duration-300 min-h-[48px] lg:min-h-[56px]">
//               {typedRole}
//             </h2>

//             <p className="text-gray-800 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 transition-all duration-300 min-h-[120px] lg:min-h-[140px]">
//               {typedDescription}
//             </p>

//             <Link
//               to="/about"
//               className="group relative inline-flex items-center rounded-full border border-theme-yellow px-8 py-4 pr-16 font-bold uppercase text-sm tracking-wide text-gray-900 dark:text-white hover:bg-theme-yellow hover:text-black transition-colors"
//             >
//               <span>More About Me</span>
//               <span className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-theme-yellow flex items-center justify-center">
//                 <FaArrowRight className="text-black" />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






























import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [typedRole, setTypedRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedName, setTypedName] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  const roles = [
    'MERN STACK DEVELOPER',
    'FULL STACK DEVELOPER',
    'REACT DEVELOPER',
    'CREATIVE THINKER'
  ];

  const name = "I'M SHAHZAIB";
  const description = "I'm a Pakistan based MERN stack developer focused on building full-stack web applications with MongoDB, Express, and  React. I am passionate about crafting clean, scalable software that improves the lives of those around me.";

  // Name typing animation
  useEffect(() => {
    let charIndex = 0;
    const nameInterval = setInterval(() => {
      if (charIndex <= name.length) {
        setTypedName(name.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(nameInterval);
      }
    }, 120);

    return () => clearInterval(nameInterval);
  }, []);

  // Role typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;

    const roleInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedRole(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(roleInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypedRole('');
        }, 1800); 
      }
    }, 90); 

    return () => clearInterval(roleInterval);
  }, [currentRoleIndex]);

  // Description typing animation
  useEffect(() => {
    const descriptionTimeout = setTimeout(() => {
      let charIndex = 0;
      const descInterval = setInterval(() => {
        if (charIndex <= description.length) {
          setTypedDescription(description.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(descInterval);
        }
      }, 15); 

      return () => clearInterval(descInterval);
    }, 800); 

    return () => clearTimeout(descriptionTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-black dark:bg-theme-dark dark:text-white font-sans overflow-x-hidden overflow-y-hidden relative w-screen left-1/2 -translate-x-1/2 transition-colors duration-300">
      <div className="relative min-h-screen flex items-center">
        {/* Top-left decorative shape */}
        <div className="absolute top-0 left-0 pointer-events-none">
          <div
            className=""
            style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}
          />
        </div>
        {/* Bottom-left decorative shape */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <div
            className=""
            style={{ clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)' }}
          />
        </div>

        <div className="w-full mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Left Side - Circular Image with Animations */}
          <motion.div 
            className="relative flex justify-center lg:justify-start lg:-ml-14"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer rotating dashed ring */}
              <motion.div
                className="absolute border-2 border-dashed border-theme-yellow/40 rounded-full  hidden sm:block"
                style={{ width: 'calc(100% + 60px)', height: 'calc(100% + 60px)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle pulsing ring */}
              <motion.div
                className="absolute border border-theme-yellow/30 rounded-full hidden sm:block"
                style={{ width: 'calc(100% + 35px)', height: 'calc(100% + 35px)' }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Inner solid ring */}
              <motion.div
                className="absolute border-2 border-theme-yellow/50 rounded-full hidden sm:block"
                style={{ width: 'calc(100% + 15px)', height: 'calc(100% + 15px)' }}
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Yellow glow pulse behind image */}
              <motion.div
                className="absolute bg-theme-yellow/10 rounded-full blur-xl hidden sm:block "
                style={{ width: 'calc(100% + 40px)', height: 'calc(100% + 40px)' }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main Circular Image Container */}
              <motion.div
                className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden shadow-2xl border-4 border-theme-yellow hidden sm:block"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src="profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                />
              </motion.div>

              {/* Floating dot - top right */}
              {/* <motion.div
                className="absolute -top-2 right-4 w-4 h-4 bg-theme-yellow rounded-full"
                animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              /> */}

              {/* Floating dot - bottom left */}
              {/* <motion.div
                className="absolute -bottom-1 left-8 w-3 h-3 bg-theme-yellow/70 rounded-full"
                animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              /> */}

              {/* Floating dot - right middle */}
              {/* <motion.div
                className="absolute top-1/3 -right-6 w-2.5 h-2.5 bg-theme-yellow/60 rounded-full"
                animate={{ x: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              /> */}

              {/* Floating dot - left top */}
              {/* <motion.div
                className="absolute top-4 -left-4 w-2 h-2 bg-theme-yellow/50 rounded-full"
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              /> */}

              {/* Decorative Ring Dot */}
              {/* <motion.div
                className="absolute top-1/2 -right-12 w-7 h-7 border-2 border-theme-yellow rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2.5 h-2.5 bg-theme-yellow rounded-full" />
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="text-center lg:text-left px-6 lg:px-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
              <motion.span 
                className="hidden lg:block w-14 h-[3px] bg-theme-yellow"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ originX: 0 }}
              />
              <h1 className="text-4xl lg:text-5xl font-extrabold text-theme-yellow uppercase tracking-wide transition-all duration-300 min-h-[48px] lg:min-h-[56px]">
                {typedName}
              </h1>
            </div>

            <h2 className="text-4xl lg:text-4xl font-extrabold uppercase mb-6 text-gray-900 dark:text-white transition-all duration-300 min-h-[48px] lg:min-h-[56px]">
              {typedRole}
            </h2>

            <p className="text-gray-800 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 transition-all duration-300 min-h-[120px] lg:min-h-[140px]">
              {typedDescription}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center rounded-full border border-theme-yellow px-8 py-4 pr-16 font-bold uppercase text-sm tracking-wide text-gray-900 dark:text-white hover:bg-theme-yellow hover:text-black transition-colors"
              >
                <span>More About Me</span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-theme-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaArrowRight className="text-black" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;