import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { clientLogos } from '@/data/clientLogos.js';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - woakil world</title>
        <meta name="description" content="Our story, approach, and the team behind the studio." />
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
              MY JOURNEY IN WEB DEVELOPMENT
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-snug">
              My journey began with curiosity and has grown through continuous learning, practical projects, and exploring modern web technologies such as HTML, CSS, JavaScript, React, Node.js, and Tailwind CSS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-muted relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598"
                alt="woakil direction"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
                  JOURNEY BEYOND LIMITS
                </h2>
                <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
                  <p>
                    I'm Woakil, a passionate student and aspiring Full-Stack Web Developer. I specialize in building modern, responsive, and user-focused websites that combine clean design with high performance.
                  </p>
                  <p>
                    Every project helps me improve my skills, solve real-world problems, and build digital experiences that are fast, accessible, and visually engaging.
                  </p>
                  <p>
                   From responsive portfolio websites to dynamic web applications, my goal is to create digital experiences that are fast, accessible, visually engaging, and built to make a lasting impact.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-border">
                  <div>
                    <span className="text-5xl font-bold tracking-tighter block mb-2">02</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">YEARS ACTIVE</span>
                  </div>
                  <div>
                    <span className="text-5xl font-bold tracking-tighter block mb-2">08</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TECHNOLOGIES</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-12 text-center">
              SELECTED PARTNERS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-center">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full max-w-[160px] h-12 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center border-t border-border pt-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              JOIN THE ROSTER
            </h2>
            <Button asChild size="lg" className="rounded-none text-sm tracking-widest uppercase font-bold h-14 px-12">
              <Link to="/contact">CONTACT MY WORLD</Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;