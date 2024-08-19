"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const products = [
  { id: 1, name: "Summer Collection", image: "/images/summer-collection.jpeg", description: "Vibrant styles for sunny days" },
  { id: 2, name: "Autumn Essentials", image: "/images/autumn-essentials.jpeg", description: "Cozy picks for cooler weather" },
  { id: 3, name: "Winter Warmers", image: "/images/winter-warmers.jpeg", description: "Stay stylish in the cold" },
];

export default function HeroTwo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-800 to-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={products[currentSlide].image}
            alt={products[currentSlide].name}
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <motion.h1 
            key={currentSlide + "-title"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {products[currentSlide].name}
          </motion.h1>
          <motion.p 
            key={currentSlide + "-desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10"
          >
            {products[currentSlide].description}
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {products.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-blue-300'}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}