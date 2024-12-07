import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import PaginationReportedTagComponent from './PaginationReportedTagComponent';
import ReportedTagComponent from './ReportedTagComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedTagListComponent({
  initialLimit,
  initialPage,
  refreshTimestap,
}) {
  const [reportedTagsPaginated, setReportedTagsPaginated] = useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveReportedTagsPaginated(initialLimit, initialPage)
        .then((retrievedTagsPaginated) => {
          setReportedTagsPaginated(retrievedTagsPaginated);
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
      {/* <pre>{JSON.stringify(reportedTagsPaginated, null, 2)}</pre> */}
      {reportedTagsPaginated &&
        reportedTagsPaginated.docs.map((reportedTag) => (
          <ReportedTagComponent
            initialReportedTag={reportedTag}
            key={reportedTag.id}
          />
        ))}
      {reportedTagsPaginated && (
        <PaginationReportedTagComponent
          initialReportedTagsPaginated={reportedTagsPaginated}
        />
      )}
    </div>
  );
}
