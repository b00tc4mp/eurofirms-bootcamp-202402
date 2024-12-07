import { Link } from 'react-router-dom';

export default function Pagination({
  linkTo, // "/ruta"
  page,
  limit,
  totalDocs,
  hasPrevPage,
  hasNextPage,
  nextPage,
  prevPage,
}) {
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{page}</span> to{' '}
          <span className="font-medium">{limit}</span> of{' '}
          <span className="font-medium">{totalDocs}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {hasPrevPage && (
          <Link
            to={`${linkTo}?limit=${limit}&page=${prevPage}`}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </Link>
        )}

        {hasNextPage && (
          <Link
            to={`${linkTo}?limit=${limit}&page=${nextPage}`}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}
