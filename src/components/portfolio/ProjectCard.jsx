import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Content on hover */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-amber-400 text-xs font-medium tracking-wider uppercase mb-2">
                {project.category || '项目'}
              </p>
              <h3 className="text-white text-xl font-light mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm font-light line-clamp-2">
                {project.description}
              </p>
            </div>
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-neutral-900 text-xs font-medium rounded-full">
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
  );
}