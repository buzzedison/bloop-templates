"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroOne() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32 flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Streamline Your Workflow with CloudFlow
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-light mb-8 text-blue-100"
          >
            Boost productivity and collaboration with our all-in-one project management solution. Experience seamless integration and powerful analytics.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
          >
            <Link href="/signup">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link href="/demo">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 w-full sm:w-auto"
              >
                Request Demo
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <Image
            src="/images/dashboard.jpeg"
            alt="CloudFlow Dashboard"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-3/4 left-1/4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl -z-10"></div>
    </section>
  );
}