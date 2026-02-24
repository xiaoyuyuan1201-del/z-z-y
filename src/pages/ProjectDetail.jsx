import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import ImageLightbox from '@/components/portfolio/ImageLightbox';
import { createPageUrl } from '@/utils';

export default function ProjectDetail() {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const searchParams = new URLSearchParams(location.search);
  const projectId = searchParams.get('id');
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      try {
        const projects = await base44.entities.Project.filter({ id: projectId });
        if (projects.length > 0) {
          setProject(projects[0]);
        }
      } catch (error) {
        console.error('Failed to load project:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0C0518] to-[#0C0518] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0C0518] to-[#0C0518] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">作品未找到</h2>
          <Link 
            to={createPageUrl('Home')}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C0518] to-[#0C0518] relative">
      {/* 全局鼠标跟随光效 */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          width: '600px',
          height: '600px',
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(132, 0, 255, 0.12) 0%, rgba(132, 0, 255, 0.06) 30%, rgba(132, 0, 255, 0.02) 60%, transparent 70%)',
          mixBlendMode: 'screen',
          transition: 'left 0.08s ease-out, top 0.08s ease-out',
        }}
      />
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0C0518]/80 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
          <Link 
            to={createPageUrl('Home')}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>返回</span>
          </Link>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all text-sm font-medium"
            >
              查看项目
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="pl-[100px] pr-10 py-16" id="main-content">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {project.image_url ? (
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-neutral-900">
              <img 
                src={project.image_url} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
              <span className="text-9xl font-extralight text-neutral-700">
                {project.title?.charAt(0) || 'P'}
              </span>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-12">
              {project.description && project.description !== '点击编辑此内容，添加项目描述'
                ? project.description
                : project.title === 'AIGC 七夕节运营设计'
                  ? '情人节作为年度高关注度节日节点，具有强情绪属性与表达需求。围绕"爱与陪伴"的主题，我们策划本次情人节限定活动，通过节日氛围营造与互动机制设计，增强用户参与感与情绪共鸣，提升节日期间的活跃度与品牌好感度。'
                  : project.title === 'AIGC 万圣节运营设计'
                  ? '随着全球化的进程，万圣节也逐渐被世界各地的年轻人所接受和喜爱，成为一个充满趣味和创意的节日。在这一天，人们通过各种活动来庆祝，包括化妆舞会、南瓜灯制作比赛、鬼故事分享会等，旨在享受节日带来的欢乐和刺激。'
                  : project.description}
            </p>

            {/* Video Section */}
            {project.video_url && (
              <div className="mb-12">
                <h3 className="text-2xl font-light text-white mb-6">项目演示</h3>
                <div className="rounded-2xl overflow-hidden bg-neutral-900 aspect-video">
                  <video 
                    src={project.video_url} 
                    controls
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-6">
              {/* Project Info Card */}
              <div className="bg-gradient-to-br from-[#0f0a1f]/90 to-[#1a0f2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-medium text-white mb-6">项目信息</h3>
                
                <div className="space-y-4">
                  {project.category && (
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">分类</p>
                        <p className="text-white">{project.category}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.year && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">年份</p>
                        <p className="text-white">{project.year}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.featured && (
                    <div className="pt-4 border-t border-purple-500/20">
                      <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                        ⭐ 精选作品
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <div className="bg-gradient-to-br from-[#0f0a1f]/90 to-[#1a0f2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-lg font-medium text-white mb-4">使用工具</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-4 py-2 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Images Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="pl-[100px] pr-10 mt-16">
          <h3 className="text-2xl font-light text-white mb-6">项目详图</h3>
          <div className="space-y-0">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} - ${idx + 1}`}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}