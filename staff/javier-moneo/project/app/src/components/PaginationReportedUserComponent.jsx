export default function PaginationReportedUserComponent({
  initialReportedUsersPaginated,
}) {
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-medium">
            {initialReportedUsersPaginated.page}
          </span>{' '}
          to{' '}
          <span className="font-medium">
            {initialReportedUsersPaginated.limit}
          </span>{' '}
          of{' '}
          <span className="font-medium">
            {initialReportedUsersPaginated.totalDocs}
          </span>{' '}
          results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {initialReportedUsersPaginated.hasPrevPage && (
          <Link
            to={`/reportedUsers?limit=${initialReportedUsersPaginated.limit}&page=${initialReportedUsersPaginated.prevPage}`}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </Link>
        )}

        {initialReportedUsersPaginated.hasNextPage && (
          <Link
            to={`/reportedUsers?limit=${initialReportedUsersPaginated.limit}&page=${initialReportedUsersPaginated.nextPage}`}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}
