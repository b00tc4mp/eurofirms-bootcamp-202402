import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchComponent from '../components/SearchComponent';
import AddSearchComment from '../components/AddSearchComment';
import CommentsListComponent from '../components/CommentsListComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function Comments() {
  const { urlSearchId } = useParams();
  const [search, setSearch] = useState(null);
  const [refreshTimestap, setRefreshTimestamp] = useState(null);

  useEffect(() => {
    logic
      .retrieveSearchById(urlSearchId)
      .then((searchRetrieved) => {
        setSearch(searchRetrieved);
      })
      .catch((error) => {
        errorHandler(error);
      });
  }, [urlSearchId]);

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
        {search && <SearchComponent initialSearch={search} />}
        <AddSearchComment
          initialSearch={search}
          setRefreshTimestamp={setRefreshTimestamp}
        />
        <CommentsListComponent
          initialSearch={search}
          refreshTimestap={refreshTimestap}
        />
      </div>
    </>
  );
}
