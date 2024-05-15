import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchComponent from '../components/SearchComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function AddSearchComment({ initialSearch, setRefreshTimestamp }) {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    //if use no logged in redirect to login
    if (!logic.isUserLoggedIn()) {
      console.log('navigate to login');
      navigate('/login');
      return;
    }
    try {
      console.log('onsubmit');
      logic
        .createComment(initialSearch.id, comment)
        .then(() => {
          console.log('comment created!');
          setComment('');
          setRefreshTimestamp(new Date().getTime())
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleCancelClick = (event) => {
    setComment('');
  };

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
      <div className="bg-white p-1 my-1  rounded shadow">
        <form onSubmit={onSubmit}>
          <div className="mt-2">
            <textarea
              id="comment"
              value={comment}
              name="comment"
              rows={2}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment..."
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={handleCancelClick}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
