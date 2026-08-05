import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/portfolioData.js';

const FilterBar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 relative pb-2 ${
            activeCategory === category
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;