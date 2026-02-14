import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Prism from './Prism';

export default function HeroSection() {
  const [currentPreset, setCurrentPreset] = useState(0);

  const presets = [
    { name: '青蓝渐变', hueShift: 3.5, glow: 3.5, bloom: 2.5 },
    { name: '紫粉梦幻', hueShift: 0, glow: 2, bloom: 1.5 },
    { name: '橙红热情', hueShift: 5.5, glow: 3, bloom: 2 },
  ];

  const handleBackgroundClick = () => {
    setCurrentPreset((prev) => (prev + 1) % presets.length);
  };

  const preset = presets[currentPreset];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-16 py-20">
      {/* 3D Prism Background */}
      <div 
        className="absolute inset-0 overflow-hidden w-full h-full cursor-pointer group"
        onClick={handleBackgroundClick}
      >
        <Prism
          animationType="hover"
          timeScale={0.3}
          height={2.5}
          baseWidth={6.5}
          scale={3.5}
          hueShift={preset.hueShift}
          colorFrequency={0.8}
          noise={0.1}
          glow={preset.glow}
          bloom={preset.bloom}
        />
        {/* Click hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm text-purple-200">点击切换背景</span>
        </motion.div>
      </div>
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0514]/80 via-[#1a0f2e]/80 to-[#0a0514]/80" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 group"
        >
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[2px] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/50 to-pink-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
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
          className="text-6xl md:text-8xl font-extralight text-white tracking-tight mb-6"
        >
          曾紫钰
        </motion.h1>
        
        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide mb-4"
        >
          UI设计师 · 2025届毕业生
        </motion.p>
        
        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          专注UI设计、3D建模、动效设计与AI创作。
          热爱探索设计与技术的无限可能。
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <a 
            href="#about"
            className="px-8 py-4 bg-white text-neutral-900 text-base font-medium tracking-wide rounded-lg hover:bg-neutral-200 transition-all duration-300"
          >
            了解我
          </a>
          <a 
            href="#works"
            className="px-8 py-4 border border-neutral-700 text-neutral-300 text-base font-medium tracking-wide rounded-lg hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            查看作品
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}