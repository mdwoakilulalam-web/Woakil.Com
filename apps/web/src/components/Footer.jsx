import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <span className="text-4xl font-bold tracking-tighter uppercase font-['Space_Grotesk'] mb-6 block">
              W.WORLD<span className="text-primary">.</span>
            </span>
            <p className="text-lg text-background/70 max-w-md font-light">
             We turn ideas into bold identities, thoughtful experiences, and digital work that stands apart.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-6 block text-background/50">Navigation</span>
            <nav className="flex flex-col gap-4">
              {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  {item.toUpperCase()}
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-6 block text-background/50">Socials</span>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center group">
                INSTAGRAM
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center group">
                LINKEDIN
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="mailto:hello@studio.com" className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center group">
                EMAIL
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50 font-medium tracking-wide">
            © {currentYear}  WOAKIL WORLD. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-sm text-background/50 hover:text-primary transition-colors duration-200 font-medium tracking-wide">
              PRIVACY
            </Link>

            <Link to="/terms" className="text-sm text-background/50 hover:text-primary transition-colors duration-200 font-medium tracking-wide">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;