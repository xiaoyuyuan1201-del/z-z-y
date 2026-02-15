import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '#' },
    { name: '关于我', href: '#about' },
    { name: '项目集', href: '#works' },
    { name: '联系方式', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0514]/95 backdrop-blur-xl border-b border-purple-900/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-semibold text-lg tracking-wider">
          PORTFOLIO
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}