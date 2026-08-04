import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import ProjectGrid from '@/components/ProjectGrid.jsx';
import { portfolioData } from '@/data/portfolioData.js';
import { usePortfolioFilter } from '@/hooks/usePortfolioFilter.js';

const PortfolioPage = () => {
  const { activeCategory, setActiveCategory, filteredProjects } = usePortfolioFilter(portfolioData);

  return (
    <>
      <Helmet>
        <title>Archive - STUDIO</title>
        <meta name="description" content="Complete archive of creative direction and editorial design projects." />
      </Helmet>

      <Header />

      <main className="pt-40 pb-32 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-24 border-b border-border pb-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
              ARCHIVE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-snug">
              A comprehensive index of our visual explorations, brand identities, and editorial campaigns.
            </p>
          </motion.div>

          <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          <ProjectGrid projects={filteredProjects} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;