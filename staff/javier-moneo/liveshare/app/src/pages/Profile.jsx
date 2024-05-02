import { useEffect, useState } from 'react';
import logic from '../logic';

import { errors } from 'com';

const { ContentError, TypeError, RangeError, MatchError } = errors;

function Profile({ targetUserId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log(targetUserId);

    try {
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
    logic
      .retrieveUser(targetUserId)
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
      })
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      <section className="flex flex-col gap-6 px-2 py-14">
        <h1>Profile: {user?.username}</h1>
        <span>Name: {user?.name}</span>
        <p>{targetUserId}</p>
      </section>
    </>
  );
}

export default Profile;
