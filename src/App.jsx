
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { ThemeProvider } from './contexts/ThemeContext';
import PageTransition, { WipeTransition } from './components/PageTransition';
import Preloader from './components/Preloader';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen transition-colors duration-500 
                    bg-white text-black 
                    dark:bg-black dark:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <main className="relative min-h-screen w-full mx-auto px-6 lg:px-10 lg:max-w-6xl">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <WipeTransition>
                  <PageTransition>
                    <Home />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/about"
              element={
                <WipeTransition>
                  <PageTransition>
                    <About />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <WipeTransition>
                  <PageTransition>
                    <Portfolio />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <WipeTransition>
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                </WipeTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <WipeTransition>
                  <PageTransition>
                    <Blog />
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
