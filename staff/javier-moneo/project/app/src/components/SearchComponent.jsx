import { useEffect, useState } from 'react';
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
import logic from '../logic';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function SearchComponent({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch);
  const navigate = useNavigate();

  const handleVoteUpClick = (search) => {
    console.log('vote up', search.id);
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    logic
      .voteSearch(search.id, true)
      .then(() => {
        console.log('vote up confirmed !!');

        const searchClone = structuredClone(search);

        searchClone.isVoteUp = true;

        if (!searchClone.isVoted) {
          searchClone.isVoted = true;
        }

        setSearch(searchClone);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleVoteDownClick = (search) => {
    console.log('vote up', search.id);
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    logic
      .voteSearch(search.id, false)
      .then(() => {
        console.log('vote down confirmed !!');

        const searchClone = structuredClone(search);

        searchClone.isVoteUp = false;

        if (!searchClone.isVoted) {
          searchClone.isVoted = true;
        }

        setSearch(searchClone);
      })
      .catch((error) => {
        errorHandler(error);
      });
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
      <div key={search.id} className="bg-white p-1 my-1  rounded shadow">
        {/* query */}
        <div className="flex w-full">
          <div className="w-full p-1 bg-slate-100 rounded">
            <a
              className="font-medium text-black dark:text-gray-700 hover:underline"
              href={search.url}
            >
              {search.query}
            </a>
          </div>
          {/* REPORTS */}
          <div className="ml-2 flex items-center bg-slate-50 text-[#717171]">
            <SearchesListMenuOptionsComponent search={search} />
          </div>
        </div>

        {/* main container */}
        <div>
          <div className="flex">
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${search.edition?.code}/${search.searcher?.name}`}
                className=""
              >
                {search.searcher.displayName}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${search.edition?.code}/${search.searcher?.name}/${search.searchType?.name}`}
                className=""
              >
                {search.searchType.name}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${search.edition?.code}/${search.searcher?.name}/${search.searchType?.name}/${search.tag?.name}`}
                className=""
              >
                #{search.tag.name}
              </Link>
            </div>
          </div>

          {/* action buttons vote comments share */}
          <div className="flex">
            <div
              className="m-1 p-1 rounded text-black cursor-pointer"
              onClick={() => handleVoteUpClick(search)}
            >
              {search.isVoteUp && search.isVoted && (
                <HandThumbUpIconSolid className="h-5 w-5" aria-hidden="true" />
              )}
              {!(search.isVoteUp && search.isVoted) && (
                <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            <div
              className="m-1 p-1 rounded text-black cursor-pointer"
              onClick={() => handleVoteDownClick(search)}
            >
              {!search.isVoteUp && search.isVoted ? (
                <HandThumbDownIconSolid
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <HandThumbDownIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            {/* comments */}
            <div className="m-1 p-1 rounded text-[#717171]">
              <Link key={search.id} to={`/comments/${search.id}`}>
                <ChatBubbleBottomCenterTextIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
            {/* share */}
            <div className="m-1 p-1 rounded text-[#717171]">
              <ShareIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          {/* username */}
          <div className="flex">
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              u: {search.user.username}
            </div>
          </div>

          {/* date and edition */}
          <div className="flex">
            <div className="m-1 p-1 rounded text-[#717171] text-sm">
              {new Date(search.createdAt).toLocaleString()}
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link to={`/newSearches/${search.edition?.code}`} className="">
                {/* {urlEditionCode} */}
                {search.edition.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
