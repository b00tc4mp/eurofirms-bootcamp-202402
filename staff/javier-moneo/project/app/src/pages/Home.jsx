import { useEffect, useState } from 'react';
import { errors } from '../com';

import logic from '../logic';

const { ContentError, MatchError } = errors;

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then((user) => {
          // console.log('hey setting user');
          setUser(user);
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
      <h1>Hola desde home{user && user.email}</h1>
    </>
  );
}

export default Home;
