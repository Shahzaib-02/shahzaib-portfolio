import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = 1;

  const blogPosts = [
    {
      id: 1,
      title: 'How to Create a Portfolio Website',
      excerpt: 'Learn the essential steps and tools needed to build a stunning portfolio website that showcases your work effectively.',
      date: 'Dec 19, 2024'
    },
    {
      id: 2,
      title: 'Top 10 Web Design Trends for 2024',
      excerpt: 'Discover the latest design trends that will shape the digital landscape in the coming year.',
      date: 'Feb 25, 2025'
    },
    {
      id: 3,
      title: 'Responsive Design Best Practices',
      excerpt: 'Master the art of creating websites that look great on any device or screen size.',
      date: 'May 10, 2025'
    }
  ];

  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  };
  return (
    <div className="min-h-screen text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
     
      

      <div className="container mx-auto px-4 z-10 relative pt-32">
        {/* Header */}
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-20 relative">
          {/* Background RESUME text */}
         
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold  uppercase ">
              My <span className="text-theme-yellow">Blog</span>
            </h1>
           
          </div>
        </AnimatedSection>
        <div className="w-32 h-1 mb-12  bg-theme-yellow mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPagePosts().map((post, index) => (
            <AnimatedSection key={post.id} direction="up" delay={index * 0.1} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/blog${post.id}/600/400`} 
                  alt="Blog Post" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-theme-yellow text-black font-bold px-3 py-1 text-sm rounded-br-lg">
                   WEB DESIGN
                </div>
              </div>
              <div className="p-6">
                {post.id <= 3 ? (
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-theme-yellow transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-bold mb-3 hover:text-theme-yellow transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                   <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-4 mt-12"
        >
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === pageNum
                      ? 'bg-theme-yellow text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        </motion.div>
        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default Blog;
