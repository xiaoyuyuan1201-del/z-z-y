import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
              <span className="text-4xl font-light text-white">紫钰</span>
            </div>
          </div>
        </motion.div>
        
        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6"
        >
          曾紫钰
        </motion.h1>
        
        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 font-light tracking-wide mb-4"
        >
          UI设计师 · 2025届毕业生
        </motion.p>
        
        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
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
            href="#works"
            className="px-8 py-3 bg-white text-neutral-900 text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-all duration-300"
          >
            查看作品
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-neutral-700 text-neutral-300 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            联系我
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