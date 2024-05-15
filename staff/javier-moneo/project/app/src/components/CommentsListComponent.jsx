import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchComponent from '../components/SearchComponent';
import AddSearchComment from '../components/AddSearchComment';
import CommentComponent from './CommentComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function CommentsListComponent({
  initialSearch,
  refreshTimestap,
}) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (initialSearch) {
      // console.log(initialSearch);
      logic
        .retrieveCommentsBySearchId(initialSearch.id)
        .then((commentsRetrieved) => {
          console.log(commentsRetrieved);
          setComments(commentsRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  }, [initialSearch, refreshTimestap]);

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
    <>
      <div className="bg-amber-100 p-1 my-1  rounded shadow">
        Comments:
        {comments &&
          comments.map((comment) => (
            <CommentComponent initialComment={comment} key={comment.id} />
          ))}
      </div>
    </>
  );
}
