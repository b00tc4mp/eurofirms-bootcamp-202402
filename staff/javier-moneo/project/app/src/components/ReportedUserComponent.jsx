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

export default function ReportedUserComponent({ initialReportedUser }) {
  const [reportedUser, setReportedUser] = useState(initialReportedUser);

  const handleDiscardButtonClick = () => {
    console.log('discarding reportUser...', reportedUser.id);
    logic
      .discardReportUserById(reportedUser.id)
      .then(() => {
        console.log('discard reportUser');
        const clonedReportedUser = structuredClone(reportedUser);
        clonedReportedUser.status = 'discarded';
        setReportedUser(clonedReportedUser);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const handleButtonRemoveClick = () => {
    console.log('removing reportUser...', reportedUser.id);
    logic
      .removeReportUserById(reportedUser.id)
      .then(() => {
        console.log('removed reportUser');
        const clonedReportedUser = structuredClone(reportedUser);
        clonedReportedUser.status = 'accepted';
        setReportedUser(clonedReportedUser);
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
      {/* <pre>{JSON.stringify(reportedUser, null, 2)}</pre> */}
      <div className="bg-red-50 p-1 my-1  rounded shadow">
        {/* username */}
        <div className="flex w-full">
          <div className="w-full p-1 bg-slate-200 rounded">
            u: {reportedUser.user.username}
          </div>
        </div>
        <div className="flex">
          <div className="m-1 p-1 bg-yellow-200 rounded text-[#717171] text-sm">
            Status: {reportedUser.status}
          </div>
        </div>

        {/* date and edition */}
        <div className="sm:flex">
          <div className="m-1 p-1 rounded text-[#717171] text-sm">
            {new Date(reportedUser.createdAt).toLocaleString()}
          </div>
          <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
            {reportedUser.user.edition.name}
          </div>
          <div className="m-1 p-1 bg-slate-50 rounded text-[#717171] text-sm">
            {reportedUser.user.searcher.displayName}
          </div>
        </div>
        {/* roles */}
        <div className="sm:flex">
          <div className="m-1 p-1 bg-green-100 rounded text-[#717171] text-sm">
            Roles:
          </div>
          {reportedUser.user.roles?.map((role) => (
            <div
              key={role.id}
              className="m-1 p-1 bg-yellow-100 rounded text-[#717171] text-sm"
            >
              {role.name}
            </div>
          ))}
        </div>
        {/* ACTION BUTTONS */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          {reportedUser && reportedUser.status !== 'discarded' && (
            <button
              onClick={handleDiscardButtonClick}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Discard
            </button>
          )}

          {reportedUser && reportedUser.status !== 'accepted' && (
            <button
              onClick={handleButtonRemoveClick}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove User
            </button>
          )}
        </div>
      </div>
    </>
  );
}
