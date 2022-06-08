import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="mx-auto max-w-3xl space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button
              className="font-medium text-primary-600 hover:underline dark:text-gray-200 dark:hover:text-primary-400"
              rel="previous"
            >
              &larr; Previous
            </button>
          </Link>
        )}
        <span className="">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button
              className="font-medium text-primary-600 hover:underline dark:text-gray-200 dark:hover:text-primary-400"
              rel="next"
            >
              Next &rarr;
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
