import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import { portfolioData } from '@/data/portfolioData.js';
import { testimonialsData } from '@/data/testimonialsData.js';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const featuredProjects = portfolioData.filter(project => project.featured).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>STUDIO - Creative Direction & Design</title>
        <meta name="description" content="Modern editorial design and creative direction studio." />
      </Helmet>

      <Header />

      <section className="min-h-[100dvh] flex flex-col justify-center pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm md:text-base mb-6">
            Creative Studio Elite Designs
          </h2>
          <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase mb-12 break-words">
            PORTFOLIO<br />
            <span className="text-stroke">EDITION</span>
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-border pt-8">
            <p className="text-xl md:text-2xl max-w-xl font-light leading-snug">
              We craft bold, geometric, and unapologetic visual identities for brands that refuse to blend in.
            </p>
            <Button asChild size="lg" className="rounded-none text-sm tracking-widest uppercase font-bold h-14 px-8">
              <Link to="/portfolio">
                Explore Work
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20 border-b border-border pb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
              Selected<br />Works
            </h2>
            <span className="text-primary font-bold tracking-widest hidden md:block">2025—2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={index % 2 === 1 ? 'md:mt-32' : ''}>
                <PortfolioCard project={project} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-none text-sm tracking-widest uppercase font-bold h-14 px-12 border-2 hover:bg-foreground hover:text-background transition-colors">
              <Link to="/portfolio">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
              Client<br />Voices
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl font-light">
              Collaborations built on trust, bold ideas, and uncompromising execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {testimonialsData.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;