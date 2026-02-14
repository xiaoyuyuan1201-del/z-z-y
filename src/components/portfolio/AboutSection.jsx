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
                <p className="text-neutral-300 text-xs font-semibold mb-5 tracking-widest uppercase">熟练工具</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 flex items-center justify-center group hover:border-purple-400/60 hover:bg-purple-500/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/figma/A259FF" alt="Figma" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-purple-300 transition-colors font-medium">Figma</div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-700/5 border border-blue-600/30 flex items-center justify-center group hover:border-blue-500/60 hover:bg-blue-600/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/adobephotoshop/31A8FF" alt="Photoshop" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-blue-300 transition-colors font-medium">PS</div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 flex items-center justify-center group hover:border-orange-400/60 hover:bg-orange-500/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/adobeillustrator/FF9A00" alt="Illustrator" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-orange-300 transition-colors font-medium">AI</div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/30 flex items-center justify-center group hover:border-indigo-400/60 hover:bg-indigo-500/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/adobeaftereffects/9999FF" alt="After Effects" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-indigo-300 transition-colors font-medium">AE</div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-violet-600/10 to-violet-700/5 border border-violet-600/30 flex items-center justify-center group hover:border-violet-500/60 hover:bg-violet-600/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/adobepremierepro/9999FF" alt="Premiere Pro" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-violet-300 transition-colors font-medium">PR</div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-400/10 to-orange-500/5 border border-orange-400/30 flex items-center justify-center group hover:border-orange-300/60 hover:bg-orange-400/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-400/20">
                    <div className="text-center">
                      <img src="https://cdn.simpleicons.org/blender/F5792A" alt="Blender" className="w-9 h-9 mb-1.5 mx-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                      <div className="text-[10px] text-neutral-400 group-hover:text-orange-200 transition-colors font-medium">Blender</div>
                    </div>
                  </div>
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
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center border border-purple-500/30">
                <Briefcase className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-3xl font-light text-white tracking-tight">工作经历</h3>
            </div>

            {workExperience.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-gradient-to-br from-[#0f0a1f]/90 via-[#1a0f2e]/80 to-[#0f0a1f]/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 shadow-xl shadow-purple-900/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h4 className="text-white text-xl font-semibold mb-2 group-hover:text-purple-200 transition-colors">{work.company}</h4>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">{work.position}</span>
                      </div>
                    </div>
                    <span className="text-neutral-400 text-sm mt-3 md:mt-0 font-medium bg-neutral-800/30 px-4 py-2 rounded-full border border-neutral-700/30">{work.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {work.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed group/item">
                        <span className="text-purple-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  className="p-6 rounded-2xl bg-[#0a0514]/90 backdrop-blur-xl border border-purple-900/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
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