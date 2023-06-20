import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image';

export default function Gallery() {
  return (
    <>
      <PageSEO title={`Gallery - ${siteMetadata.author}`} description="My Project Gallery" />
      <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
          My Project Gallery
        </h1>
  
         <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <img src="/static/images/h1.png" alt="Image 1" class="w-full h-auto">
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <img src="/static/images/h2.png" alt="Image 2" class="w-full h-auto">
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <img src="/static/images/h3.png" alt="Image 3" class="w-full h-auto">
    </div>
        </div>
 
    </>
  )
}
