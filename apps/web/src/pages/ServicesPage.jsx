import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
  const services = [
    'WEB DESIGN',
    'SOCIAL MEDIA EXPERT',
    'AI CONTENT CREATION',
    'CREATIVE DIRECTION',
    'CANVA DESIGN',
    'CONTENT PRODUCT'
  ];

  return (
    <>
      <Helmet>
        <title>Capabilities - STUDIO</title>
        <meta name="description" content="Our core capabilities and creative services." />
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
              CAPABILITIES
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-snug">
              We operate at the intersection of design, technology, and culture to build brands that matter.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-border py-12 md:py-16 flex items-center justify-between cursor-pointer hover:bg-foreground hover:text-background transition-colors duration-300 px-4 -mx-4"
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="text-sm md:text-lg font-bold text-primary tracking-widest mt-2 md:mt-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase m-0 leading-none">
                    {service}
                  </h2>
                </div>
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 bg-foreground text-background p-12 md:p-24 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              REQUIRE A CUSTOM SOLUTION?
            </h2>
            <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto font-light">
              We partner with ambitious teams to solve complex creative challenges.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center h-14 px-12 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-bold hover:bg-background hover:text-foreground transition-colors"
            >
              START A CONVERSATION
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;