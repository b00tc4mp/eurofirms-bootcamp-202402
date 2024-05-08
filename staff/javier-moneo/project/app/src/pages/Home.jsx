import { useEffect, useState } from 'react';
import { errors } from '../com';

import logic from '../logic';
import SearcherHome from '../components/SearcherHome';

const { ContentError, MatchError } = errors;

function Home() {
  const [user, setUser] = useState(null);
  const [editionCode, setEditionCode] = useState('es');
  const [searcherName, setSearcherName] = useState('google');// default google
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
          })
          .catch((error) => {
            console.error(error.message);

            let feedback = error.message;

            if (
              error instanceof TypeError ||
              error instanceof RangeError ||
              error instanceof ContentError
            )
              feedback = `${feedback}, please correct it`;
            else if (error instanceof MatchError)
              feedback = `${feedback}, please verify user`;
            else feedback = 'sorry, there was an error, please try again later';

            alert(feedback);
          });
      }
    } catch (error) {
      console.error(error.message);

      let feedback = error.message;

      if (
        error instanceof TypeError ||
        error instanceof RangeError ||
        error instanceof ContentError
      )
        feedback = `${feedback}, please correct it`;
      else feedback = 'sorry, there was an error, please try again later';

      alert(feedback);
    }
  }, []);

  return (
    <>
      {/* <h1>Hola desde home {user && user.email}</h1> */}
      <SearcherHome
        editionCode={editionCode}
        searcherName={searcherName}
        tagName={tagName}
        searchTypeName={searchTypeName}
      />
    </>
  );
}

export default Home;
