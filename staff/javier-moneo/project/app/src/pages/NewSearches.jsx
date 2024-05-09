import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NewSearches() {
  const { urlEditionCode, urlSearcherName, urlSearchTypeName, urlTagName } =
    useParams();

  useEffect(() => {
    // load searches
  }, [urlEditionCode, urlSearcherName]);

  return (
    <>
      {/* <div>
        {urlEditionCode} - {urlSearcherName} - {urlSearchTypeName} -{' '}
        {urlTagName}
      </div> */}

      {/* first option */}
      {urlEditionCode && urlSearcherName && urlSearchTypeName && urlTagName && (
        <>
          <div className="flex items-center justify-center mt-4">
            <Link
              to={`/newSearches/${urlEditionCode}/${urlSearcherName}/${urlSearchTypeName}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {urlEditionCode} - {urlSearcherName} - {urlSearchTypeName}
            </Link>
            <span className="ml-5">{urlTagName}</span>
          </div>
        </>
      )}

      {/* second option */}
      {urlEditionCode &&
        urlSearcherName &&
        urlSearchTypeName &&
        !urlTagName && (
          <>
            <div className="flex items-center justify-center mt-4">
              <Link
                to={`/newSearches/${urlEditionCode}/${urlSearcherName}`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {urlEditionCode} - {urlSearcherName}
              </Link>
              <span className="ml-5">{urlSearchTypeName}</span>
            </div>
          </>
        )}

      {/* third option */}
      {urlEditionCode &&
        urlSearcherName &&
        !urlSearchTypeName &&
        !urlTagName && (
          <>
            <div className="flex items-center justify-center mt-4">
              <Link
                to={`/newSearches/${urlEditionCode}`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {urlEditionCode}
              </Link>
              <span className="ml-5">{urlSearcherName}</span>
            </div>
          </>
        )}

      {/* fourth option */}
      {urlEditionCode &&
        !urlSearcherName &&
        !urlSearchTypeName &&
        !urlTagName && (
          <>
            <div className="flex items-center justify-center mt-4">
              <span>{urlEditionCode}</span>
            </div>
          </>
        )}
    </>
  );
}
