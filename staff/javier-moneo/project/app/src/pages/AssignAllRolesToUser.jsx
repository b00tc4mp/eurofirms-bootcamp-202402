import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import { SuccessMessage } from '../components/SuccessMessage';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function AssignAllRolesToUser() {
  const [secretWord, setSecretWord] = useState('');
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then((userRetrieved) => {
          setUser(userRetrieved);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    //if use no logged in redirect to login
    if (!logic.isUserLoggedIn()) {
      console.log('navigate to login');
      navigate('/login');
      return;
    }
    try {
      console.log('onsubmit');
      logic
        .assignAllRolesToUser(secretWord)
        .then(() => {
          console.log('assigned roles to user!');
          setSecretWord('');
          setSuccess(true);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleCancelClick = (event) => {
    console.log('cancel...');
    setSecretWord('');
    setSuccess(false);
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
    <div className="bg-white p-1 my-1  rounded shadow">
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Assign all roles to user
      </h1>
      {user && (
        <div className="bg-slate-100 p-1 my-1 text-sm rounded shadow">
          <div className="flex">
            <div className="font-bold">Username:</div>
            <div className="pl-2">{user.username}</div>
          </div>
          <div className="flex">
            <div className="font-bold">Email:</div>{' '}
            <div className="pl-2">{user.email}</div>
          </div>
        </div>
      )}

      <div>
        <form onSubmit={onSubmit}>
          <div className="">
            <label
              htmlFor="secretWord"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Insert the secret word
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="secretWord"
                id="secretWord"
                autoComplete="secretWord"
                value={secretWord}
                onChange={(e) => setSecretWord(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={handleCancelClick}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Accept
            </button>
          </div>
        </form>
      </div>
      {success && (
        <div className="mt-2">
          <SuccessMessage initialMessage={'Roles assigned successfully'} />
        </div>
      )}
    </div>
  );
}
