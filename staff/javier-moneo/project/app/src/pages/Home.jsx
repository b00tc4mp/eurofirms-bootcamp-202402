import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { errors } from '../com';

import logic from '../logic';
import SearcherHome from '../components/SearcherHome';

const { ContentError, MatchError } = errors;

function Home() {
  const [user, setUser] = useState(null);
  const [editionCode, setEditionCode] = useState('es');
  const [edition, setEdition] = useState(null);
  const [searcherName, setSearcherName] = useState('google'); // default google
  const [tagName, setTagName] = useState('NoTagged'); // recuerda edition y name
  const [searchTypeName, setSearchTypeName] = useState('web');

  useEffect(() => {
    try {
      if (logic.isUserLoggedIn()) {
        logic
          .retrieveUser()
          .then((user) => {
            console.log('hey setting user', user);
            setUser(user);
            setEditionCode(user.edition.code);
            setSearcherName(user.searcher.name);

            //load user edition
            logic
              .retrieveEditionByCode(user.edition.code)
              .then((editionRetrieved) => {
                setEdition(editionRetrieved);
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

  const handleChangeEdition = () => {};

  return (
    <>
      {/* <h1>Hola desde home {user && user.email}</h1> */}
      <SearcherHome
        editionCode={editionCode}
        searcherName={searcherName}
        tagName={tagName}
        searchTypeName={searchTypeName}
      />

      {edition && (
        <>
          <Link
            to={`/editionsList/${edition.code}`}
            className="w-full block text-center mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edition - {edition.name}
          </Link>
        </>
      )}
    </>
  );
}

export default Home;
