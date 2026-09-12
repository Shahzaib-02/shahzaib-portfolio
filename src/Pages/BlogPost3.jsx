import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaCode,
  FaImage,
  FaHandPointer,
  FaTachometerAlt,
  FaVial,
  FaLayerGroup,
  FaCheckCircle,
  FaPalette,
  FaUniversalAccess,
  FaRocket,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const BlogPost3 = () => {
  const navigate = useNavigate();

  const practices = [
    {
      id: "01",
      icon: <FaMobileAlt />,
      category: "FOUNDATION",
      title: "Start With Mobile-First Design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
      description:
        "Mobile-first development means designing the smallest useful experience first and progressively enhancing it for tablets, laptops, and larger screens. Instead of removing features from a desktop design, you build a focused foundation and expand it intentionally.",
      code: `/* Base: Mobile */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin-inline: auto;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}`,
      tips: [
        "Design the smallest useful experience first",
        "Use min-width breakpoints for progressive enhancement",
        "Prioritize important content on smaller screens",
        "Avoid assuming every user has a large display",
        "Test on physical mobile devices when possible",
      ],
    },

    {
      id: "02",
      icon: <FaLayerGroup />,
      category: "LAYOUT",
      title: "Build With Flexible Layout Systems",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=800&fit=crop",
      description:
        "Modern responsive layouts should rely on flexible CSS rather than manually positioning every element. CSS Grid and Flexbox allow components to adapt naturally as available space changes.",
      code: `/* Responsive card grid */
.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Flexible navigation */
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}`,
      tips: [
        "Use Grid for two-dimensional layouts",
        "Use Flexbox for one-dimensional layouts",
        "Prefer fr, %, rem and auto over fixed widths",
        "Use gap for predictable spacing",
        "Consider container queries for reusable components",
      ],
    },

    {
      id: "03",
      icon: <FaDesktop />,
      category: "TYPOGRAPHY",
      title: "Use Fluid Typography",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      description:
        "Typography should adapt to the available viewport instead of jumping between a small number of fixed breakpoint values. CSS clamp() makes it possible to define a minimum, fluid preferred value, and maximum size.",
      code: `/* Fluid heading */
h1 {
  font-size: clamp(
    2rem,
    4vw + 1rem,
    4rem
  );
}

/* Fluid paragraph */
p {
  font-size: clamp(
    1rem,
    1vw + 0.8rem,
    1.25rem
  );

  line-height: 1.7;
}`,
      tips: [
        "Use rem for scalable accessible sizing",
        "Use clamp() for fluid heading sizes",
        "Keep paragraphs comfortable to read",
        "Avoid extremely long text lines",
        "Test layouts at increased browser zoom",
      ],
    },

    {
      id: "04",
      icon: <FaImage />,
      category: "MEDIA",
      title: "Optimize Images for Every Screen",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
      description:
        "Images can easily become one of the largest resources on a web page. Responsive image techniques allow browsers to select an appropriate image based on screen size and resolution.",
      code: `<img
  src="/images/hero-800.webp"
  srcSet="
    /images/hero-400.webp 400w,
    /images/hero-800.webp 800w,
    /images/hero-1200.webp 1200w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 80vw,
    1200px
  "
  alt="Product dashboard"
  loading="lazy"
/>`,
      tips: [
        "Prefer modern formats such as WebP or AVIF",
        "Use srcSet for responsive image delivery",
        "Lazy-load images below the initial viewport",
        "Reserve image dimensions to reduce layout shifts",
        "Use picture for art-direction requirements",
      ],
    },

    {
      id: "05",
      icon: <FaHandPointer />,
      category: "INTERACTION",
      title: "Design Touch-Friendly Interfaces",
      image:
        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1200&h=800&fit=crop",
      description:
        "Touch interaction is fundamentally different from mouse interaction. Users need comfortable targets, clear feedback, and alternatives to interactions that depend entirely on hover.",
      code: `/* Comfortable interactive target */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 20px;
}

/* Hover only when supported */
@media (hover: hover) {
  .button:hover {
    transform: translateY(-2px);
  }
}

/* Touch feedback */
.button:active {
  transform: scale(0.98);
}`,
      tips: [
        "Keep interactive targets comfortably sized",
        "Do not rely only on hover interactions",
        "Give users visible interaction feedback",
        "Avoid placing important controls too close together",
        "Make gestures optional rather than mandatory",
      ],
    },

    {
      id: "06",
      icon: <FaTachometerAlt />,
      category: "PERFORMANCE",
      title: "Make Responsive Performance a Priority",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      description:
        "Responsive design is more than adapting dimensions. A responsive application should also adapt its resource usage. Mobile users may have slower networks, smaller devices, and more limited processing resources.",
      code: `/* Defer rendering of expensive sections */
.heavy-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

/* Reserve media space */
.media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}`,
      tips: [
        "Lazy-load expensive resources",
        "Optimize JavaScript bundles",
        "Avoid unnecessary API requests",
        "Reserve dimensions for media",
        "Measure performance on mobile hardware",
      ],
    },

    {
      id: "07",
      icon: <FaVial />,
      category: "QUALITY ASSURANCE",
      title: "Test Beyond Browser DevTools",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
      description:
        "A layout that looks perfect inside browser developer tools may still behave differently on real hardware. Device testing helps identify issues involving touch input, keyboard behavior, browser differences, performance, and orientation changes.",
      code: `Responsive test matrix:

320px   → Small mobile
375px   → Standard mobile
414px   → Large mobile
768px   → Tablet
1024px  → Laptop / tablet landscape
1440px  → Desktop
1920px  → Large desktop

Also test:
- Portrait
- Landscape
- 100% zoom
- 200% zoom
- Slow network`,
      tips: [
        "Test multiple viewport sizes",
        "Check both portrait and landscape",
        "Test keyboard navigation",
        "Test zoom up to 200%",
        "Use real devices when available",
      ],
    },

    {
      id: "08",
      icon: <FaCode />,
      category: "ARCHITECTURE",
      title: "Use Progressive Enhancement",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
      description:
        "Progressive enhancement starts with a reliable core experience and adds advanced capabilities when the environment supports them. This approach creates applications that are more resilient across browsers and devices.",
      code: `/* Reliable foundation */
.card {
  padding: 1rem;
  border: 1px solid #ddd;
}

/* Enhanced layout */
@supports (display: grid) {
  .card {
    display: grid;
    gap: 1rem;
    border: 0;
    box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  }
}

/* Modern enhancement */
@supports (container-type: inline-size) {
  .card {
    container-type: inline-size;
  }
}`,
      tips: [
        "Keep essential functionality reliable",
        "Use feature detection instead of browser guessing",
        "Provide sensible fallbacks",
        "Respect reduced-motion preferences",
        "Do not make JavaScript mandatory for every interaction",
      ],
    },
  ];

  const workflow = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile",
      text: "Create the core experience",
    },
    {
      icon: <FaTabletAlt />,
      title: "Tablet",
      text: "Expand the layout",
    },
    {
      icon: <FaDesktop />,
      title: "Desktop",
      text: "Use available space",
    },
  ];

  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-[-180px] w-[400px] h-[400px] rounded-full bg-theme-yellow/10 blur-3xl" />
        <div className="absolute top-[50%] right-[-200px] w-[450px] h-[450px] rounded-full bg-theme-yellow/5 blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/#blog")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-theme-yellow transition-colors font-medium"
          >
            <FaArrowLeft />
            Back to Blog
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-gray-400">
            <FaCode />
            Frontend Engineering
          </div>
        </div>
      </motion.nav>

      <main className="container mx-auto px-4 relative z-10 pt-28 pb-24">

        {/* Hero */}
        <AnimatedSection
          direction="up"
          delay={0.1}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-yellow/10 dark:bg-theme-yellow/20 text-theme-yellow text-sm font-semibold mb-7">
            <FaMobileAlt />
            FRONTEND DEVELOPMENT GUIDE
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] mb-7">
            Responsive Web Design
            <br />
            <span className="text-theme-yellow">
              Best Practices
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
            A practical guide to building responsive, accessible and
            production-ready interfaces that work beautifully across mobile,
            tablet and desktop devices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              Sep 12, 2026
            </span>

            <span className="flex items-center gap-2">
              <FaUser />
              SHAHZAIB
            </span>

            <span className="flex items-center gap-2">
              <FaClock />
              14 min read
            </span>
          </div>

          <div className="w-24 h-1 bg-theme-yellow mx-auto rounded-full" />
        </AnimatedSection>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-6xl mx-auto mt-14 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
        >
          <div className="relative h-[300px] md:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop"
              alt="Developers designing responsive web interfaces"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Responsive UI",
                  "CSS",
                  "React",
                  "UX",
                  "Performance",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="max-w-2xl text-sm md:text-base text-gray-200">
                Build interfaces that adapt naturally to different screens,
                input methods and device capabilities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Device Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mt-10 mb-20"
        >
          <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
            {workflow.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center p-5 md:p-7 ${
                  index !== workflow.length - 1
                    ? "border-r border-gray-200 dark:border-gray-800"
                    : ""
                }`}
              >
                <div className="text-theme-yellow text-2xl md:text-3xl mb-3">
                  {item.icon}
                </div>

                <h3 className="font-bold mb-1">
                  {item.title}
                </h3>

                <p className="hidden md:block text-xs text-gray-500 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Introduction */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-4xl mx-auto mb-28"
        >
          <div className="border-l-4 border-theme-yellow pl-6 md:pl-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Responsive design is not simply about making a website
              "shrink" on smaller screens. A truly responsive application
              adapts its{" "}
              <span className="text-theme-yellow font-semibold">
                layout, typography, media, interactions and performance
              </span>{" "}
              according to the environment in which it is being used.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mt-5">
              The best responsive interfaces feel intentional on every device.
              They do not look like a desktop page that was compressed to fit
              a phone.
            </p>
          </div>
        </AnimatedSection>

        {/* Quick Principles */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-6xl mx-auto mb-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <FaMobileAlt />,
                title: "Adapt",
                text: "Let layouts respond naturally to available space.",
              },
              {
                icon: <FaTachometerAlt />,
                title: "Optimize",
                text: "Deliver only the resources users actually need.",
              },
              {
                icon: <FaUniversalAccess />,
                title: "Include",
                text: "Make interfaces usable across devices and abilities.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-xl bg-theme-yellow/10 flex items-center justify-center text-theme-yellow text-xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Practices */}
        <div className="max-w-6xl mx-auto space-y-32">

          {practices.map((practice, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={practice.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >

                {/* Section Number */}
                <div className="absolute -top-5 left-0 md:-left-4 z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-theme-yellow text-black flex items-center justify-center font-bold text-lg md:text-xl shadow-xl border-4 border-white dark:border-gray-950">
                    {practice.id}
                  </div>
                </div>

                <div className="pt-12">

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-theme-yellow/10 dark:bg-theme-yellow/20 text-theme-yellow text-xl">
                      {practice.icon}
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] text-theme-yellow">
                        {practice.category}
                      </span>

                      <h2 className="text-2xl md:text-4xl font-bold uppercase mt-1">
                        {practice.title}
                      </h2>
                    </div>
                  </div>

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >

                    {/* Image */}
                    <motion.div
                      whileHover={{ y: -7 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-2 bg-theme-yellow/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative h-[280px] md:h-[390px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
                        <img
                          src={practice.image}
                          alt={practice.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-theme-yellow flex items-center justify-center text-black">
                            <FaCheckCircle />
                          </div>

                          <span className="text-white text-sm font-semibold">
                            Production-ready principle
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-7">
                        {practice.description}
                      </p>

                      {/* Code */}
                      <div className="rounded-2xl overflow-hidden bg-gray-950 border border-gray-800 shadow-xl">
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />

                          <span className="ml-2 text-xs text-gray-500 font-mono">
                            responsive.css
                          </span>
                        </div>

                        <pre className="p-5 overflow-x-auto max-h-[320px]">
                          <code className="text-sm text-gray-300 font-mono whitespace-pre">
                            {practice.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mt-10">
                    <div className="flex items-center gap-2 mb-5">
                      <FaTools className="text-theme-yellow" />

                      <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-gray-400">
                        Practical Tips
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {practice.tips.map((tip, tipIndex) => (
                        <motion.div
                          key={tipIndex}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: tipIndex * 0.06,
                            duration: 0.4,
                          }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-theme-yellow/50 transition-colors"
                        >
                          <FaCheckCircle className="text-theme-yellow shrink-0 mt-1" />

                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {tip}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Architecture Section */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-6xl mx-auto mt-32"
        >
          <div className="rounded-3xl bg-gray-950 text-white p-8 md:p-12 overflow-hidden relative">

            <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] rounded-full bg-theme-yellow/10 blur-3xl" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-4">
                <FaPalette className="text-theme-yellow text-2xl" />

                <span className="text-theme-yellow text-sm font-bold tracking-[0.2em]">
                  RESPONSIVE ARCHITECTURE
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-5">
                Think Beyond Breakpoints
              </h2>

              <p className="text-gray-400 max-w-3xl leading-relaxed mb-10">
                Responsive engineering becomes much easier when components
                are designed around content and available space rather than a
                long list of device-specific breakpoints.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "Content",
                    text: "Start with semantic structure and meaningful content.",
                  },
                  {
                    title: "Container",
                    text: "Let components respond to the space available to them.",
                  },
                  {
                    title: "Capability",
                    text: "Enhance the experience based on device capabilities.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <h3 className="text-theme-yellow font-bold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Checklist */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-5xl mx-auto mt-28"
        >
          <div className="rounded-3xl border border-theme-yellow/20 bg-theme-yellow/5 dark:bg-theme-yellow/[0.03] p-8 md:p-12">

            <div className="text-center mb-10">
              <FaCheckCircle className="text-theme-yellow text-4xl mx-auto mb-5" />

              <h2 className="text-3xl md:text-4xl font-bold uppercase">
                Responsive Launch Checklist
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Run through these checks before shipping your next interface.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Mobile-first layout implemented",
                "No unwanted horizontal scrolling",
                "Flexible Grid or Flexbox layout",
                "Fluid typography where appropriate",
                "Responsive images implemented",
                "Touch interactions are comfortable",
                "Keyboard navigation works",
                "Images and assets are optimized",
                "Reduced-motion preference is respected",
                "Tested across multiple viewport sizes",
                "Important content remains accessible",
                "Performance checked on mobile",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <FaCheckCircle className="text-theme-yellow shrink-0" />

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-4xl mx-auto mt-28"
        >
          <div className="relative overflow-hidden rounded-3xl bg-theme-yellow/10 dark:bg-theme-yellow/5 border border-theme-yellow/20 p-8 md:p-14 text-center">

            <div className="absolute top-[-100px] right-[-80px] w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <FaLightbulb className="text-theme-yellow text-4xl mx-auto mb-6" />

              <h3 className="text-2xl md:text-4xl font-bold uppercase mb-5">
                Responsive Is a Mindset
              </h3>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                Great responsive interfaces are not created by adding dozens
                of media queries at the end of a project. They are created by
                making better decisions from the beginning—flexible layouts,
                accessible interactions, optimized assets, fluid typography
                and thoughtful component architecture.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => navigate("/#projects")}
                  className="px-7 py-3 bg-theme-yellow text-black font-bold rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FaRocket />
                  View My Projects
                </button>

                <button
                  onClick={() => navigate("/#blog")}
                  className="px-7 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-theme-yellow hover:text-theme-yellow transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FaArrowLeft />
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="pb-10" />
      </main>
    </div>
  );
};

export default BlogPost3;