import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import WorksSection from '@/components/portfolio/WorksSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a1f] via-[#1a0f2e] to-[#0f0a1f] relative">
      {/* 背景光效 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-30" />
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