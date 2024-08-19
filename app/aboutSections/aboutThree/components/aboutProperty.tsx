"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPropertyTrust: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/property-trust-hero.jpg"
            alt="Property Trust Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-extrabold tracking-wider text-center"
          >
            PROPERTY TRUST
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">About Property Trust</h2>
              <p className="text-xl leading-relaxed mb-8">
                Property Trust is a premier real estate company dedicated to redefining the industry through innovation, expertise, and unparalleled service. Our team of seasoned professionals is committed to helping clients navigate the complex world of real estate with ease and confidence.
              </p>
              <p className="text-xl leading-relaxed">
                With a focus on building long-term relationships and delivering exceptional results, we strive to be your trusted partner in all your real estate endeavors. Whether you're looking to buy, sell, or invest, Property Trust is here to guide you every step of the way.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative h-[500px] md:h-[600px]"
            >
              <Image
                src="/images/property-trust-about.jpg"
                alt="About Property Trust"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-0 bg-gradient-to-r from-purple-800 to-blue-900">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Residential", description: "Find your dream home with our extensive portfolio of luxury properties and personalized service." },
              { title: "Commercial", description: "Discover lucrative investment opportunities in the commercial real estate market with our expert guidance." },
              { title: "Property Management", description: "Maximize your property's potential with our comprehensive management services and cutting-edge technology." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                className="bg-white text-gray-800 p-10 rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Experience the Property Trust Difference
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-xl leading-relaxed mb-12"
          >
            Ready to elevate your real estate experience? Contact us today to discuss your needs and let us exceed your expectations.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-white text-purple-800 px-12 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-purple-100 transition duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AboutPropertyTrust;