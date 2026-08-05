import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImageLazyLoad } from '@/hooks/useImageLazyLoad.js';

const PortfolioCard = ({ project, index = 0 }) => {
  const { imgRef, isLoaded, isInView, handleLoad } = useImageLazyLoad();
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-sm font-bold text-primary tracking-widest">{formattedIndex}</span>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <div className="relative overflow-hidden bg-muted aspect-[4/5] mb-4">
          <div ref={imgRef} className="w-full h-full">
            {isInView && (
              <img
                src={`${project.images[0]}?w=800&h=1000&fit=crop`}
                alt={project.title}
                onLoad={handleLoad}
                className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="flex justify-between items-center text-sm font-medium tracking-widest uppercase text-muted-foreground">
          <span>{project.category}</span>
          <span>{new Date(project.date).getFullYear()}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;