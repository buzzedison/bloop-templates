"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Accelerate Your Development Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-blue-100"
          >
            Unlock the power of our free, customizable components and focus on building exceptional web applications.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <Link href="/components">
              <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                Explore Components
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Fast Development</h3>
            <p className="text-gray-600">
              Streamline your development process with our pre-built components and save valuable time.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Customizable</h3>
            <p className="text-gray-600">
              Easily customize our components to match your project&apos;s unique design and requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Developer-Friendly</h3>
            <p className="text-gray-600">
              Our components are built with developers in mind, ensuring a seamless integration into your projects.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}