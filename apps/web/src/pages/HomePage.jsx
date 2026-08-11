import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      <Header />

      {/* HERO */}
      <main className="relative min-h-screen">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full" />

          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-red-900/20 blur-[130px] rounded-full" />
        </div>

        <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[75vh]">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >

              {/* Small heading */}
              <div className="flex items-center gap-4 mb-7">
                <span className="w-12 h-[2px] bg-red-500" />

                <span className="text-red-500 text-sm md:text-base font-medium tracking-widest uppercase">
                  Creative Portfolio Elite Designs
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[50px] xl:text-[100px] font-black uppercase leading-[0.82] tracking-[-0.06em]">

                <span className="block text-white">
                  Portfolio
                </span>

                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[30px] xl:text-[60px] font-black uppercase leading-[0.82] tracking-[-0.06em]">
                <span className="block text-red-500">
                  Edition
                </span>
                </h2>

              </h1>
              

              {/* Line */}
              <div className="w-16 h-[2px] bg-red-500 mt-10 mb-7" />

              {/* Description */}
              <p className="max-w-xl text-lg md:text-xl text-white/65 leading-relaxed">
                I design and develop modern, fast, and responsive
                websites with clean code and exceptional user
                experiences. Every project is built to combine
                creativity, performance, and functionality.
              </p>

              {/* Button */}
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-10 flex items-center gap-8 border border-red-500 px-7 py-5 text-red-500 font-semibold uppercase tracking-wide hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore Work

                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform"
                    size={22}
                  />
                </motion.button>
              </Link>

            </motion.div>


            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.2
              }}
              className="relative flex items-center justify-center min-h-[500px]"
            >

              {/* Red glow */}
              <div className="absolute w-[380px] h-[380px] bg-red-600/30 blur-[120px] rounded-full" />

              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-[380px] h-[180px] border border-red-500/50 rounded-[50%]"
              />

              {/* Main image */}
              <motion.img
                src="/public/cube.png"
                alt="Red futuristic portfolio artwork"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full max-w-[650px] object-contain drop-shadow-[0_0_50px_rgba(255,0,40,0.45)]"
              />

            </motion.div>

          </div>


          {/* Bottom line */}
          <div className="border-t border-red-500/30 pt-8 mt-10">

            <div className="flex flex-wrap items-center gap-8 text-white/50 text-sm uppercase tracking-widest">

              <span>Follow Me</span>

              <span>Instagram</span>
              <span>Dribbble</span>
              <span>Behance</span>
              <span>LinkedIn</span>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default HomePage;