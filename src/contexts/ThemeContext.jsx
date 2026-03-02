import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useLayoutEffect(() => {
    console.log('ThemeContext: isDarkMode changed to', isDarkMode);
    
    // Update localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document root
    const root = document.documentElement;
    const body = document.body;
    
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      // Force apply styles with inline styles (highest specificity)
      body.style.setProperty('background-color', 'black', 'important');
      body.style.setProperty('color', 'white', 'important');
      body.style.setProperty('transition', 'background-color 0.5s, color 0.5s', 'important');
      body.style.setProperty('color-scheme', 'dark', 'important');
      console.log('Applied dark mode classes with inline styles');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      // Force apply styles with inline styles (highest specificity)
      body.style.setProperty('background-color', 'white', 'important');
      body.style.setProperty('color', 'black', 'important');
      body.style.setProperty('transition', 'background-color 0.5s, color 0.5s', 'important');
      body.style.setProperty('color-scheme', 'light', 'important');
      console.log('Applied light mode classes with inline styles');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('ThemeContext: Toggling theme from', isDarkMode, 'to', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

