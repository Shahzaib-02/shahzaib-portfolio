import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Home = () => {
  const [typedRole, setTypedRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedName, setTypedName] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  // Refs for scroll-triggered animations
  const imageRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const imageInView = useInView(imageRef, { margin: '-100px' });
  const contentInView = useInView(contentRef, { margin: '-100px' });

  const roles = [
    'WEB DESIGNER',
    'FRONTEND DEVELOPER',
    'UI/UX DESIGNER',
    'FULL STACK DEVELOPER',
    'CREATIVE THINKER'
  ];

  const name = "I'M SHAHZAIB";
  const description = "I'm a Pakistan based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.";

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
    }, 120); // Slower for smoother effect

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
    <div className="min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white font-sans overflow-x-hidden relative w-screen left-1/2 -translate-x-1/2 transition-colors duration-300">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="relative min-h-screen flex items-center">
        <div className="absolute top-0 left-0 h-full w-[120px] sm:w-[180px] lg:w-[180px] bg-theme-yellow transform -skew-x-12 origin-top" />


        <div className="w-full mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center  py-16">
          <div className="relative flex justify-center lg:justify-start lg:-ml-24">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] hidden sm:block  ">
              <div
                className="relative rounded-[58px] overflow-hidden" >
                <img
                  src="profile.jpeg"
                  alt="Profile Image"
                  className="w-full  sm:h-[420px] lg:h-[470px] object-cover"
                />
              </div>



 

             

            </div>
          </div>

          <div
            className="text-center lg:text-left px-6 lg:px-0"
            style={{
              animation: 'fadeIn 1s ease-in-out 0.5s forwards',
              opacity: 0
            }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
              <span className="hidden lg:block w-12 h-[3px] bg-theme-yellow" />
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

            <Link
              to="/about"
              className="group relative inline-flex items-center rounded-full border border-theme-yellow px-8 py-4 pr-16 font-bold uppercase text-sm tracking-wide text-gray-900 dark:text-white hover:bg-theme-yellow hover:text-black transition-colors"
            >
              <span>More About Me</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-theme-yellow flex items-center justify-center">
                <FaArrowRight className="text-black" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
