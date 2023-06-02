import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function CV() {
  return (
    <>
      <PageSEO title={`CV - ${siteMetadata.author}`} description="My Curriculum Vitae" />
      <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
          My Curriculum Vitae
        </h1>
        <div className="mt-8">
          <Link
            href={siteMetadata.cvUrl} // Replace with the URL to your CV
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Download CV
          </Link>
        </div>
      </div>
    </>
  )
}
