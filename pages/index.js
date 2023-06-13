import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}

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
