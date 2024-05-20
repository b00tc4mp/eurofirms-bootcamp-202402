import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function NewSearchesByEditionIdAndTagId() {
  const { urlEditionId, urlTagId } = useParams();
  const [edition, setEdition] = useState(null);
  const [tag, setTag] = useState(null);
  const [urlContentLoaded, setUrlContentLoaded] = useState(false);
  const [searchesPaginated, setSearchesPaginated] = useState([]);

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
      <div>
        {tag && edition && (
          <div>
            <h1 className="text-4xl font-bold text-center dark:text-white">
              # {tag.name}
            </h1>
            <div className="text-center dark:text-white">{edition.name}</div>
          </div>
        )}
      </div>
    </>
  );
}
