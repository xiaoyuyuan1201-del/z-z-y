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
    <div className="min-h-screen bg-[#06042D] relative overflow-hidden" ref={containerRef}>
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
        {/* 左侧紫色光束 - parallax effect */}
        <motion.div style={{ y: yParallax }} className="light-beam absolute top-0 left-1/4 -translate-x-1/2 w-96 h-full bg-gradient-to-b from-purple-500/5 via-purple-400/5 to-transparent blur-3xl" />
        
        {/* 右侧粉色光束 - parallax effect */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="light-beam absolute top-0 right-1/4 translate-x-1/2 w-96 h-full bg-gradient-to-b from-pink-500/5 via-pink-400/5 to-transparent blur-3xl"
          style={{ animationDelay: '1s' }} 
        />
        
        {/* 中心光晕 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="light-beam w-full h-96 bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-3xl" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* 地面光线强化 */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-600/5 via-transparent to-transparent blur-2xl opacity-20" />
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