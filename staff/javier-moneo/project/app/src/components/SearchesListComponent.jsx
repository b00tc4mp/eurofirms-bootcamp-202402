import { useEffect, useState } from 'react';
import logic from '../logic';
import {
  HandThumbUpIcon as HandThumbUpIconSolid,
  HandThumbDownIcon as HandThumbDownIconSolid,
} from '@heroicons/react/20/solid';
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { errors } from '../com';
import SearchesListMenuOptionsComponent from './SearchesListMenuOptionsComponent';
import SearchComponent from './SearchComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function SearchesListComponent({ initialSearches }) {
  const navigate = useNavigate();
  const [searches, setSearches] = useState(null);

  useEffect(() => {
    setSearches(initialSearches);
  }, [initialSearches]);

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
        {searches && (
          <>
            {searches.map((search) => (
              <SearchComponent initialSearch={search} key={search.id} />
            ))}
          </>
        )}
      </div>

      <Link
        to={`/`}
        className="w-full block text-center mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Home
      </Link>
    </>
  );
}
