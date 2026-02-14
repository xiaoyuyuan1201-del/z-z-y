import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-[#1a0f2e] to-[#0a0514] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
            联系
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-6">
            一起创造精彩
          </h2>
          <p className="text-neutral-500 font-light max-w-xl mx-auto">
            无论是项目合作、工作机会还是只是想聊聊，都欢迎与我联系。
          </p>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0f0a1f]/80 rounded-3xl p-8 md:p-12 border border-purple-900/50"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <a 
              href="mailto:hello@example.com"
              className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-800/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-1">邮箱</p>
                <p className="text-white font-light group-hover:text-purple-400 transition-colors">
                  hello@example.com
                </p>
              </div>
            </a>
            
            {/* Location */}
            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-1">位置</p>
                <p className="text-white font-light">
                  中国 · 北京
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mb-12">
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-neutral-900 font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              发送邮件
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-purple-900/50 flex items-center justify-center text-neutral-500 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}