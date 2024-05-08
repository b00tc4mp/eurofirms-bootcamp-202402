import { useEffect, useState } from 'react';
import logic from '../logic';
import { XMarkIcon, PlusIcon } from '@heroicons/react/20/solid';

export default function SearcherHome({
  editionCode,
  searcherName,
  tagName,
  searchTypeName,
}) {
  const [edition, setEdition] = useState(null);
  const [searcher, setSearcher] = useState(null);
  const [searchers, setSearchers] = useState([]);
  const [menuSearchTypes, setMenuSeachTypes] = useState([]);
  const [searchType, setSearchType] = useState(null);
  const [searcherIdSelected, setSearcherIdSelected] = useState(null);
  const [inputSearchField, setInputSearchField] = useState('');
  const [inputTagField, setInputTagField] = useState('');

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

          // TODO: eesto no hace falta de momento
          // pedimos MenuSearchTag po editionId
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
        <form>
          {/* searchers */}
          <div className="sm:col-span-3">
            <div className="mt-2">
              {searchers && searcherIdSelected && (
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
                        {displayName}
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
                type="button"
                className="rounded-full ml-2  bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
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
        </form>
      </div>
    </>
  );
}
