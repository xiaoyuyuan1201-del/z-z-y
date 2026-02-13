import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Heart, 
  Users, 
  Lightbulb, 
  MessageCircle, 
  Clock,
  Target,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  ChevronRight,
  Quote
} from 'lucide-react';

const softSkills = [
  { icon: Lightbulb, title: '创意思维', description: '善于从不同角度思考问题，提出创新解决方案' },
  { icon: Users, title: '团队协作', description: '优秀的沟通能力，能与开发、产品团队高效配合' },
  { icon: Clock, title: '时间管理', description: '出色的项目管理能力，确保按时交付高质量作品' },
  { icon: Target, title: '用户导向', description: '始终以用户需求为核心，追求极致用户体验' },
  { icon: MessageCircle, title: '有效沟通', description: '清晰表达设计理念，善于收集和整合反馈意见' },
  { icon: Heart, title: '设计热情', description: '对设计充满热爱，持续学习探索设计前沿趋势' },
];

const interests = [
  '极简主义设计', '3D视觉艺术', '人工智能', '摄影', '音乐', '阅读'
];

const timeline = [
  {
    year: '2025',
    title: '即将毕业',
    subtitle: '视觉传达设计学士学位',
    description: '完成毕业设计，准备踏入职场',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2024',
    title: '设计实习',
    subtitle: '某知名互联网公司',
    description: '参与多个产品的UI设计与改版项目',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2023',
    title: '设计竞赛获奖',
    subtitle: '全国大学生设计大赛',
    description: '作品《未来城市》获得银奖',
    icon: Award,
    type: 'achievement'
  },
  {
    year: '2022',
    title: '开始探索3D设计',
    subtitle: '自学Blender与C4D',
    description: '将3D元素融入UI设计，形成独特风格',
    icon: Sparkles,
    type: 'milestone'
  },
  {
    year: '2021',
    title: '进入大学',
    subtitle: '视觉传达设计专业',
    description: '开启设计之旅，打下坚实专业基础',
    icon: GraduationCap,
    type: 'education'
  },
];

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
    caption: '工作台一角'
  },
  {
    url: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80',
    caption: '创作中'
  },
  {
    url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80',
    caption: '灵感来源'
  },
];

export default function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0);

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
            认识曾紫钰
          </h2>
        </motion.div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-light text-white">我的故事</h3>
            </div>
            
            <p className="text-neutral-400 font-light leading-relaxed">
              我是曾紫钰，一名即将于2025年毕业的UI设计师。从小对视觉艺术的热爱引领我走上了设计这条道路。
              在大学四年的学习中，我不仅掌握了扎实的设计理论基础，更在实践中不断探索和突破。
            </p>
            
            <p className="text-neutral-400 font-light leading-relaxed">
              我相信好的设计不仅仅是美观，更是要解决问题、创造价值。每一个像素的调整，每一次交互的优化，
              都承载着我对用户体验的执着追求。
            </p>

            <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-800 mt-8">
              <h4 className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-4">设计理念</h4>
              <p className="text-white font-light text-lg leading-relaxed italic">
                "简约而不简单，在克制中追求极致。让设计服务于人，而非让人迁就于设计。"
              </p>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-6"
            >
              <a 
                href="#"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-900 font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                下载我的简历 (PDF)
              </a>
              <p className="text-neutral-600 text-sm mt-3">最后更新: 2025年2月</p>
            </motion.div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Photo */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={photos[activePhoto].url}
                alt={photos[activePhoto].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-light">{photos[activePhoto].caption}</p>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhoto(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === index ? 'border-amber-400' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">软技能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{skill.title}</h4>
                      <p className="text-neutral-500 text-sm font-light">{skill.description}</p>
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
          className="mb-24 text-center"
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">成长历程</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className={`inline-block p-6 rounded-2xl bg-neutral-950 border border-neutral-800 ${
                        isEven ? 'md:ml-auto' : ''
                      }`}>
                        <span className="text-amber-400 text-sm font-medium">{item.year}</span>
                        <h4 className="text-white text-lg font-medium mt-1">{item.title}</h4>
                        <p className="text-neutral-400 text-sm mt-1">{item.subtitle}</p>
                        <p className="text-neutral-500 text-sm font-light mt-2">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 border-2 border-amber-400 flex items-center justify-center z-10">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}