import { useState, useMemo } from 'react';

export const usePortfolioFilter = (portfolioData) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return portfolioData;
    }
    return portfolioData.filter(project => project.category === activeCategory);
  }, [portfolioData, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredProjects
  };
};