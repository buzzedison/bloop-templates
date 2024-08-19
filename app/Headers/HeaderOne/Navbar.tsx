"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/headers/headerOne/logo.png" alt="Logo" width={150} height={50} />

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-800 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center text-gray-800 hover:text-blue-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block px-6 py-3 text-gray-800 hover:bg-gray-200">Home</Link>
          <Link href="/about" className="block px-6 py-3 text-gray-800 hover:bg-gray-200">About</Link>
          <Link href="/services" className="block px-6 py-3 text-gray-800 hover:bg-gray-200">Services</Link>
          <Link href="/contact" className="block px-6 py-3 text-gray-800 hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
