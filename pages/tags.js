import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function CV() {
  return (
    <>
      <PageSEO title={`CV - ${siteMetadata.author}`} description={siteMetadata.cvDescription} />
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
          {siteMetadata.cvTitle}
        </h1>
        <div className="mt-8">
          <Link
            href={siteMetadata.cvUrl}
            className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Download CV
          </Link>
        </div>
      </div>
    </>
  )
}
