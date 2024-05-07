import { useEffect, useState } from 'react';
import { errors } from '../com';

import logic from '../logic';

const { ContentError, MatchError } = errors;

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      if (logic.isUserLoggedIn()) {
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
      <h1>Hola desde home{user && user.email}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad,
        laborum aliquid consequuntur officiis et voluptas in error quae velit
        neque veniam esse. Numquam officia reiciendis earum. Voluptate, mollitia
        deleniti?
      </p>
    </>
  );
}

export default Home;
