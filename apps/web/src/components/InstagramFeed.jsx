import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Instagram } from 'lucide-react';

const instagramImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1595528870853-1277acbfe9ed', likes: 2847, comments: 142 },
  { id: 2, url: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f', likes: 3291, comments: 187 },
  { id: 3, url: 'https://images.unsplash.com/photo-1650432506678-d187258c0900', likes: 4156, comments: 203 },
  { id: 4, url: 'https://images.unsplash.com/photo-1547283731-f1564bf5918f', likes: 2634, comments: 128 },
  { id: 5, url: 'https://images.unsplash.com/photo-1587090564077-c7b8f2f1249e', likes: 3872, comments: 165 },
  { id: 6, url: 'https://images.unsplash.com/photo-1632789413875-695790ba93ce', likes: 2918, comments: 134 },
  { id: 7, url: 'https://images.unsplash.com/photo-1641891809630-ad6a4386dc74', likes: 3547, comments: 198 },
  { id: 8, url: 'https://images.unsplash.com/photo-1662377910613-ae0c9bd21481', likes: 4023, comments: 221 },
  { id: 9, url: 'https://images.unsplash.com/photo-1683122806164-503f7efe7a67', likes: 3165, comments: 156 }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Follow on Instagram
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@fashionphotographer</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {instagramImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
            >
              <img
                src={`${image.url}?w=400&h=400&fit=crop`}
                alt={`Instagram post ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-6 h-6" fill="white" />
                  <span className="font-medium">{image.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-medium">{image.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;