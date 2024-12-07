import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import ReportedSearchComponent from '../components/ReportedSearchComponent';
import PaginationReportedSearchComponent from '../components/PaginationReportedSearchComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedSearchListComponent({
  initialLimit,
  initialPage,
  refreshTimestap,
}) {
  const [reportedSearchsPaginated, setReportedSearchsPaginated] =
    useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveReportedSearchesPaginated(initialLimit, initialPage)
        .then((retrievedSearchsPaginated) => {
          setReportedSearchsPaginated(retrievedSearchsPaginated);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }
  }, [initialLimit, initialPage, refreshTimestap]);

  const errorHandler = (error) => {
    console.error(error.message);

    let feedback = error.message;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    )
      feedback = `${feedback}, please correct it`;
    else if (error instanceof DuplicityError)
      feedback = `${feedback}, please try with another user`;
    else feedback = 'sorry, there was an error, please try again later';

    alert(feedback);
  };

  return (
    <div className="bg-red-100 p-1 my-1  rounded shadow">
      {reportedSearchsPaginated &&
        reportedSearchsPaginated.docs.map((reportedSearch) => (
          <ReportedSearchComponent
            initialReportedSearch={reportedSearch}
            key={reportedSearch.id}
          />
        ))}
      {reportedSearchsPaginated && (
        <PaginationReportedSearchComponent
          initialReportedSearchsPaginated={reportedSearchsPaginated}
        />
      )}
    </div>
  );
}
