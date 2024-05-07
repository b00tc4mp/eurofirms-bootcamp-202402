import { validate, errors } from '../com';

const { SystemError } = errors;

function registerUser(username, birthdate, email, password, edition, searcher) {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      birthdate,
      email,
      password,
      editionCode: edition,
      searcherName: searcher,
    }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 201) return;

      return res
        .json()
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((body) => {
          const { error, message } = body;

          const constructor = errors[error];

          throw new constructor(message);
        });
    });
}

export default registerUser;
