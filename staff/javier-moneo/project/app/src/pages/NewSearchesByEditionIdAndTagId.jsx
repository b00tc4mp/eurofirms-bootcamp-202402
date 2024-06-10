import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchesListComponent from '../components/SearchesListComponent';
import Pagination from '../components/Pagination';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function NewSearchesByEditionIdAndTagId() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { urlEditionId, urlTagId } = useParams();
  const [edition, setEdition] = useState(null);
  const [tag, setTag] = useState(null);
  const [urlContentLoaded, setUrlContentLoaded] = useState(false);
  const [searchesPaginated, setSearchesPaginated] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [loadPagination, setLoadPagination] = useState(false);

  useEffect(() => {
    if (searchParams.get('limit')) {
      console.log('update limit', searchParams.get('limit'));
      setLimit(searchParams.get('limit'));
    }

    if (searchParams.get('page')) {
      console.log('update limit', searchParams.get('page'));
      setPage(searchParams.get('page'));
    }
  }, [searchParams]);

  useEffect(() => {
    if (urlEditionId && urlTagId) {
      logic
        .retrieveEditionByEditionId(urlEditionId)
        .then((editionRetrieved) => {
          setEdition(editionRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });

      logic
        .retrieveTagByTagId(urlTagId)
        .then((tagRetrieved) => {
          setTag(tagRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  }, [urlEditionId, urlTagId]);

  useEffect(() => {
    if (edition && tag) {
      logic
        .retrieveSearchesByEditionIdAndTagIdPaginated(
          edition.id,
          tag.id,
          limit,
          page
        )
        .then((retrivedSearchesPaginated) => {
          setSearchesPaginated(retrivedSearchesPaginated);
          setLoadPagination(true);
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  }, [edition, tag, limit, page]);

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
      {/* <pre>{JSON.stringify(edition, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(searchesPaginated, null, 2)}</pre> */}
      <div>
        {tag && edition && (
          <div>
            <h1 className="text-4xl font-bold text-center dark:text-white">
              # {tag.name}
            </h1>
            <div className="text-center dark:text-white">{edition.name}</div>
          </div>
        )}

        <SearchesListComponent initialSearches={searchesPaginated.docs} />
        {loadPagination && (
          <Pagination
            linkTo={`/newSearchesByEditionIdAndTagId/${edition.id}/${tag.id}/`}
            page={searchesPaginated.page}
            limit={searchesPaginated.limit}
            totalDocs={searchesPaginated.totalDocs}
            hasPrevPage={searchesPaginated.hasPrevPage}
            hasNextPage={searchesPaginated.hasNextPage}
            nextPage={searchesPaginated.nextPage}
            prevPage={searchesPaginated.prevPage}
          />
        )}
      </div>
    </>
  );
}
