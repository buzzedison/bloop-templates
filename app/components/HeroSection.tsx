import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Elevate Your Development with Bloop
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Discover our curated collection of free, premium-quality Tailwind CSS and Next.js 13 components. Accelerate your projects, save time, and deliver exceptional results.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Explore Components
            </Link>
            <Link href="#" className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Tailwind CSS Components</h2>
            </div>
            <p className="text-gray-300">
              Harness the power of Tailwind CSS with our meticulously crafted components. Effortlessly create stunning and responsive designs.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Next.js 13 Optimized</h2>
            </div>
            <p className="text-gray-300">
              Our components are fully optimized for Next.js 13 and the app directory structure. Build cutting-edge web applications with ease.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Open Source</h2>
            </div>
            <p className="text-gray-300">
              Bloop is open source and free to use. Contribute to the project, suggest new components, and be part of a thriving community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}