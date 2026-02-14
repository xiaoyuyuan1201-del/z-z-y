import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1035] via-[#2d1f4e] to-[#0f0a1f]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2
          }}
          className="mb-8 relative"
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 w-32 h-32 mx-auto"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 opacity-50 blur-sm" />
          </motion.div>
          
          <motion.div
            className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[2px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full bg-[#1a1035] flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-4xl font-light text-white relative z-10">曾</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Name */}
        <motion.div className="mb-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extralight text-white tracking-tight relative inline-block"
          >
            {['曾', '紫', '钰'].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{
                  scale: 1.2,
                  color: '#c084fc',
                  transition: { duration: 0.2 }
                }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
          </motion.h1>
        </motion.div>
        
        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-lg md:text-xl text-neutral-300 font-light tracking-wide">
              UI设计师 · 2025届毕业生
            </span>
          </div>
        </motion.div>
        
        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
        >
          {['专注UI设计、3D建模、动效设计与AI创作。', '热爱探索设计与技术的无限可能。'].map((text, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 + i * 0.2 }}
              className="block"
            >
              {text}
            </motion.span>
          ))}
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <motion.a
            href="#about"
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium tracking-wide rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">了解我</span>
          </motion.a>
          <motion.a
            href="#works"
            className="group relative px-8 py-3 border-2 border-purple-500/50 text-neutral-300 text-sm font-medium tracking-wide rounded-full overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(168, 85, 247, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-purple-500/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors">查看作品</span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500 group-hover:text-purple-400 transition-colors">向下滚动</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-2"
            whileHover={{ borderColor: 'rgba(168, 85, 247, 0.6)' }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}