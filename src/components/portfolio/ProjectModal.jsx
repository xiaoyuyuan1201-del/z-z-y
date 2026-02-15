import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-[#0f0a1f]/95 to-[#001a3d]/95 backdrop-blur-xl rounded-3xl border border-cyan-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-900/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Image */}
              {project.image_url && (
                <div className="relative mb-8 rounded-2xl overflow-hidden aspect-video">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-purple-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        精选项目
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
                  {project.category || '项目'}
                </p>
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                  {project.title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {project.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-neutral-400 text-sm">{project.year}</span>
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <span>查看原文件</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Description */}
                {project.description && (
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Tools */}
              {project.tools?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                    使用工具
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm font-light hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              {project.details && (
                <div className="pt-8 border-t border-cyan-500/20">
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                    项目详情
                  </h3>
                  <p className="text-neutral-400 leading-relaxed whitespace-pre-wrap">
                    {project.details}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}