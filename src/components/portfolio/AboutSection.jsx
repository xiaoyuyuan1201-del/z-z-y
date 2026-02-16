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
  GraduationCap } from
'lucide-react';

const softSkills = [
{ icon: Lightbulb, title: 'UX设计', description: '用户研究、交互设计、原型设计' },
{ icon: Users, title: '用户体验', description: '以用户为中心的设计思维' },
{ icon: Clock, title: '动效设计', description: 'AE动效、Lottie动画' },
{ icon: Target, title: '场景建模', description: '3D场景搭建与渲染' },
{ icon: MessageCircle, title: 'AIGC', description: 'AI辅助设计与创作' },
{ icon: Heart, title: '团队协作', description: '高效沟通与项目推进' }];


const tools = [
{ name: 'Figma', color: 'bg-purple-500' },
{ name: 'Photoshop', color: 'bg-blue-600' },
{ name: 'Illustrator', color: 'bg-orange-500' },
{ name: 'After Effects', color: 'bg-indigo-500' },
{ name: 'Premiere', color: 'bg-violet-600' },
{ name: 'Blender', color: 'bg-orange-400' }];


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
  '支撑业务快速迭代需求，高效完成多版本设计优化与落地（迭代提速）']

},
{
  company: '海康威视',
  position: '用户体验设计师',
  period: '2024.5-2024.9',
  highlights: [
  '参与团队竞品分析与设计评审工作，从用户体验、功能可行性、流行趋势等角度开展研究（产品升级）',
  '协同导师搭建海外室内机3.0项目设计规范与组件库，提升设计与开发协同效率（效率升级）',
  '负责安卓室内机2.0版本的持续优化迭代，结合真实用户反馈打磨产品体验（体验与交互升级）',
  '引入并推动AIGC技术辅助设计工作，优化设计全流程链路，大幅提升设计效率（效率升级）']

}];


const interests = [
'极简主义设计', '3D视觉艺术', '人工智能', '摄影', '音乐', '阅读'];


export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b px-16 py-20 from-[#0C0518] to-[#0C0518]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">

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
            className="lg:col-span-1">

            <div className="relative bg-gradient-to-br from-[#0f0a1f]/90 via-[#1a0f2e]/80 to-[#0f0a1f]/90 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-900/20 sticky top-8 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-50" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Avatar */}
              <div className="relative mb-10 z-10">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/30">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-black/20">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/1c1b13e8f_image.png"
                      alt="曾紫钰"
                      className="w-full h-full object-cover" />

                  </div>
                </div>
                {/* Elegant corners */}
                <div className="absolute -top-4 -right-4 w-20 h-20">
                  <div className="w-full h-full border-t-2 border-r-2 border-purple-400/40 rounded-tr-3xl" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20">
                  <div className="w-full h-full border-b-2 border-l-2 border-pink-400/40 rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Basic Info */}
              <div className="relative space-y-3 text-sm mb-8 z-10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br pt-1 pr-3 pb-1 pl-3 rounded-xl group relative from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1 font-light">年龄</div>
                    <div className="text-white font-semibold text-base">23岁</div>
                    
                  </div>
                  <div className="bg-gradient-to-br pt-1 pr-3 pb-1 pl-3 rounded-xl group relative from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300">
                    <div className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1 font-light">学历</div>
                    <div className="text-white font-semibold text-base">本科</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br pt-1 pr-3 pb-1 pl-3 rounded-xl group relative from-purple-500/10 via-purple-600/5 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1 font-light">专业</div>
                  <div className="text-white font-semibold text-sm">数字媒体艺术</div>
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
                  {['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects', 'Blender', 'Midjourney', 'Stable Diffusion', 'Framer'].map((tool) =>
                  <span
                    key={tool}
                    className="px-5 py-2.5 rounded-full border border-neutral-700/50 text-neutral-300 text-sm hover:border-purple-400/50 hover:text-white hover:bg-purple-500/5 transition-all duration-300 cursor-default">

                      {tool}
                    </span>
                  )}
                </div>
              </div>

              {/* Resume Download */}
              <a
                href="#"
                className="relative mt-8 w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-300 group overflow-hidden z-10">

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
            transition={{ duration: 0.6 }} className="px-1 lg:col-span-2 space-y-6">


            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center border border-purple-500/30">
                <Briefcase className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-3xl font-light text-white tracking-tight">工作经历</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />
              
              {workExperience.map((work, index) =>
              <motion.div
                key={work.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} className="pb-20 pl-8 relative last:pb-0">


                  {/* Timeline dot */}
                  <div className="bg-purple-500 rounded-full absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border-2 border-[#0C0518] shadow-lg shadow-purple-500/50" />
                  
                  {/* Period badge */}
                  <div className="bg-purple-500/10 text-purple-300 mb-4 px-4 py-2 text-xs font-medium rounded-full inline-block border border-purple-500/30">
                    {work.period}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-white mr-3 mb-1 text-2xl font-semibold">{work.company}</h4>
                  <p className="text-neutral-400 mt-2 mb-4 text-sm">{work.position}</p>
                  
                  <ul className="space-y-2">
                    {work.highlights.map((highlight, i) =>
                  <li key={i} className="text-neutral-50 text-sm leading-relaxed rounded flex items-start gap-3">
                        <span className="text-purple-400 mt-1.5 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        <span className="text-base font-normal text-left">{highlight}</span>
                      </li>
                  )}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* QR Codes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-6">

              {[
              { title: '微信', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/6887c93c3_image.png' },
              { title: 'QQ', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/8895641cc_image.png' },
              { title: '小红书', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698ddbdd72ba750ccf34f1a0/67df34e9c_image.png' }].
              map((qr, index) =>
              <div
                key={qr.title}
                className="relative group">

                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="bg-gradient-to-br mt-4 px-6 py-6 rounded-2xl relative from-[#0f0a1f]/90 to-[#1a0f2e]/80 backdrop-blur-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-500">
                    <div className="aspect-square bg-white rounded-xl mb-4 overflow-hidden">
                      <img
                      src={qr.image}
                      alt={qr.title}
                      className="w-full h-full object-cover" />

                    </div>
                    <p className="text-center text-white text-sm font-medium">{qr.title}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        








































        {/* Interests */}
        






















      </div>
    </section>);

}