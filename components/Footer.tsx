import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Jackie Chen. 保留所有权利。
        </p>
        <div className="flex items-center gap-6">
           <span className="text-sm text-gray-400">基于 React & Tailwind 开发</span>
        </div>
      </div>
    </footer>
  );
};