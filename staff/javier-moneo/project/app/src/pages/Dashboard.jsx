import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [editionCode, setEditionCode] = useState('es');
  const [edition, setEdition] = useState(null);
  const [searcherName, setSearcherName] = useState('google'); // default google
  const [searchTypeName, setSearchTypeName] = useState('web');
  const [searchType, setSearchType] = useState(null);
  const [menuSearchTags, setMenuSearchTags] = useState(null);

  useEffect(() => {
    try {
      if (logic.isUserLoggedIn()) {
        //load user config
        logic
          .retrieveUser()
          .then((user) => {
            console.log('hey setting user', user);
            setUser(user);
            setSearcherName(user.searcher.name);
            setEditionCode(user.edition.code);
            //load user edition
            logic
              .retrieveEditionByCode(user.edition.code)
              .then((editionRetrieved) => {
                setEdition(editionRetrieved);

                //load searchType
                logic
                  .retrieveSearchTypeByName(searchTypeName)
                  .then((searchTypeRetrieved) => {
                    setSearchType(searchTypeRetrieved);

                    // load menuSearchTags
                    logic
                      .retrieveMenuSearchTagsByEditionIdAndSearchTypeId(
                        editionRetrieved.id,
                        searchTypeRetrieved.id
                      )
                      .then((menuSearchTagsRetrieved) => {
                        setMenuSearchTags(menuSearchTagsRetrieved);
                      });
                  })
                  .catch((error) => {
                    errorHandler(error);
                  });
              })
              .catch((error) => {
                errorHandler(error);
              });
          })
          .catch((error) => {
            errorHandler(error);
          });
      } else {
        // User no loggedIn
        //load default edition
        logic
          .retrieveEditionByCode(editionCode)
          .then((editionRetrieved) => {
            setEdition(editionRetrieved);

            //load searchType
            logic
              .retrieveSearchTypeByName(searchTypeName)
              .then((searchTypeRetrieved) => {
                setSearchType(searchTypeRetrieved);

                // load menuSearchTags
                logic
                  .retrieveMenuSearchTagsByEditionIdAndSearchTypeId(
                    editionRetrieved.id,
                    searchTypeRetrieved.id
                  )
                  .then((menuSearchTagsRetrieved) => {
                    setMenuSearchTags(menuSearchTagsRetrieved);
                  });
              })
              .catch((error) => {
                errorHandler(error);
              });
          })
          .catch((error) => {
            errorHandler(error);
          });
      }
    } catch (error) {
      errorHandler(error);
    }
  }, []);

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
        {/* <pre>{JSON.stringify(menuSearchTags, null, 2)}</pre> */}
        <h1 className="text-4xl font-bold text-center dark:text-white">
          Dashboard
        </h1>
        {menuSearchTags &&
          menuSearchTags.map((menuSearchTag) => (
            <Link
              key={menuSearchTag.id}
              to={`/newSearchesByEditionIdAndTagId/${menuSearchTag.edition.id}/${menuSearchTag.tag.id}`}
              className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {menuSearchTag.name} <span className='text-xs'>- {menuSearchTag.edition.name}</span>
            </Link>
          ))}

        <Link
          to={`/assignAllRolesToUser`}
          className="w-full block text-center mt-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Assign all roles to user
        </Link>
        <Link
          to={`/reportedSearches`}
          className="w-full block text-center mt-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Reported Searches
        </Link>
        <Link
          to={`/reportedComments`}
          className="w-full block text-center mt-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Reported Comments
        </Link>
        <Link
          to={`/reportedTags`}
          className="w-full block text-center mt-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Reported Tags
        </Link>
        <Link
          to={`/reportedUsers`}
          className="w-full block text-center mt-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Reported Users
        </Link>
      </div>
    </>
  );
}
