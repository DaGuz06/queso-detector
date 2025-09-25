import React, { useState } from 'react';

const CategoryButtons = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Detector de quesitos');
  
  const categories = ['Detector de quesitos'];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`category-button transition-all duration-300 ${
            activeCategory === category 
              ? 'border-green-500 bg-green-500/10 text-green-400 shadow-lg shadow-green-500/20' 
              : 'hover:border-green-500/50 hover:text-green-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;