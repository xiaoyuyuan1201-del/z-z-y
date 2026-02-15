import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Prism from './Prism';

export default function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0.3]);

  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -2 }
  };

  const textVariants = {
    rest: { opacity: 1, letterSpacing: '0em' },
    hover: { opacity: 0.9, letterSpacing: '0.05em' }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20">
      {/* Container with limited width */}
      <div className="w-full max-w-6xl mx-auto px-12">
      {/* 3D Prism Background */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={2.5}
          baseWidth={5.5}
          scale={2.8}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={2}
          bloom={1.5} />

      </div>
      
      
      <motion.div 
        className="relative z-10 text-center w-full"
        style={{ y: yOffset, opacity: opacityFade }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          className="mb-8 group">

          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[2px] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/50 to-pink-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative w-full h-full rounded-full bg-[#1a1035] flex items-center justify-center">
              <span className="text-4xl font-light text-white">曾</span>
            </div>
          </div>
        </motion.div>
        
        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, letterSpacing: '0.05em' }}
          className="text-6xl md:text-8xl font-extralight text-white tracking-tight mb-6 cursor-default">

          曾紫钰
        </motion.h1>
        
        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.01, color: '#c084fc' }}
          className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide mb-4 cursor-default transition-colors">

          UI设计师 · 2025届毕业生
        </motion.p>
        
        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light cursor-default transition-colors hover:text-neutral-300">

          专注UI设计、3D建模、动效设计与AI创作。
          热爱探索设计与技术的无限可能。
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex gap-4 justify-center">

          <motion.a
            href="#about"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            onHoverStart={() => setHoveredButton('about')}
            onHoverEnd={() => setHoveredButton(null)}
            className="px-8 py-4 bg-white text-neutral-900 text-base font-medium tracking-wide rounded-lg hover:bg-neutral-100 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 cursor-pointer">

            了解我
          </motion.a>
          <motion.a
            href="#works"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            onHoverStart={() => setHoveredButton('works')}
            onHoverEnd={() => setHoveredButton(null)}
            className="px-8 py-4 border border-neutral-700 text-neutral-300 text-base font-medium tracking-wide rounded-lg hover:border-purple-400 hover:text-purple-300 transition-all duration-300 shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">

            查看作品
          </motion.a>
        </motion.div>
        </motion.div>
      </div>

        {/* Scroll indicator */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

          <ArrowDown className="w-5 h-5 text-neutral-600" />
        </motion.div>
        </motion.div>
    </section>
  );

}