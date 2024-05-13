import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { errors } from '../com';
import logic from '../logic';
import SearchesListComponent from '../components/SearchesListComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function NewSearches() {
  const { urlEditionCode, urlSearcherName, urlSearchTypeName, urlTagName } =
    useParams();
  const [edition, setEdition] = useState(null);
  const [searcher, setSearcher] = useState(null);
  const [searchType, setSearchType] = useState(null);
  const [tag, setTag] = useState(null);
  const [urlContentLoaded, setUrlContentLoaded] = useState(false);
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    // load searches
    if (urlEditionCode) {
      logic
        .retrieveEditionByCode(urlEditionCode)
        .then((editionRetrieved) => {
          setEdition(editionRetrieved);
          if (urlTagName) {
            logic
              .retrieveTagByEditionIdAndName(editionRetrieved.id, urlTagName)
              .then((tagRetrieved) => {
                // console.log(tagRetrieved);
                setTag(tagRetrieved);
              })
              .catch((error) => {
                errorHandler(error);
              });
          } else {
            setTag(null);
          }
        })
        .catch((error) => {
          errorHandler(error);
        });
    } else {
      setEdition(null);
    }

    if (urlSearcherName) {
      logic
        .retrieveSearcherByName(urlSearcherName)
        .then((searcherRetrieved) => {
          setSearcher(searcherRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } else {
      setSearcher(null);
    }

    if (urlSearchTypeName) {
      logic
        .retrieveSearchTypeByName(urlSearchTypeName)
        .then((searchTypeRetrieved) => {
          setSearchType(searchTypeRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } else {
      setSearchType(null);
    }
    setUrlContentLoaded(true);
  }, [urlEditionCode, urlSearcherName, urlSearchTypeName, urlTagName]);

  useEffect(() => {
    // load searches
    if (edition) {
      // console.log(edition?.id, searcher?.id, searchType?.id, tag?.id);
      logic
        .retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId(
          edition?.id,
          searcher?.id,
          searchType?.id,
          tag?.id
        )
        .then((searchesRetrieved) => {
          // console.log(searches);
          setSearches(searchesRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  }, [edition, searcher, searchType, tag]);

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
      {/* <div>
        {urlEditionCode} - {urlSearcherName} - {urlSearchTypeName} -{' '}
        {urlTagName}
      </div> */}

      {/* first option */}
      {urlEditionCode && urlSearcherName && urlSearchTypeName && urlTagName && (
        <>
          <div className="flex items-center justify-center">
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
            <div className="flex items-center justify-center">
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
            <div className="flex items-center justify-center">
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
            <div className="flex items-center justify-center ">
              <span>{urlEditionCode}</span>
            </div>
          </>
        )}

      <SearchesListComponent searches={searches} />
    </>
  );
}
