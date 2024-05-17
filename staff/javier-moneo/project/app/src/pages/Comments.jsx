import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchComponent from '../components/SearchComponent';
import AddSearchComment from '../components/AddSearchComment';
import CommentsListComponent from '../components/CommentsListComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function Comments() {
  const { urlSearchId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(null);
  const [refreshTimestap, setRefreshTimestamp] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isSearchBanned, setIsSearchBanned] = useState(false);

  useEffect(() => {
    logic
      .retrieveSearchById(urlSearchId)
      .then((searchRetrieved) => {
        setSearch(searchRetrieved);
      })
      .catch((error) => {
        console.error(error.message);

        let feedback = error.message;

        if (error instanceof ContentError && feedback === 'Search is banned') {
          setIsSearchBanned(true);
        }

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
      });
  }, [urlSearchId]);

  useEffect(() => {
    setLimit(searchParams.get('limit'));
    setPage(searchParams.get('page'));
  }, [searchParams]);

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
      <div>
        {search && (
          <>
            <SearchComponent initialSearch={search} />
            <AddSearchComment
              initialSearch={search}
              setRefreshTimestamp={setRefreshTimestamp}
            />
            <CommentsListComponent
              initialSearch={search}
              initialLimit={limit}
              initialPage={page}
              refreshTimestap={refreshTimestap}
            />
          </>
        )}
        {isSearchBanned && (
          <>
            <div>
              <h1 className="text-4xl font-bold text-center dark:text-white">
                The search no longer exist
              </h1>
            </div>
          </>
        )}

        <Link
          to={`/`}
          className="w-full block text-center mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Home
        </Link>
      </div>
    </>
  );
}
