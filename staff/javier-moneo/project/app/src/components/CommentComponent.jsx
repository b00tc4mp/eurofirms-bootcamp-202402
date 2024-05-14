import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';
import SearchComponent from '../components/SearchComponent';
import AddSearchComment from '../components/AddSearchComment';
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

export default function CommentComponent({ initialComment }) {
  const [comment, setComment] = useState(initialComment);
  return (
    <>
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
        <div className="bg-amber-200 p-1 my-1  rounded shadow">
          <p>{comment.text}</p>
        </div>
      </div>
    </>
  );
}
