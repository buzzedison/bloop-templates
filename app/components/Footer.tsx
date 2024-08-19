import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Bloop. All rights reserved.
        </p>
        <div className="mt-4">
          <Link href="/privacy" className="text-blue-500 hover:text-blue-600 mr-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-blue-500 hover:text-blue-600">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;