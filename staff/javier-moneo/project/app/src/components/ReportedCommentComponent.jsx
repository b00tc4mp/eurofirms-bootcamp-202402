import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { errors } from '../com';
import logic from '../logic';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function ReportedCommentComponent({ initialReportedComment }) {
  const [reportedComment, setReportedComment] = useState(
    initialReportedComment
  );

  const handleDiscardButtonClick = () => {
    console.log('discarding comment...', reportedComment.id);
    logic
      .discardReportCommentById(reportedComment.id)
      .then(() => {
        console.log('discard reportSearch');
        const clonedReportedComment = structuredClone(reportedComment);
        clonedReportedComment.status = 'discarded';
        setReportedComment(clonedReportedComment);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleButtonRemoveClick = () => {
    console.log('removing comment...', reportedComment.id);
    logic
      .removeReportCommentById(reportedComment.id)
      .then(() => {
        console.log('removed reportComment');
        const clonedReportedComment = structuredClone(reportedComment);
        clonedReportedComment.status = 'accepted';
        setReportedComment(clonedReportedComment);
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
      {/* <pre>{JSON.stringify(reportedComment, null, 2)}</pre> */}
      <div className="bg-red-50 p-1 my-1  rounded shadow">
        {/* query */}
        <div className="flex w-full">
          <div className="w-full p-1 bg-slate-100 rounded">
            <a
              className="font-medium text-black dark:text-gray-700 hover:underline"
              href={reportedComment.search.url}
            >
              {reportedComment.search.query}
            </a>
          </div>
        </div>

        {/* main container */}
        <div>
          <div className="flex">
            <div className="m-1 p-1 bg-yellow-200 rounded text-[#717171] text-sm">
              Status: {reportedComment.status}
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedComment.search.edition?.code}/${reportedComment.search.searcher?.name}`}
                className=""
              >
                {reportedComment.search.searcher.displayName}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedComment.search.edition?.code}/${reportedComment.search.searcher?.name}/${reportedComment.search.searchType?.name}`}
                className=""
              >
                {reportedComment.search.searchType.name}
              </Link>
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedComment.search.edition?.code}/${reportedComment.search.searcher?.name}/${reportedComment.search.searchType?.name}/${reportedComment.search.tag?.name}`}
                className=""
              >
                #{reportedComment.search.tag.name}
              </Link>
            </div>
          </div>

          {/* action buttons vote comments share */}
          <div className="flex">
            {/* comments */}
            <div className="m-1 p-1 rounded text-[#717171]">
              <Link
                key={reportedComment.search.id}
                to={`/comments/${reportedComment.search.id}`}
              >
                <ChatBubbleBottomCenterTextIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
            {/* username */}
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              u: {reportedComment.search.user.username}
            </div>
          </div>

          {/* date and edition */}
          <div className="flex">
            <div className="m-1 p-1 rounded text-[#717171] text-sm">
              {new Date(reportedComment.search.createdAt).toLocaleString()}
            </div>
            <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <Link
                to={`/newSearches/${reportedComment.search.edition?.code}`}
                className=""
              >
                {/* {urlEditionCode} */}
                {reportedComment.search.edition.name}
              </Link>
            </div>
          </div>
        </div>
        {/* COMMENT */}
        <div className="bg-amber-50 p-1 my-1  rounded shadow">
          <div>Comment:</div>

          <div>
            <div className="flex items-center w-full">
              {/* user */}
              <div className="flex items-center m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
                <UserIcon className="h-4 w-4" aria-hidden="true" />
                <div className="pl-1">
                  u:{reportedComment.comment.user.username}
                </div>
              </div>
              {/* date */}
              <div className="pl-1  rounded text-[#717171] text-xs">
                {new Date(reportedComment.comment.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="whitespace-pre-line bg-amber-200 p-1 my-1 rounded shadow text-sm">
            <p>{reportedComment.comment.text}</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          {reportedComment && reportedComment.status !== 'discarded' && (
            <button
              onClick={handleDiscardButtonClick}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Discard
            </button>
          )}

          {reportedComment && reportedComment.status !== 'accepted' && (
            <button
              onClick={handleButtonRemoveClick}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove Comment
            </button>
          )}
        </div>
      </div>
    </>
  );
}
