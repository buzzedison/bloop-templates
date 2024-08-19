"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutFashionSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white overflow-hidden">
        <Image
          src="/images/aboutSection/fashion-about-hero.jpeg"
          alt="About Us Fashion Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-wider"
            >
              NOVA STUDIOS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl uppercase tracking-widest"
            >
              Redefining Luxury, Empowering Style
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Our Story</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Founded in 2018, NOVA Studios was born out of a desire to create fashion that combines timeless elegance with modern edge. We believe that the clothes you wear have the power to express your unique style and reflect your values.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            At NOVA Studios, we are committed to crafting high-quality, sustainable garments. We use eco-friendly materials and ethical production practices to minimize our environmental footprint.
          </p>
        </div>
      </section>

      {/* Artisanship */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <Image
                src="/images/aboutSection/fashion-artisans.jpeg"
                alt="Empowering Artisans"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Empowering Artisans</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We partner with skilled artisans around the world to bring our designs to life. By supporting traditional craftsmanship and providing fair wages, we are helping to preserve cultural heritage and empower communities.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your NOVA Studios purchase is not just a fashion statement, but also a way to make a difference and be a force for positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider">Join the Movement</h2>
          <p className="text-xl mb-12 leading-relaxed">
            Experience the transformative power of fashion with NOVA Studios. Join us in our mission to redefine luxury for the modern woman and build a better future together, one garment at a time.
          </p>
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-12 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:bg-gray-200 transition duration-300"
          >
            Shop Collection
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AboutFashionSection;