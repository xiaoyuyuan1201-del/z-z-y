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
    <section id="about" className="py-32 px-6 bg-neutral-900">
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
            <div className="bg-neutral-950 rounded-3xl p-6 border border-neutral-800 sticky top-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                    alt="曾紫钰"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
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
                <div className="border-t border-neutral-800 my-4" />
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
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-neutral-500 text-xs mb-3">熟练工具</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span 
                      key={tool.name}
                      className={`px-3 py-1 text-xs text-white rounded-md ${tool.color}`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <a 
                href="#"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-900 font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                下载简历
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
            <h3 className="text-2xl font-light text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-amber-400" />
              工作经历
            </h3>

            {workExperience.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 rounded-2xl p-6 border border-neutral-800"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-white text-lg font-medium">{work.company}</h4>
                    <p className="text-amber-400">{work.position}</p>
                  </div>
                  <span className="text-neutral-500 text-sm mt-2 md:mt-0">{work.period}</span>
                </div>
                <ul className="space-y-2">
                  {work.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                      <span className="text-amber-400 mt-1">•</span>
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
                  className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 transition-colors text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-amber-400" />
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
                className="px-5 py-2 rounded-full border border-neutral-700 text-neutral-300 font-light hover:border-amber-400 hover:text-amber-400 transition-colors cursor-default"
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