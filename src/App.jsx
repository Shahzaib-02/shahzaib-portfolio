
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Work';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogPost1 from './Pages/BlogPost1';
import BlogPost2 from './Pages/BlogPost2';
import BlogPost3 from './Pages/BlogPost3';
import { ThemeProvider } from './contexts/ThemeContext';
import PageTransition, { WipeTransition } from './components/PageTransition';
import Preloader from './components/Preloader';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when route changes (only for blog post routes)
  useEffect(() => {
    if (location.pathname.startsWith('/blog/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.hash) {
      // Handle hash navigation for returning to sections
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen transition-colors duration-500 
                    bg-white text-black 
                    dark:bg-theme-dark dark:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <main className="relative min-h-screen w-full mx-auto px-6 lg:px-10 lg:max-w-6xl">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            {/* Single page with all sections */}
            <Route
              path="/"
              element={
                <WipeTransition>
                  <PageTransition>
                    <Home />
                    <About />
                    <Portfolio />
                    <Contact />
                    <Blog />
                  </PageTransition>
                </WipeTransition>
              }
            />
            {/* Blog post routes - separate pages */}
            <Route
              path="/blog/1"
              element={
                <WipeTransition>
                  <PageTransition>
                    <BlogPost1 />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/blog/2"
              element={
                <WipeTransition>
                  <PageTransition>
                    <BlogPost2 />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/blog/3"
              element={
                <WipeTransition>
                  <PageTransition>
                    <BlogPost3 />
                  </PageTransition>
                </WipeTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
