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
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3]">
          {/* Image */}
          {project.image_url ? (
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
              <span className="text-6xl font-extralight text-neutral-700">
                {project.title?.charAt(0) || 'P'}
              </span>
            </div>
          )}
          
          {/* Video Play Button */}
          {hasVideo && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideo(true);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" />
              </div>
            </button>
          )}
        

        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              精选
            </span>
          </div>
        )}
        
        {/* Year */}
        {project.year && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-neutral-400 text-sm font-light">
              {project.year}
            </span>
          </div>
        )}
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