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
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Image src={image} alt={`Image ${index + 1}`} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

