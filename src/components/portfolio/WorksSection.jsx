import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const categories = ['全部', 'UI设计', '建模', '动效设计', 'AI作品'];

export default function WorksSection({ projects, isLoading }) {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === '全部' ?
  projects :
  projects.filter((p) => {
    if (activeCategory === '动效设计') return p.category === '动效设计' || p.category === '动效';
    return p.category === activeCategory;
  });

  return (
    <section id="works" className="bg-gradient-to-b py-24 px-16 from-[#0C0518] to-[#0C0518]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
            作品集
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
            精选作品
          </h2>
        </motion.div>
        
        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16">

          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-light rounded-full transition-all duration-300 ${
            activeCategory === category ?
            'bg-white text-neutral-900' :
            'text-neutral-400 hover:text-white border border-purple-900/50 hover:border-neutral-600'}`
            }>

              {category}
            </button>
          )}
        </motion.div>
        
        {/* Projects Grid */}
        {isLoading ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
          <div key={i} className="aspect-[4/3] rounded-2xl bg-purple-900/20 animate-pulse" />
          )}
          </div> :
        filteredProjects.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) =>
          <ProjectCard key={project.id} project={project} index={index} onOpenModal={setSelectedProject} />
          )}
          </div> :

        <div className="text-center py-20">
            <p className="text-neutral-500 font-light">暂无作品</p>
          </div>
        }

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)} />

      </div>
    </section>);

}