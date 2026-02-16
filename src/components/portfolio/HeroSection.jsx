import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Prism from './Prism';
import ShinyText from './ShinyText';

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
    <section className="flex flex-col justify-center items-center relative px-16 py-20" style={{ minHeight: 'calc(100vh - 100px)' }}>
      {/* 3D Prism Background */}
      <div className="absolute inset-0 overflow-hidden w-full h-full bg-gradient-to-b from-[#0C0518] to-[#0C0518]">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={2.7}
          baseWidth={5.5}
          scale={2.8}
          hueShift={320}
          colorFrequency={1}
          noise={0}
          glow={0.3}
          bloom={1.5} />

      </div>
      
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{ y: yOffset, opacity: opacityFade }}>

        {/* Avatar */}
        


















        
        {/* Main Title */}
        <h1 className="mb-8 text-7xl md:text-9xl font-bold tracking-tight cursor-default">
          <ShinyText
            text="PORTFOLIO"
            speed={2}
            delay={0}
            color="#ffffff"
            shineColor="#ffffff"
            spread={90}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-white"
          />
        </h1>
        
        {/* Name - Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.01, color: '#c084fc' }} className="text-neutral-300 mb-4 text-3xl font-normal tracking-wide md:text-4xl cursor-default transition-colors">曾紫钰



        </motion.p>
        
        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.01 }} className="text-neutral-400 mx-auto text-lg font-normal leading-relaxed md:text-xl max-w-2xl cursor-default transition-colors hover:text-neutral-300">专注UI交互设计、擅长3D建模、动效设计与AI创作。 热爱探索设计与技术的无限可能。




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
            className="px-8 py-3 bg-white text-black text-base font-medium tracking-wide rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 cursor-pointer min-w-[140px]">

            了解我
          </motion.a>
          <motion.a
            href="#works"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            onHoverStart={() => setHoveredButton('works')}
            onHoverEnd={() => setHoveredButton(null)}
            className="px-8 py-3 bg-[#161035] text-white text-base font-medium tracking-wide rounded-full hover:bg-[#1f1544] transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 cursor-pointer min-w-[140px]">

            查看作品
          </motion.a>
        </motion.div>
        </motion.div>

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
    </section>);


}