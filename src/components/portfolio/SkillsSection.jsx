import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Camera, PenTool, Layers, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX 设计',
    description: '创造直觉、优雅的用户界面与交互体验',
    tools: ['Figma', 'Sketch', 'Adobe XD']
  },
  {
    icon: Layers,
    title: '3D 建模',
    description: '构建精致的三维模型与场景',
    tools: ['Blender', 'C4D', '3ds Max']
  },
  {
    icon: Sparkles,
    title: '动效设计',
    description: '为界面注入生命力与流畅体验',
    tools: ['After Effects', 'Principle', 'Lottie']
  },
  {
    icon: PenTool,
    title: 'AI 创作',
    description: '运用AI工具探索设计新边界',
    tools: ['Midjourney', 'Stable Diffusion', 'DALL·E']
  },
  {
    icon: Camera,
    title: '视觉设计',
    description: '平面设计与品牌视觉系统',
    tools: ['Photoshop', 'Illustrator']
  },
  {
    icon: Code,
    title: '原型交互',
    description: '高保真原型与交互设计',
    tools: ['Figma', 'ProtoPie', 'Framer']
  }
];

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#0a0612] to-[#1a0f2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
            技能
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
            我的专长
          </h2>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#0a0612]/80 backdrop-blur-xl border border-purple-500/10 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-light text-white mb-3">
                  {skill.title}
                </h3>
                
                <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 text-xs font-light text-neutral-400 bg-purple-900/30 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}