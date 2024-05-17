import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';

export default function Dashboard() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center dark:text-white">
          Dashboard
        </h1>
        <Link
          to={`/assignAllRolesToUser`}
          className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Assign all roles to user
        </Link>
        <Link
          to={`/reportedSearches`}
          className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reported Searches
        </Link>
        <Link
          to={`/reportedComments`}
          className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reported Comments
        </Link>
        <Link
          to={`/reportedTags`}
          className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reported Tags
        </Link>
      </div>
    </>
  );
}
