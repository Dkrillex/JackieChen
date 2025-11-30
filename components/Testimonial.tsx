import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gray-50 dark:bg-slate-900/50 transition-colors overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Quote Icon - Static */}
        <div className="flex justify-center mb-8">
          <Quote size={48} className="text-gray-300 dark:text-gray-600 fill-current" />
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden">
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                 {/* Quote Text */}
                <blockquote className="mb-10 relative">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
                    <img 
                      src={testimonial.authorImage} 
                      alt={testimonial.authorName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonial.authorName}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.authorCompany} {testimonial.authorRole}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-slate-900 dark:bg-white scale-110'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`查看评价 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};