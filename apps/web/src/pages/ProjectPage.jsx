import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { portfolioData } from '@/data/portfolioData.js';
import { Button } from '@/components/ui/button';

const ProjectPage = () => {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-32 min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tighter uppercase mb-8">NOT FOUND</h1>
            <Button asChild variant="outline" className="rounded-none tracking-widest uppercase font-bold">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 w-4 h-4" />
                RETURN TO ARCHIVE
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} - STUDIO`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Header />

      <main className="pt-40 pb-32 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Button asChild variant="link" className="mb-12 pl-0 text-muted-foreground hover:text-foreground tracking-widest uppercase text-xs font-bold">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 w-4 h-4" />
                BACK TO ARCHIVE
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
              <div className="lg:col-span-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-none">
                  {project.title}
                </h1>
                <p className="text-2xl font-light leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-8 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground block mb-2">CLIENT</span>
                  <span className="text-lg font-medium uppercase">{project.client}</span>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground block mb-2">CATEGORY</span>
                  <span className="text-lg font-medium uppercase">{project.category}</span>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground block mb-2">YEAR</span>
                  <span className="text-lg font-medium uppercase">{new Date(project.date).getFullYear()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-16">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="w-full bg-muted"
                >
                  <img
                    src={`${image}?w=1600&q=80&fit=crop`}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-32 text-center border-t border-border pt-20"
            >
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8">READY TO START?</h2>
              <Button asChild size="lg" className="rounded-none text-sm tracking-widest uppercase font-bold h-14 px-12">
                <Link to="/contact">INITIATE PROJECT</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;