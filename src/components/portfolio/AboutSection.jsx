import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Heart, 
  Users, 
  Lightbulb, 
  MessageCircle, 
  Clock,
  Target,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Figma,
  Layers,
  Wand2,
  Image as ImageIcon,
  Film,
  Box
} from 'lucide-react';

const softSkills = [
  { icon: Lightbulb, title: 'UX设计', description: '用户研究、交互设计、原型设计' },
  { icon: Users, title: '用户体验', description: '以用户为中心的设计思维' },
  { icon: Clock, title: '动效设计', description: 'AE动效、Lottie动画' },
  { icon: Target, title: '场景建模', description: '3D场景搭建与渲染' },
  { icon: MessageCircle, title: 'AIGC', description: 'AI辅助设计与创作' },
  { icon: Heart, title: '团队协作', description: '高效沟通与项目推进' },
];

const tools = [
  { name: 'Figma', icon: Figma, color: 'from-purple-500 to-purple-600' },
  { name: 'Photoshop', icon: ImageIcon, color: 'from-blue-500 to-blue-600' },
  { name: 'Illustrator', icon: Wand2, color: 'from-orange-500 to-orange-600' },
  { name: 'After Effects', icon: Film, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Premiere', icon: Film, color: 'from-violet-500 to-violet-600' },
  { name: 'Blender', icon: Box, color: 'from-orange-400 to-orange-500' },
];

const workExperience = [
  {
    company: '元点共振天选科技',
    position: 'UX设计师',
    period: '2024.11-2025.3',
    highlights: [
      '独立牵头负责团队项目全流程推进（统筹全局）',
      '建立设计规范组件库，提供标准化设计资源，提升设计与开发协同效率（效率升级）',
      '主导FaithTime App从0-1搭建，确定业务核心价值，明确用户画像（产品落地）',
      '负责圣诞节线下教堂运营活动主视觉设计，完成主KV、线上线下邀请函（品牌输出）',
      '支撑业务快速迭代需求，高效完成多版本设计优化与落地（迭代提速）'
    ]
  },
  {
    company: '海康威视',
    position: '用户体验设计师',
    period: '2024.5-2024.9',
    highlights: [
      '参与团队竞品分析与设计评审工作，从用户体验、功能可行性、流行趋势等角度开展研究（产品升级）',
      '协同导师搭建海外室内机3.0项目设计规范与组件库，提升设计与开发协同效率（效率升级）',
      '负责安卓室内机2.0版本的持续优化迭代，结合真实用户反馈打磨产品体验（体验与交互升级）',
      '引入并推动AIGC技术辅助设计工作，优化设计全流程链路，大幅提升设计效率（效率升级）'
    ]
  }
];

const interests = [
  '极简主义设计', '3D视觉艺术', '人工智能', '摄影', '音乐', '阅读'
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-[#0a0612] to-[#050208] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]" />
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
            关于我
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
            自我介绍
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#0a0612]/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/10 shadow-2xl shadow-purple-500/5 sticky top-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/1c1b13e8f_image.png"
                    alt="曾紫钰"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Skill Tags */}
                <div className="absolute -right-2 top-8 flex flex-col gap-2">
                  {['UX设计', '用户体验', '动效设计', '场景建模', 'AIGC'].map((skill, i) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs bg-purple-500/80 text-white rounded-full backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Basic Info */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>年龄</span>
                  <span className="text-white">23岁 / 25届</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>学历</span>
                  <span className="text-white">本科</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>专业</span>
                  <span className="text-white">数字媒体艺术</span>
                </div>
                <div className="border-t border-purple-900/50 my-4" />
                <div className="flex items-center gap-2 text-neutral-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-white">18373296050</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-white text-xs">2944905483@qq.com</span>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-6 pt-6 border-t border-purple-500/10">
                <p className="text-neutral-500 text-xs mb-4 font-medium tracking-wider uppercase">熟练工具</p>
                <div className="grid grid-cols-3 gap-3">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <motion.div
                        key={tool.name}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group relative"
                      >
                        <div className={`aspect-square rounded-xl bg-gradient-to-br ${tool.color} p-3 flex flex-col items-center justify-center shadow-lg cursor-pointer`}>
                          <Icon className="w-6 h-6 text-white mb-1" />
                          <span className="text-[10px] text-white/90 font-medium text-center leading-tight">{tool.name}</span>
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">下载简历</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-light text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-purple-400" />
              工作经历
            </h3>

            {workExperience.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a0612]/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/10 shadow-xl shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-white text-lg font-medium">{work.company}</h4>
                    <p className="text-purple-400">{work.position}</p>
                  </div>
                  <span className="text-neutral-500 text-sm mt-2 md:mt-0">{work.period}</span>
                </div>
                <ul className="space-y-2">
                  {work.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">核心技能</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-[#0a0612]/80 backdrop-blur-xl border border-purple-500/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </motion.div>
                  <h4 className="text-white font-medium text-sm mb-1">{skill.title}</h4>
                  <p className="text-neutral-500 text-xs">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-light text-white mb-8">兴趣爱好</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-6 py-3 rounded-full border border-purple-500/20 bg-[#0a0612]/60 backdrop-blur-sm text-neutral-300 font-light hover:border-purple-400/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 cursor-default shadow-lg shadow-purple-500/5"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}