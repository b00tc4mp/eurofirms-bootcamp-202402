import { useEffect, useState } from 'react';
import logic from '../logic';
import {
  XMarkIcon,
  PlusIcon,
  MagnifyingGlassPlusIcon,
} from '@heroicons/react/20/solid';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { errors } from '../com';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function SearcherHome({
  editionCode,
  searcherName,
  tagName,
  searchTypeName,
  urlEditionCode,
}) {
  const navigate = useNavigate();
  const [edition, setEdition] = useState(null);
  const [searcher, setSearcher] = useState(null);
  const [searchers, setSearchers] = useState([]);
  const [menuSearchTypes, setMenuSeachTypes] = useState([]);
  const [searchType, setSearchType] = useState(null);
  const [searcherIdSelected, setSearcherIdSelected] = useState(null);
  const [inputSearchField, setInputSearchField] = useState('');
  const [inputTagField, setInputTagField] = useState('');
  const [messageStrong, setMessageStrong] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log({
      page: 'SearcherHome.jsx',
      editionCode,
      searcherName,
      tagName,
      searchTypeName,
    });

    try {
      // el tag de momento no es necesario

      // pedir edition by code
      if (urlEditionCode) {
        editionCode = urlEditionCode;
      }
      logic
        .retrieveEditionByCode(editionCode)
        .then((edition) => {
          // console.log(edition);
          setEdition(edition);

          // pedir searcher by name
          logic
            .retrieveSearcherByName(searcherName)
            .then((searcher) => {
              //   console.log(searcher);
              setSearcher(searcher);
              setSearcherIdSelected(searcher.id);

              // pedimos MenuSearchType por editionId y searcherId
              logic
                .retrieveMenuSearchTypesByEditionAndSearcherId(
                  edition.id,
                  searcher.id
                )
                .then((menuSearchTypes) => {
                  // console.log(menuSearchTypes);
                  setMenuSeachTypes(menuSearchTypes);
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

      // searchTypeName
      logic
        .retrieveSearchTypeByName(searchTypeName)
        .then((searchType) => {
          // console.log(searchType);
          setSearchType(searchType);
        })
        .catch((error) => {
          errorHandler(error);
        });

      // searchers
      logic.retrieveSearchersActive().then((searchersReceived) => {
        // console.log(searchersReceived);
        setSearchers(searchersReceived);
      });
    } catch (error) {
      errorHandler(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (edition && searcherIdSelected) {
        logic
          .retrieveMenuSearchTypesByEditionAndSearcherId(
            edition.id,
            searcherIdSelected
          )
          .then((menuSearchTypes) => {
            // console.log(menuSearchTypes);
            setMenuSeachTypes(menuSearchTypes);

            // select searchType by default to the first option menu
            if (menuSearchTypes.length > 0) {
              setSearchType(menuSearchTypes[0].searchType);
            }
          })
          .catch((error) => {
            errorHandler(error);
          });

        logic
          .retrieveSearcherById(searcherIdSelected)
          .then((searcherRetrieved) => {
            setSearcher(searcherRetrieved);
          })
          .catch((error) => {
            errorHandler(error);
          });
      }
    } catch (error) {
      errorHandler(error);
    }
  }, [searcherIdSelected]);

  const handleChangeSearcher = (event) => {
    const searcherId = event.target.value;
    console.log(searcherId);
    // al cambiar este campo que se ejecute un useffect para refrescar el menu
    setSearcherIdSelected(searcherId);
  };

  const handleLinkMenuSearchTypesClick = (searchTypeName) => {
    // cargar el searchType y setearlo
    console.log(searchTypeName);
    try {
      if (searchTypeName) {
        // searchTypeName
        logic
          .retrieveSearchTypeByName(searchTypeName)
          .then((searchType) => {
            // console.log(searchType);
            setSearchType(searchType);
          })
          .catch((error) => {
            errorHandler(error);
          });
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //if use no logged in redirect to login
    if (!logic.isUserLoggedIn()) {
      console.log('navigate to login');
      navigate('/login');
      return;
    }

    try {
      logic
        .createSearch(
          inputSearchField,
          edition.id,
          inputTagField,
          searcher.id,
          searchType.id
        )
        .then((searchUrlAndMessage) => {
          console.log(searchUrlAndMessage);
          setMessageStrong(searchUrlAndMessage.message);
          setMessage(inputSearchField);
          if (event.nativeEvent?.submitter?.name === 'addSearch') {
            console.log(event.nativeEvent?.submitter?.name);
          } else if (event.nativeEvent?.submitter?.name === 'addSearchAndGo') {
            console.log(event.nativeEvent?.submitter?.name);
            window.open(searchUrlAndMessage.url, '_blank'); // open new tab with search
          }
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleCloseMessageButton = () => {
    setMessageStrong(null);
    setMessage(null);
  };

  const handleResetSearchButton = () => {
    setInputSearchField('');
  };

  const handleResetTagButton = () => {
    setInputTagField('');
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
      <div>
        <form onSubmit={onSubmit}>
          {/* searchers */}
          <div className="sm:col-span-3">
            <div className="mt-2">
              {searchers && searcherIdSelected && edition && (
                <>
                  <select
                    id="searcher"
                    name="searcher"
                    className="block w-full rounded-md border-0 py-1.5 font-bold text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6"
                    value={searcherIdSelected}
                    onChange={handleChangeSearcher}
                  >
                    {searchers.map(({ id, name, displayName }) => (
                      <option key={name} value={id}>
                        {displayName} - {edition.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>

          {/* inputsearch */}
          <div className="sm:col-span-3">
            <div className="mt-2 flex">
              {/* button reset inputsearch */}
              <button
                type="button"
                onClick={handleResetSearchButton}
                className="rounded-full mr-2 bg-gray-300 p-2 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <input
                type="text"
                name="inputsearch"
                id="inputsearch"
                value={inputSearchField}
                onChange={(e) => setInputSearchField(e.target.value)}
                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search here..."
              />

              {/* button addsearch */}
              <button
                type="submit"
                name="addSearch"
                className="rounded-full ml-2  bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* button addsearch and go */}
              <button
                type="submit"
                name="addSearchAndGo"
                className="rounded-full ml-2  bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <MagnifyingGlassPlusIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* LINK DOWN SEARCHER */}
          <div className="sm:col-span-3">
            <div className="mt-2 flex">
              {menuSearchTypes && (
                <>
                  {menuSearchTypes.map((menuSearchType) => (
                    <a
                      key={menuSearchType.id}
                      href="#"
                      onClick={() =>
                        handleLinkMenuSearchTypesClick(
                          menuSearchType.searchType.name
                        )
                      }
                      className={
                        searchType.name === menuSearchType.searchType.name
                          ? 'mx-2 font-medium text-blue-800 dark:text-blue-500 hover:underline'
                          : 'mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      }
                    >
                      {menuSearchType.name}
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* HASHTAG */}
          <div className="sm:col-span-3 mt-4 flex">
            {/* button reset inputtag */}
            <button
              type="button"
              onClick={handleResetTagButton}
              className="rounded-full mr-2 bg-gray-300 p-2 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <input
              type="text"
              name="tag"
              id="tag"
              value={inputTagField}
              onChange={(e) => setInputTagField(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Hashtag here..."
            />
          </div>

          {/* message output */}
          {messageStrong && (
            <>
              <div className="sm:col-span-3 mt-4 ">
                <div
                  className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">{messageStrong}! </strong>
                  <span className="block sm:inline">{message}</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      onClick={handleCloseMessageButton}
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              </div>
            </>
          )}
        </form>

        {edition && searcher && (
          <>
            <Link
              to={`/newSearches/${edition.code}/${searcher.name}`}
              className="w-full block text-center mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              New Searches - {searcher.name} - {edition.name}
            </Link>
          </>
        )}
      </div>
    </>
  );
}
