import React from 'react';
import { ABOUT_SECTIONS, POLAROID_IMAGES, EXPERIENCE_DATA } from '../constants';
import { Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">关于我</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            了解更多关于我作为波士顿 AI 产品专家与全栈开发者的旅程、我的设计理念以及我对创造直观数字体验的热情。
          </p>
        </div>

        {/* Intro Section with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {ABOUT_SECTIONS.intro.title.split(',')[0]}, <br className="hidden md:block"/>
              <span className="text-blue-600 dark:text-blue-400">
                {ABOUT_SECTIONS.intro.title.split(',')[1]}
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {ABOUT_SECTIONS.intro.content}
            </p>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
             {/* Profile Image with Blue Arc Background */}
            <div className="relative w-64 h-72">
               {/* Blue Arc */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-600 rounded-t-full opacity-90 z-0 scale-110 translate-y-4"></div>
               {/* Image Container */}
               <div className="relative z-10 w-full h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-700">
                  <img 
                    src="https://super-jackie.oss-cn-guangzhou.aliyuncs.com/personal/avatar.png" 
                    alt="Jackie Chen Profile" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-12">
          {/* Philosophy */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{ABOUT_SECTIONS.philosophy.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ABOUT_SECTIONS.philosophy.content}
            </p>
          </div>

          {/* Drive */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{ABOUT_SECTIONS.drive.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ABOUT_SECTIONS.drive.content}
            </p>
          </div>

          {/* Personal / Beyond Screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{ABOUT_SECTIONS.personal.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ABOUT_SECTIONS.personal.content}
            </p>
          </div>
        </div>

        {/* Polaroids */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-10 pb-10">
          {POLAROID_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`bg-white p-3 pb-8 shadow-lg transform transition-transform hover:scale-105 hover:z-10 duration-300 ${img.rotation} w-60 max-w-full`}
            >
              <div className="aspect-square w-full overflow-hidden mb-3 bg-gray-100">
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-handwriting text-gray-600 font-medium text-sm">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Original Work Experience (Kept for content completeness but styled minimally) */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">工作经历</h3>
          <div className="max-w-2xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            {EXPERIENCE_DATA.map((item) => (
              <div key={item.id} className="relative flex items-start group">
                <div className="absolute left-0 top-1 mt-1 ml-5 -translate-x-1/2 md:mx-auto md:translate-x-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 transition-colors z-10 shadow-sm"></div>
                <div className="pl-12 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                     <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h4>
                     <span className="text-sm text-gray-400 tabular-nums font-medium">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="#" className={`font-medium hover:underline flex items-center gap-1 transition-colors ${item.companyColor || 'text-slate-900 dark:text-white'}`}>
                      {item.company}
                      {item.isLink && <Building2 size={12} className="opacity-50" />}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};