



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaComments,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const sections = ['home', 'about', 'portfolio', 'contact', 'blog'];

  useEffect(() => {
    // Check if we're on a blog post page, use blog as active
    if (location.pathname.startsWith('/blog/')) {
      setActiveSection('blog');
      return;
    }

    // For single page sections, use scroll detection when on main page
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const sectionHeight = rect.height;

          // Check if section is in view - more accurate detection
          const sectionMiddle = sectionTop + sectionHeight / 2;
          const viewportMiddle = scrollPosition + windowHeight / 2;

          // If the section's middle is within the viewport
          if (Math.abs(sectionMiddle - viewportMiddle) < windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    // Only add scroll listener if we're on the main page
    if (location.pathname === '/' || location.pathname === '') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      // Set active section based on current path
      const path = location.pathname.replace('/', '');
      setActiveSection(path || 'home');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, sections]);

  return (
    <>
      <div className="fixed top-6 right-6 z-[60] flex items-center gap-4">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all
              ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-800 text-white hover:bg-theme-yellow hover:text-black hover:border-theme-yellow'
                  : 'bg-white border-gray-200 text-gray-800 hover:bg-theme-yellow hover:text-black hover:border-theme-yellow'
              }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all
            ${
              isDarkMode
                ? 'bg-gray-800 border-gray-800 text-white hover:bg-theme-yellow hover:text-black hover:border-theme-yellow'
                : 'bg-white border-gray-200 text-gray-800 hover:bg-theme-yellow hover:text-black hover:border-theme-yellow'
            }`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <div
        className={`
          fixed right-0 top-0 h-full z-50 flex flex-col justify-center transition-all duration-500
          ${
            isMenuOpen
              ? `${isDarkMode ? 'w-full bg-theme-dark/90' : 'w-full bg-white/90'} backdrop-blur-sm items-center`
              : 'hidden lg:flex lg:items-end lg:pr-6'
          }
        `}
      >
        <div className={`flex flex-col space-y-8 ${isMenuOpen ? 'items-center' : 'items-end'}`}>
          <NavItem to="#home" icon={<FaHome />} text="Home" showText={isMenuOpen} isDarkMode={isDarkMode} isActive={activeSection === 'home'} onClick={() => setIsMenuOpen(false)} navigate={navigate} />
          <NavItem to="#about" icon={<FaUser />} text="About" showText={isMenuOpen} isDarkMode={isDarkMode} isActive={activeSection === 'about'} onClick={() => setIsMenuOpen(false)} navigate={navigate} />
          <NavItem to="#portfolio" icon={<FaBriefcase />} text="Portfolio" showText={isMenuOpen} isDarkMode={isDarkMode} isActive={activeSection === 'portfolio'} onClick={() => setIsMenuOpen(false)} navigate={navigate} />
          <NavItem to="#contact" icon={<FaEnvelope />} text="Contact" showText={isMenuOpen} isDarkMode={isDarkMode} isActive={activeSection === 'contact'} onClick={() => setIsMenuOpen(false)} navigate={navigate} />
          <NavItem to="#blog" icon={<FaComments />} text="Blog" showText={isMenuOpen} isDarkMode={isDarkMode} isActive={activeSection === 'blog'} onClick={() => setIsMenuOpen(false)} navigate={navigate} />
        </div>
      </div>
    </>
  );
};

const NavItem = ({ to, icon, text, showText, isDarkMode, isActive, onClick, navigate }) => {
  const handleClick = (e) => {
    if (onClick) onClick();

    // Handle smooth scroll for hash links
    if (to.startsWith('#')) {
      e.preventDefault();

      // Check if we're on a blog post page
      const isBlogPostPage = window.location.pathname.startsWith('/blog/');

      if (isBlogPostPage) {
        // Navigate to main page with hash using React Router
        navigate('/' + to);
      } else {
        // Normal smooth scroll on main page
        const element = document.getElementById(to.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <a href={to} className="relative group flex items-center" onClick={handleClick}>
      <div
        className={`
          absolute right-0 top-1/2 -translate-y-1/2
          h-12 rounded-full
          bg-theme-yellow
          transition-all duration-700
          w-12 opacity-0 lg:group-hover:w-36 lg:group-hover:opacity-100
        `}
      />

      <span
        className={`
          absolute right-16 top-1/2 -translate-y-1/2
          text-white text-sm font-semibold uppercase
          transition-all duration-500
          opacity-0 translate-x-2 lg:group-hover:opacity-100 lg:group-hover:translate-x-0
        `}
      >
        {text}
      </span>

      {/* Icon Circle */}
      <div
        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 transition-all duration-300
          ${
            isActive
              ? 'bg-theme-yellow text-white border-theme-yellow'
              : isDarkMode
                ? 'bg-gray-800 text-gray-200 border-gray-800 lg:group-hover:bg-theme-yellow lg:group-hover:text-white lg:group-hover:border-theme-yellow'
                : 'bg-white text-gray-800 border-gray-200 lg:group-hover:bg-theme-yellow lg:group-hover:text-black lg:group-hover:border-theme-yellow'
          }`}
      >
        {icon}
      </div>

      {/* Mobile Text */}
      {showText && (
        <span className={`ml-4 ${isActive ? 'text-theme-yellow' : 'text-gray-400'}`}>
          {text}
        </span>
      )}
    </a>
  );
};

export default Navbar;

