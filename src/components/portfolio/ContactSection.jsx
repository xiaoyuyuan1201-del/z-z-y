import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const tools = [
  'Figma', 'Sketch', 'Adobe XD', 'Photoshop',
  'Illustrator', 'After Effects', 'Blender', 'Midjourney',
  'Stable Diffusion', 'Framer'
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-16 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-6">
              关于我
            </p>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
              让我们一起创造更多可能
            </h2>
            
            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              2025届毕业生，热爱 UI 设计与数字创意。在校期间深入学习了用户界面设计、三维建模、动效制作等技能，并积极探索 AI 在设计领域的应用。
            </p>
            
            <p className="text-neutral-400 text-base leading-relaxed mb-12">
              我相信优秀的设计不仅仅是视觉上的美观，更是能够解决决问题、传递情感、创造价值的工具。期待与你一起创造有意义的数字体验。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:hello@designer.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-purple-400 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>hello@designer.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="w-5 h-5" />
                <span>中国 · 深圳</span>
              </div>
              
              <a 
                href="#"
                className="flex items-center gap-3 text-neutral-300 hover:text-purple-400 transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Behance / Dribbble / 站酷</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Tools */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">技能工具</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-sm hover:border-purple-400 hover:text-white transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                开放合作 <span className="text-purple-400">+</span>
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                目前正在寻找 UI 设计师的全职岗位。也欢迎自由项目合作，如果你对我的作品感兴趣，欢迎随时联系！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}