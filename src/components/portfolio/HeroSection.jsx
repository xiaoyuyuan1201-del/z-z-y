import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/7cfd25b7c_.png"
          alt="Portfolio Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-32">
        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <a 
            href="#about"
            className="px-8 py-3 bg-white/90 text-neutral-900 text-sm font-medium tracking-wide rounded-full hover:bg-white transition-all duration-300 backdrop-blur-sm"
          >
            了解我
          </a>
          <a 
            href="#works"
            className="px-8 py-3 border border-white/30 text-white text-sm font-medium tracking-wide rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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