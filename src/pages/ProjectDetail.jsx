import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Tag, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function ProjectDetail() {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const searchParams = new URLSearchParams(location.search);
  const projectId = searchParams.get('id');
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-b from-[#0C0518] to-[#0C0518] relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
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

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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

        {/* PDF全宽展示区（如果有PDF，放在网格外面） */}
        {project.pdf_url && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-white">项目文档</h3>
              <a
                href={project.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                新标签页打开
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-neutral-900" style={{ height: '100vh' }}>
              <object
                data={project.pdf_url}
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(project.pdf_url)}&embedded=true`}
                  className="w-full h-full border-0"
                  title="项目文档"
                />
              </object>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-12">
              {project.description}
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

            {/* Images Gallery Section */}
            {project.images && project.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-light text-white mb-6">项目详图</h3>
                <div className="relative">
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl overflow-hidden bg-neutral-900"
                  >
                    <img 
                      src={project.images[imageIndex]} 
                      alt={`${project.title} - ${imageIndex + 1}`}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setImageIndex((imageIndex - 1 + project.images.length) % project.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={() => setImageIndex((imageIndex + 1) % project.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

                      <div className="flex justify-center gap-2 mt-4">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === imageIndex ? 'bg-purple-500 w-8' : 'bg-neutral-600 w-2 hover:bg-neutral-500'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}


          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
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
    </div>
  );
}