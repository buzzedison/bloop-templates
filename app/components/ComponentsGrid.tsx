"use client"

// app/components/page.tsx

import Link from 'next/link';
import components from './componentData';

export default function ComponentGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {components.map((component) => (
            <div key={component.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={component.image}
                alt={component.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{component.name}</h3>
                <Link href={`/components/${component.slug}`}className="mt-4 inline-block text-blue-600 font-medium">
                    View Details
               
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}