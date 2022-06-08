import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article className="customLayout">
        <div>
          <header>
            <div className="titleContent">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="whitespace-nowrap text-sm font-medium leading-5">
                <div className="postMeta">
                  <dt className="sr-only">Published on</dt>
                  <dd className="inline text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                  <dt className="sr-only">Written by</dt>
                  <dd className="inline text-base font-medium leading-6 text-gray-500 before:content-['by_'] dark:text-gray-400">
                    <Link href="/about">Matt Galligan</Link>
                  </dd>
                  {/* <dt className="sr-only">Tags</dt>
                  <dd className="before:content-['_•_'] inline text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                    ))}
                  </dd> */}
                </div>
              </dl>
            </div>
          </header>
          <div
            className="pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-2 pb-12 dark:prose-dark">{children}</div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
            <footer>
              <div className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="postNavigate">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 before:mr-2 before:no-underline before:content-['←'] hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="postNavigate">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 after:ml-2 after:no-underline after:content-['→'] hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title}
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
