import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import ReportedUserComponent from './ReportedUserComponent';
import PaginationReportedUserComponent from './PaginationReportedUserComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedUserListComponent({
  initialLimit,
  initialPage,
  refreshTimestap,
}) {
  const [reportedUsersPaginated, setReportedUsersPaginated] = useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveReportedUsersPaginated(initialLimit, initialPage)
        .then((retrievedUsersPaginated) => {
          setReportedUsersPaginated(retrievedUsersPaginated);
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
      {reportedUsersPaginated &&
        reportedUsersPaginated.docs.map((reportedUser) => (
          <ReportedUserComponent
            initialReportedUser={reportedUser}
            key={reportedUser.id}
          />
        ))}
      {reportedUsersPaginated && (
        <PaginationReportedUserComponent
          initialReportedUsersPaginated={reportedUsersPaginated}
        />
      )}
    </div>
  );
}
