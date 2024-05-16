import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
// import { ReportedSearchListComponent } from '../components/ReportedSearchListComponent';
import ReportedSearchListComponent from '../components/ReportedSearchListComponent';

export default function ReportedSearches() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [refreshTimestap, setRefreshTimestamp] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {}, []);

  useEffect(() => {
    if (searchParams.get('limit')) {
      setLimit(searchParams.get('limit'));
    }

    if (searchParams.get('page')) {
      setPage(searchParams.get('page'));
    }
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
    <div>
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Reported Searches
      </h1>
      <ReportedSearchListComponent
        initialLimit={limit}
        initialPage={page}
        refreshTimestap={refreshTimestap}
      />
    </div>
  );
}
