import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image';

const images = [
  '/static/images/h1.png',
  '/static/images/h2.png',
  '/static/images/h3.png',
  '/static/images/h4.png',
  // Add more image URLs here
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full aspect-w-1 aspect-h-1">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

