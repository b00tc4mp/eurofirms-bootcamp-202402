import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
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
  UserIcon,
} from '@heroicons/react/24/outline';
import CommentReportListMenuOptionsComponent from './CommentReportListMenuOptionsComponent';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function CommentComponent({ initialComment }) {
  const [comment, setComment] = useState(initialComment);

  const handleVoteUpClick = () => {
    console.log('vote up', comment.id);
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    logic
      .voteComment(comment.id, true)
      .then(() => {
        console.log('vote up confirmed !!');

        const commentClone = structuredClone(comment);

        commentClone.isVoteUp = true;

        if (!commentClone.isVoted) {
          commentClone.isVoted = true;
        }

        setComment(commentClone);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleVoteDownClick = () => {
    console.log('vote down', comment.id);
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    logic
      .voteComment(comment.id, false)
      .then(() => {
        console.log('vote down confirmed !!');

        const commentClone = structuredClone(comment);

        commentClone.isVoteUp = false;

        if (!commentClone.isVoted) {
          commentClone.isVoted = true;
        }

        setComment(commentClone);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };
  return (
    <>
      {/* <pre>{JSON.stringify(comment, null, 2)}</pre> */}
      <div className="bg-amber-50 p-1 my-1  rounded shadow">
        <div className="flex">
          <div className="flex items-center w-full">
            {/* user */}
            <div className="flex items-center m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
              <UserIcon className="h-4 w-4" aria-hidden="true" />
              <div className="pl-1">u:{comment.user.username}</div>
            </div>
            {/* date */}
            <div className="pl-1  rounded text-[#717171] text-xs">
              {new Date(comment.createdAt).toLocaleString()}
            </div>
          </div>

          {/* REPORTS */}
          <div className="ml-2 flex items-center bg-slate-50 text-[#717171]">
            <CommentReportListMenuOptionsComponent initialComment={comment} />
          </div>
        </div>

        {/* comment */}
        <div className="bg-amber-200 p-1 my-1  rounded shadow text-sm">
          <p>{comment.text}</p>
        </div>

        {/* action buttons vote comments share */}
        <div className="flex">
          <div
            className="m-1 p-1 rounded text-black cursor-pointer"
            onClick={() => handleVoteUpClick(comment)}
          >
            {comment.isVoteUp && comment.isVoted && (
              <HandThumbUpIconSolid className="h-4 w-4" aria-hidden="true" />
            )}
            {!(comment.isVoteUp && comment.isVoted) && (
              <HandThumbUpIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </div>
          <div
            className="m-1 p-1 rounded text-black cursor-pointer"
            onClick={() => handleVoteDownClick(comment)}
          >
            {!comment.isVoteUp && comment.isVoted ? (
              <HandThumbDownIconSolid className="h-4 w-4" aria-hidden="true" />
            ) : (
              <HandThumbDownIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </div>
          {/* share */}
          {/* <div className="m-1 p-1 rounded text-[#717171]">
            <ShareIcon className="h-4 w-4" aria-hidden="true" />
          </div> */}
        </div>
      </div>
    </>
  );
}
