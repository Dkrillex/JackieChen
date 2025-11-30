import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../constants';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredItems = FAQ_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">常见问题</h2>
        <p className="text-gray-500 dark:text-gray-400">
          关于我的AI产品服务与专业能力的常见问题解答
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 dark:border-gray-800 pb-1">
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-6 py-3 text-sm font-medium transition-all relative
              ${activeCategory === category 
                ? 'text-slate-900 dark:text-white' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
            `}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 dark:bg-white rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <div 
              key={item.id} 
              className="bg-gray-50 dark:bg-slate-900/50 rounded-lg overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-medium text-slate-900 dark:text-white pr-8">
                  {item.question}
                </span>
                <span className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
