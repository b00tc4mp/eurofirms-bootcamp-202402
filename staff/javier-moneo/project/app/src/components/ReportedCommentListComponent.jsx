import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import PaginationReportedCommentComponent from './PaginationReportedCommentComponent';
import ReportedCommentComponent from './ReportedCommentComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedCommentListComponent({
  initialLimit,
  initialPage,
  refreshTimestap,
}) {
  const [reportedCommentsPaginated, setReportedCommentsPaginated] =
    useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveReportedCommentsPaginated(initialLimit, initialPage)
        .then((retrievedCommentsPaginated) => {
          setReportedCommentsPaginated(retrievedCommentsPaginated);
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
      {reportedCommentsPaginated &&
        reportedCommentsPaginated.docs.map((reportedComment) => (
          <ReportedCommentComponent
            initialReportedComment={reportedComment}
            key={reportedComment.id}
          />
        ))}
      {reportedCommentsPaginated && (
        <PaginationReportedCommentComponent
          initialReportedCommentsPaginated={reportedCommentsPaginated}
        />
      )}
    </div>
  );
}
