"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPropertyTrust: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/property-trust-hero.jpg"
            alt="Property Trust Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-extrabold tracking-wider mb-8"
          >
            PROPERTY TRUST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-light tracking-wider"
          >
            Redefining Real Estate Excellence
          </motion.p>
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
              <h2 className="text-5xl md:text-6xl font-bold mb-8">About Us</h2>
              <p className="text-xl leading-relaxed mb-8">
                At Property Trust, we are passionate about revolutionizing the real estate industry. With our innovative approach, cutting-edge technology, and unrivaled expertise, we empower our clients to make informed decisions and achieve their real estate goals with confidence.
              </p>
              <p className="text-xl leading-relaxed">
                Our team of seasoned professionals is dedicated to providing personalized service and delivering exceptional results. We take pride in building long-lasting relationships based on trust, transparency, and integrity.
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
      <section className="py-32 px-4 md:px-0 bg-gradient-to-r from-blue-900 to-purple-800">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { title: "Residential", description: "Discover your dream home among our curated selection of luxury properties. Our personalized approach ensures a seamless and rewarding experience." },
              { title: "Commercial", description: "Unlock the potential of commercial real estate with our expert guidance. We help you identify and capitalize on lucrative investment opportunities." },
              { title: "Property Management", description: "Maximize your property's value and minimize your stress with our comprehensive management services. We leverage advanced technology to optimize performance." },
              { title: "Real Estate Consulting", description: "Gain a competitive edge with our strategic consulting services. Our team provides valuable insights and tailored solutions to help you navigate the complex real estate landscape." }
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

      {/* Testimonials Section */}
      <section className="py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "John Doe", testimonial: "Property Trust exceeded my expectations. Their expertise and dedication made the process of finding my dream home a breeze. I couldn't be happier with the result!" },
              { name: "Jane Smith", testimonial: "As a real estate investor, I've worked with many companies, but none compare to Property Trust. Their market insights and strategic advice have been invaluable in growing my portfolio." },
              { name: "Michael Johnson", testimonial: "I entrusted my property management to Property Trust, and it was the best decision I made. Their attention to detail, responsiveness, and innovative solutions have maximized my returns and given me peace of mind." }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                className="bg-gradient-to-r from-blue-900 to-purple-800 p-10 rounded-lg shadow-lg"
              >
                <p className="text-lg leading-relaxed mb-4 italic">{testimonial.testimonial}</p>
                <p className="text-xl font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-0 bg-gradient-to-r from-purple-800 to-blue-900">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Elevate Your Real Estate Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-xl leading-relaxed mb-12"
          >
            Join the Property Trust revolution and unlock the true potential of your real estate journey. Contact us today to schedule a consultation and discover how we can help you achieve your goals.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-white text-purple-800 px-12 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-purple-100 transition duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AboutPropertyTrust;