import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'

const images = [
  '/static/images/h1.png',
  '/static/images/h2.png',
  '/static/images/h3.png',
  '/static/images/h4.png',
  // Add more image URLs here
]

const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="relative h-0 pb-2/3 w-full">
            <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery


