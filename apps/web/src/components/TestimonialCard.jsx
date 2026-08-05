import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-border pt-8"
    >
      <div className="flex items-start gap-6 mb-8">
        <span className="text-sm font-bold text-primary tracking-widest">{formattedIndex}</span>
        <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="flex items-center gap-4 pl-12">
        <div className="w-12 h-12 rounded-none overflow-hidden bg-muted">
          <img
            src={`${testimonial.image}?w=100&h=100&fit=crop`}
            alt={testimonial.name}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div>
          <p className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;