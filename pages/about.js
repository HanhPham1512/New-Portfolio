import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

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
        <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

