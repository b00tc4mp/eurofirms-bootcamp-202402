import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { errors } from '../com';
import logic from '../logic';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedSearchComponent({ initialReportedSearch }) {
  const [reportedSearch, setReportedSearch] = useState(initialReportedSearch);

  const handleDiscardButtonClick = () => {
    console.log('discarding search...', reportedSearch.id);
    logic
      .discardReportSeachById(reportedSearch.id)
      .then(() => {
        console.log('discard reportSearch');
        const clonedReportedSearch = structuredClone(reportedSearch);
        clonedReportedSearch.status = 'discarded';
        setReportedSearch(clonedReportedSearch);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleButtonRemoveClick = () => {
    console.log('removing search...', reportedSearch.id);
    logic
      .removeReportSeachById(reportedSearch.id)
      .then(() => {
        console.log('removed reportSearch');
        const clonedReportedSearch = structuredClone(reportedSearch);
        clonedReportedSearch.status = 'accepted';
        setReportedSearch(clonedReportedSearch);
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
      {/* <pre>{JSON.stringify(reportedSearch, null, 2)}</pre> */}
      <div className="bg-red-50 p-1 my-1  rounded shadow">
        {/* query */}
        <div className="flex w-full">
          <div className="w-full p-1 bg-slate-100 rounded">
            <a
              className="font-medium text-black dark:text-gray-700 hover:underline"
              href={reportedSearch.search.url}
            >
              {reportedSearch.search.query}
            </a>
          </div>
        </div>

        {/* main container */}
        <div>
          <div className="flex">
            <div className="m-1 p-1 bg-yellow-200 rounded text-[#717171] text-sm">
              Status: {reportedSearch.status}
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedSearch.search.edition?.code}/${reportedSearch.search.searcher?.name}`}
                className=""
              >
                {reportedSearch.search.searcher.displayName}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedSearch.search.edition?.code}/${reportedSearch.search.searcher?.name}/${reportedSearch.search.searchType?.name}`}
                className=""
              >
                {reportedSearch.search.searchType.name}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedSearch.search.edition?.code}/${reportedSearch.search.searcher?.name}/${reportedSearch.search.searchType?.name}/${reportedSearch.search.tag?.name}`}
                className=""
              >
                #{reportedSearch.search.tag.name}
              </Link>
            </div>
          </div>

          {/* action buttons vote comments share */}
          <div className="flex">
            {/* comments */}
            <div className="m-1 p-1 rounded text-[#717171]">
              <Link
                key={reportedSearch.search.id}
                to={`/comments/${reportedSearch.search.id}`}
              >
                <ChatBubbleBottomCenterTextIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
            {/* username */}
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              u: {reportedSearch.search.user.username}
            </div>
          </div>

          {/* date and edition */}
          <div className="flex">
            <div className="m-1 p-1 rounded text-[#717171] text-sm">
              {new Date(reportedSearch.search.createdAt).toLocaleString()}
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedSearch.search.edition?.code}`}
                className=""
              >
                {/* {urlEditionCode} */}
                {reportedSearch.search.edition.name}
              </Link>
            </div>
          </div>
        </div>
        {/* ACTION BUTTONS */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          {reportedSearch && reportedSearch.status !== 'discarded' && (
            <button
              onClick={handleDiscardButtonClick}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Discard
            </button>
          )}

          {reportedSearch && reportedSearch.status !== 'accepted' && (
            <button
              onClick={handleButtonRemoveClick}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove Content
            </button>
          )}
        </div>
      </div>
    </>
  );
}
