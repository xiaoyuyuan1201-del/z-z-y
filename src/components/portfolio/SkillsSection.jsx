import React from 'react';
import { motion } from 'framer-motion';
import MagicBento from './MagicBento';

const skills = [
{
  color: '#0f0a1f',
  title: '动效设计',
  description: '为界面注入生命力与流畅体验',
  label: 'Motion'
},
{
  color: '#0f0a1f',
  title: '3D 建模',
  description: '构建精致的三维模型与场景',
  label: '3D'
},
{
  color: '#0f0a1f',
  title: 'UI/UX 设计',
  description: '创造直觉、优雅的用户界面与交互体验',
  label: 'UI/UX'
},
{
  color: '#0f0a1f',
  title: 'AI 创作',
  description: '运用AI工具探索设计新边界',
  label: 'AI'
},
{
  color: '#0f0a1f',
  title: '视觉设计',
  description: '平面设计与品牌视觉系统',
  label: 'Visual'
},
{
  color: '#0f0a1f',
  title: '原型交互',
  description: '高保真原型与交互设计',
  label: 'Prototype'
}];


export default function SkillsSection() {
  return (
    <section className="bg-gradient-to-b py-24 px-6 md:px-16 from-[#0C0518] to-[#0C0518]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
            技能
          </p>
          <h2 className="text-white text-4xl font-extralight tracking-tight md:text-5xl">我的专长

          </h2>
        </motion.div>

        {/* Skills Grid with MagicBento */}
        <div className="flex justify-center">
          <MagicBento
            cardData={skills}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableStars={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true} />

        </div>
      </div>
    </section>);

}