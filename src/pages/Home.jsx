import React, { useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useScroll, useTransform } from 'framer-motion';

import { motion } from 'framer-motion';

import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import WorksSection from '@/components/portfolio/WorksSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
  });

  return (
    <div className="min-h-screen bg-[#0C0518] relative overflow-hidden" ref={containerRef}>
      {/* 全局鼠标跟随光效 */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          width: '600px',
          height: '600px',
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(132, 0, 255, 0.12) 0%, rgba(132, 0, 255, 0.06) 30%, rgba(132, 0, 255, 0.02) 60%, transparent 70%)',
          mixBlendMode: 'screen',
          transition: 'left 0.08s ease-out, top 0.08s ease-out',
        }}
      />
      {/* 舞台灯光背景效果 */}
      <style>{`
        @keyframes lightPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        .light-beam {
          animation: lightPulse 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左上方紫色光束 - spotlight effect */}
        <motion.div 
          style={{ y: yParallax }} 
          className="light-beam absolute -top-20 left-[15%] w-[500px] h-[160%] bg-gradient-to-b from-purple-400/[0.12] via-purple-500/[0.06] to-transparent blur-3xl rotate-12" 
        />
        
        {/* 右上方紫色光束 - spotlight effect */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="light-beam absolute -top-20 right-[15%] w-[500px] h-[160%] bg-gradient-to-b from-purple-400/[0.12] via-purple-500/[0.06] to-transparent blur-3xl -rotate-12"
          style={{ animationDelay: '1s' }} 
        />
        
        {/* 底部中心强烈紫色光辉 - stage glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-purple-300/[0.16] via-purple-400/[0.12] to-transparent blur-3xl" />
        
        {/* 底部扩散光 - platform glow */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-purple-500/[0.08] via-purple-400/[0.04] to-transparent blur-2xl" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorksSection projects={projects} isLoading={isLoading} />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}