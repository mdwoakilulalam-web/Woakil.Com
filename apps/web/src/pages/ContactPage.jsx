import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - STUDIO</title>
        <meta name="description" content="Get in touch with our creative studio." />
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
              INITIATE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-snug">
              New projects, press inquiries, or general correspondence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-muted/30 p-8 md:p-12 border border-border">
                <h2 className="text-2xl font-bold tracking-tighter uppercase mb-8">PROJECT INQUIRY</h2>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 space-y-16"
            >
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">DIRECT CONTACT</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@studio.com" className="block text-2xl font-medium hover:text-primary transition-colors">
                    HELLO@STUDIO.COM
                  </a>
                  <a href="tel:+15551234567" className="block text-2xl font-medium hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">HEADQUARTERS</h3>
                <address className="not-italic text-xl font-light leading-relaxed">
                  100 CREATIVE WAY<br />
                  SUITE 400<br />
                  NEW YORK, NY 10001
                </address>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">SOCIAL</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-primary transition-colors">
                    INSTAGRAM
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-primary transition-colors">
                    LINKEDIN
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;