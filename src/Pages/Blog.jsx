import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { FaClock, FaUser, FaTag, FaArrowRight, FaHeart, FaShareAlt } from 'react-icons/fa';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState({});
  const postsPerPage = 3;
  const totalPages = 1;

  const blogPosts = [
    {
      id: 1,
      title: 'How to Create a Portfolio Website',
      excerpt: 'Learn the essential steps and tools needed to build a stunning portfolio website that showcases your work effectively.',
      date: 'Dec 19, 2024',
      author: 'Shahzaib',
      category: 'Web Development',
      readTime: '5 min read',
      // tags: ['React', 'Portfolio', 'Design'],
      image: 'https://picsum.photos/seed/blog1/600/400'
    },
    {
      id: 2,
      title: 'Top 10 Web Design Trends for 2024',
      excerpt: 'Discover the latest design trends that will shape the digital landscape in the coming year.',
      date: 'Feb 25, 2025',
      author: 'Shahzaib',
      category: 'UI/UX Design',
      readTime: '8 min read',
      // tags: ['Design', 'Trends', 'UI'],
      image: 'https://picsum.photos/seed/blog2/600/400'
    },
    {
      id: 3,
      title: 'Responsive Design Best Practices',
      excerpt: 'Master the art of creating websites that look great on any device or screen size.',
      date: 'May 10, 2025',
      author: 'Shahzaib',
      category: 'Frontend',
      readTime: '6 min read',
      // tags: ['CSS', 'Responsive', 'Mobile'],
      image: 'https://picsum.photos/seed/blog3/600/400'
    }
  ];

  const handleLike = (e, postId) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleShare = (e, postId) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: blogPosts.find(p => p.id === postId)?.title,
        url: window.location.href + `/blog/${postId}`
      });
    }
  };

  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  };
  return (
    <div id="blog" className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">

      <div className="container mx-auto px-4 z-10 relative pt-32">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              My <span className="text-theme-yellow">Blog</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology
            </p>
          </div>
        </AnimatedSection>
        <div className="w-32 h-1 mb-12 bg-theme-yellow mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPagePosts().map((post, index) => (
            <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
              <Link to={`/blog/${post.id}`} className="block">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-theme-yellow text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleLike(e, post.id)}
                        className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg hover:bg-theme-yellow hover:text-black transition-colors"
                      >
                        <FaHeart className={likedPosts[post.id] ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleShare(e, post.id)}
                        className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg hover:bg-theme-yellow hover:text-black transition-colors"
                      >
                        <FaShareAlt className="text-gray-600 dark:text-gray-300" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-theme-yellow" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-theme-yellow" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-theme-yellow transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    {/* <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p> */}

                    {/* Tags */}
                     {/* <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-theme-yellow hover:text-black transition-colors cursor-pointer"
                        >
                          <FaTag className="inline mr-1 text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-theme-yellow font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read More
                      </span>
                      <motion.div
                        className="w-10 h-10 bg-theme-yellow rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaArrowRight className="text-black" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-4 mt-16 mb-20"
        >
          <div className="flex gap-3">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <motion.button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 ${
                    currentPage === pageNum
                      ? 'bg-theme-yellow text-black shadow-lg shadow-yellow-500/30'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-md'
                  }`}
                >
                  {pageNum}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        {/* <AnimatedSection direction="up" delay={0.8} className="mb-20">
          <div className="bg-gradient-to-r from-theme-yellow to-yellow-400 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </div>
  );
};

export default Blog;
