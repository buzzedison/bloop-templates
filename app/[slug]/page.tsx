"use client"
import { useParams } from 'next/navigation';

export default function ComponentDetail() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        {slug.charAt(0).toUpperCase() + slug.slice(1)} Details
      </h1>
      {/* Add live preview and component details here */}
    </div>
  );
}