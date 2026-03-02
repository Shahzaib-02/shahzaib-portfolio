import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export const WipeTransition = ({ children }) => {
  const { isDarkMode } = useTheme();
  const c1 = isDarkMode ? '#000000' : '#ffffff';
  const c2 = '#ffb400';
  const c3 = isDarkMode ? '#000000' : '#ffffff';
  const c4 = '#ffb400';

  return (
    <div className="relative">
      {/* Black layer moving right to left */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "50%", "100%"] }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ backgroundColor: c1 }}
        className="fixed inset-0 z-[103] pointer-events-none"
      />
      {/* Yellow layer moving right to left */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "50%", "100%"] }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.05
        }}
        style={{ backgroundColor: c2 }}
        className="fixed inset-0 z-[102] pointer-events-none"
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "50%", "100%"] }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
        style={{ backgroundColor: c3 }}
        className="fixed inset-0 z-[101] pointer-events-none"
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "50%", "100%"] }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.15
        }}
        style={{ backgroundColor: c4 }}
        className="fixed inset-0 z-[100] pointer-events-none"
      />
      {children}
    </div>
  );
};

export default PageTransition;
