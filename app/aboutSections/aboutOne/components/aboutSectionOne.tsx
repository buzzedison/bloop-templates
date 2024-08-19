"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSectionOne: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-700 text-white overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              About Our Company
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Shaping the future of business
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are dedicated to helping our clients achieve extraordinary results by providing innovative solutions and unparalleled expertise. Our mission is to transform businesses, create value, and make a lasting impact on industries worldwide.
          </p>
        </div>
      </section>

      {/* Key Values */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Constantly pushing boundaries to deliver cutting-edge solutions." },
              { title: "Integrity", description: "Upholding the highest ethical standards in all our endeavors." },
              { title: "Collaboration", description: "Fostering partnerships to achieve exceptional outcomes." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Years of Excellence" },
              { number: "10,000+", label: "Successful Projects" },
              { number: "60+", label: "Countries Served" },
              { number: "95%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let&apos;s work together to achieve extraordinary results.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutSectionOne;