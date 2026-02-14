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
  GraduationCap
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
  { name: 'Figma', color: 'bg-purple-500' },
  { name: 'Photoshop', color: 'bg-blue-600' },
  { name: 'Illustrator', color: 'bg-orange-500' },
  { name: 'After Effects', color: 'bg-indigo-500' },
  { name: 'Premiere', color: 'bg-violet-600' },
  { name: 'Blender', color: 'bg-orange-400' },
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
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-[#0a0514] to-[#000000]">
      <div className="max-w-7xl mx-auto">
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
            <div className="relative bg-gradient-to-br from-[#0f0a1f]/90 via-[#1a0f2e]/80 to-[#0f0a1f]/90 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-900/20 sticky top-8 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-50" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Avatar */}
              <div className="relative mb-10 z-10">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/30">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-black/20">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/1c1b13e8f_image.png"
                      alt="曾紫钰"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Elegant corners */}
                <div className="absolute -top-4 -right-4 w-20 h-20">
                  <div className="w-full h-full border-t-2 border-r-2 border-purple-400/40 rounded-tr-3xl" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20">
                  <div className="w-full h-full border-b-2 border-l-2 border-pink-400/40 rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>

              {/* Basic Info */}
              <div className="relative space-y-5 text-sm mb-8 z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="text-neutral-400 text-xs uppercase tracking-wider mb-2 font-light">年龄</div>
                    <div className="text-white font-semibold text-lg">23岁</div>
                    <div className="text-purple-300 text-xs mt-0.5">25届</div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-4 border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                    <div className="text-neutral-400 text-xs uppercase tracking-wider mb-2 font-light">学历</div>
                    <div className="text-white font-semibold text-lg">本科</div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-pink-500/5 rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-2 font-light">专业</div>
                  <div className="text-white font-semibold">数字媒体艺术</div>
                </div>
                
                {/* Elegant divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a href="tel:18373296050" className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-500/5 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                      <Phone className="w-4 h-4 text-purple-300" />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs mb-0.5">联系电话</div>
                      <div className="text-white text-sm font-medium">18373296050</div>
                    </div>
                  </a>
                  <a href="mailto:2944905483@qq.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-500/5 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-pink-500/20">
                      <Mail className="w-4 h-4 text-pink-300" />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs mb-0.5">邮箱地址</div>
                      <div className="text-white text-xs font-medium break-all">2944905483@qq.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Tools */}
              <div className="relative pt-6 border-t border-purple-500/20 z-10">
                <h4 className="text-white text-base font-medium mb-5">技能工具</h4>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects', 'Blender', 'Midjourney', 'Stable Diffusion', 'Framer'].map((tool) => (
                    <span
                      key={tool}
                      className="px-5 py-2.5 rounded-full border border-neutral-700/50 text-neutral-300 text-sm hover:border-purple-400/50 hover:text-white hover:bg-purple-500/5 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <a 
                href="#"
                className="relative mt-8 w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-300 group overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10 tracking-wide">下载完整简历</span>
              </a>
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
            <h3 className="text-2xl font-light text-white mb-8">工作经历</h3>

            {workExperience.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-purple-500/30"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-white text-xl font-medium mb-1">{work.company}</h4>
                    <p className="text-purple-400 text-sm">{work.position}</p>
                  </div>
                  <span className="text-neutral-500 text-sm mt-2 md:mt-0">{work.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {work.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm leading-relaxed">
                      <span className="text-purple-400 mt-1.5">·</span>
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
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0f0a1f]/90 to-[#1a0f2e]/80 backdrop-blur-xl border border-purple-500/30 group-hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 text-center h-full">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-purple-200 transition-colors">{skill.title}</h4>
                      <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300 transition-colors">{skill.description}</p>
                    </div>
                  </div>
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
                className="px-5 py-2 rounded-full border border-neutral-700 text-neutral-300 font-light hover:border-purple-400 hover:text-purple-400 transition-colors cursor-default"
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