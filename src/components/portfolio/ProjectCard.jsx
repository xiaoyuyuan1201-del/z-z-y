import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ProjectCard({ project, index, onOpenModal }) {
  const [showVideo, setShowVideo] = useState(false);
  const hasVideo = project.video_url;
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(createPageUrl('ProjectDetail') + '?id=' + project.id);
  };
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-purple-500/20 p-8 aspect-[4/3] flex flex-col">
          {/* Category Icon - Top Left */}
          <div className="absolute top-6 left-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <div className="w-6 h-6 text-purple-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h20M2 6h20M2 18h20" />
                </svg>
              </div>
            </div>
          </div>

          {/* Arrow Button - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-700/50 hover:bg-neutral-600/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </button>

          {/* Video Play Button - Center */}
          {hasVideo && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideo(true);
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" />
              </div>
            </button>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                精选
              </span>
            </div>
          )}

          {/* Preview Image - Center */}
          {project.image_url && (
            <div className="flex-1 flex items-center justify-center">
              <img 
                src={project.image_url} 
                alt={project.title}
                className="max-h-[60%] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content - Bottom */}
          <div className="mt-auto">
            <p className="text-purple-400 text-xs font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-4 h-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </span>
              {project.category || '项目'}
            </p>
            
            <h3 className="text-white text-xl font-medium mb-2">
              {project.title}
            </h3>
            
            <p className="text-neutral-400 text-sm font-light line-clamp-2 mb-4">
              {project.description}
            </p>
            
            {project.tools?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm bg-transparent border border-neutral-600 rounded-lg text-neutral-400">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    
    {/* Video Modal */}
    {showVideo && hasVideo && (
      <div 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setShowVideo(false)}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-neutral-300"
          onClick={() => setShowVideo(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div 
          className="w-full max-w-4xl aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <video 
            src={project.video_url} 
            controls 
            autoPlay
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    )}
    </>
  );
}