import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Camera, PenTool, Layers, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX 设计',
    description: '创造直觉、优雅的用户界面与体验',
    tools: ['Figma', 'Sketch', 'Adobe XD']
  },
  {
    icon: Code,
    title: '前端开发',
    description: '构建响应式、高性能的网页应用',
    tools: ['React', 'Vue', 'TypeScript']
  },
  {
    icon: Layers,
    title: '品牌设计',
    description: '塑造独特、令人难忘的品牌形象',
    tools: ['Illustrator', 'Photoshop']
  },
  {
    icon: Camera,
    title: '摄影',
    description: '捕捉瞬间，讲述视觉故事',
    tools: ['Lightroom', 'Capture One']
  },
  {
    icon: PenTool,
    title: '插画设计',
    description: '手绘与数字插画创作',
    tools: ['Procreate', 'Illustrator']
  },
  {
    icon: Sparkles,
    title: '动效设计',
    description: '为界面注入生命力',
    tools: ['After Effects', 'Framer Motion']
  }
];

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
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
                className="group p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-amber-400" />
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
                      className="px-3 py-1 text-xs font-light text-neutral-400 bg-neutral-900 rounded-full"
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