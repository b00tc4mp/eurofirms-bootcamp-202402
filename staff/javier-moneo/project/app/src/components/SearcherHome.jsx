import { useEffect, useState } from 'react';
import logic from '../logic';

export default function SearcherHome({ editionCode, searcherName, tagName }) {
  const [edition, setEdition] = useState(null);
  const [searcher, setSearcher] = useState(null);
  const [menuSearchTypes, setMenuSeachTypes] = useState([]);

  useEffect(() => {
    console.log({
      page: 'SearcherHome.jsx',
      editionCode,
      searcherName,
      tagName,
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

              // pedimos MenuSearchType por editionId y searcherId
              logic
                .retrieveMenuSearchTypesByEditionAndSearcherId(
                  edition.id,
                  searcher.id
                )
                .then((menuSearchTypes) => {
                  // console.log(menuSearchTypes);
                  setMenuSeachTypes(menuSearchTypes);
                });
            })
            .catch((error) => {
              errorHandler(error);
            });

          // TODO:
          // pedimos MenuSearchTag po editionId
        })
        .catch((error) => {
          errorHandler(error);
        });
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
      <div>SearcherHome</div>
    </>
  );
}
