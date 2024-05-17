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

export default function ReportedTagComponent({ initialReportedTag }) {
  const [reportedTag, setReportedTag] = useState(initialReportedTag);

  const handleDiscardButtonClick = () => {
    console.log('discarding tag...', reportedTag.id);
    logic
      .discardReportTagById(reportedTag.id)
      .then(() => {
        console.log('discard reportTag');
        const clonedReportedTag = structuredClone(reportedTag);
        clonedReportedTag.status = 'discarded';
        setReportedTag(clonedReportedTag);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleButtonRemoveClick = () => {
    console.log('removing tag...', reportedTag.id);
    logic
      .removeReportTagById(reportedTag.id)
      .then(() => {
        console.log('removed reportTag');
        const clonedReportedTag = structuredClone(reportedTag);
        clonedReportedTag.status = 'accepted';
        setReportedTag(clonedReportedTag);
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
      {/* <pre>{JSON.stringify(reportedTag, null, 2)}</pre> */}
      <div className="bg-red-50 p-1 my-1  rounded shadow">
        {/* tag */}
        <div className="flex w-full">
          <div className="w-full p-1 bg-slate-200 rounded">
            #: {reportedTag.tag.name}
          </div>
        </div>
        <div className="flex">
          <div className="m-1 p-1 bg-yellow-200 rounded text-[#717171] text-sm">
            Status: {reportedTag.status}
          </div>
        </div>
        {/* username */}
        <div className="flex">
          <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
            u: {reportedTag.tag.user.username}
          </div>
        </div>

        {/* date and edition */}
        <div className="flex">
          <div className="m-1 p-1 rounded text-[#717171] text-sm">
            {new Date(reportedTag.tag.createdAt).toLocaleString()}
          </div>
          <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
            <Link to={`/newSearches/${reportedTag.edition?.code}`} className="">
              {/* {urlEditionCode} */}
              {reportedTag.edition.name}
            </Link>
          </div>
        </div>
        {/* ACTION BUTTONS */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          {reportedTag && reportedTag.status !== 'discarded' && (
            <button
              onClick={handleDiscardButtonClick}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Discard
            </button>
          )}

          {reportedTag && reportedTag.status !== 'accepted' && (
            <button
              onClick={handleButtonRemoveClick}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove Tag
            </button>
          )}
        </div>
      </div>
    </>
  );
}
