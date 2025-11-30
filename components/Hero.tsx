import React, { useState } from 'react';
import { INTRO_TITLE, INTRO_SUBTITLE } from '../constants';
import { MessageSquare, X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <section id="home" className="pt-40 pb-20 flex flex-col items-center justify-center text-center px-4 relative">
      {/* Avatar Container */}
      <div className="mb-8 relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-gray-100">
          <img 
            src="https://super-jackie.oss-cn-guangzhou.aliyuncs.com/personal/cartoonavatar.png" 
            alt="Jackie Chen" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative elements behind avatar could go here */}
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl leading-tight">
        {INTRO_TITLE}
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed whitespace-pre-line mb-10">
        {INTRO_SUBTITLE}
      </p>

      {/* CTA Section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setShowQRCode(true)}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-100 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md active:scale-95"
        >
          <MessageSquare size={18} />
          <span>联系我的微信</span>
        </button>
        
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-700 dark:text-green-400">微信在线</span>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showQRCode && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowQRCode(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl max-w-sm w-full relative transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowQRCode(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">扫码添加微信</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">期待与您交流 AI 产品与技术</p>
            </div>
            
            <div className="aspect-square w-full bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700">
              <img 
                src="https://super-jackie.oss-cn-guangzhou.aliyuncs.com/personal/QRCode.png" 
                alt="WeChat QR Code" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mt-4 text-xs text-center text-gray-400">
              点击遮罩层关闭窗口
            </p>
          </div>
        </div>
      )}
    </section>
  );
};