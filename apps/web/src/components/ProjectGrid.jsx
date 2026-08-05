import React from 'react';
import PortfolioCard from '@/components/PortfolioCard.jsx';

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-32">
        <p className="text-muted-foreground text-xl font-medium tracking-widest uppercase">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
      {projects.map((project, index) => (
        <div key={project.id} className={index % 2 === 1 ? 'md:mt-32' : ''}>
          <PortfolioCard project={project} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;