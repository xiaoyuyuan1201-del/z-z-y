import React from 'react';
import { motion } from 'framer-motion';

const interests = [
  '极简主义设计', '3D视觉艺术', '人工智能', '摄影', '音乐', '阅读'
];

export default function InterestSection() {
  return (
    <section className="py-20 px-16 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-light text-white mb-12"
        >
          兴趣爱好
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {interests.map((interest, index) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-5 py-2 rounded-full border border-neutral-700 text-neutral-300 font-light hover:border-purple-400 hover:text-purple-400 transition-colors cursor-default"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}