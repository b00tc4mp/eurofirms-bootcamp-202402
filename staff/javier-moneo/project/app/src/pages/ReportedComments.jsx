import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ReportedCommentListComponent from '../components/ReportedCommentListComponent';

export default function ReportedComments() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [refreshTimestap, setRefreshTimestamp] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchParams.get('limit')) {
      setLimit(searchParams.get('limit'));
    }

    if (searchParams.get('page')) {
      setPage(searchParams.get('page'));
    }
  }, [searchParams]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Reported Comments
      </h1>
      <ReportedCommentListComponent
        initialLimit={limit}
        initialPage={page}
        refreshTimestap={refreshTimestap}
      />
    </div>
  );
}
