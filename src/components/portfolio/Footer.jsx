import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-16 bg-[#0C0518] border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 text-sm font-light">
          © {currentYear} 曾紫钰. 保留所有权利.
        </p>
        
        <p className="text-neutral-700 text-sm font-light">
          用 ♥ 精心打造
        </p>
      </div>
    </footer>
  );
}