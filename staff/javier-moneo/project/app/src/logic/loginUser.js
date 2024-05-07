import { validate, errors } from '../com';

const { SystemError } = errors;

function loginUser(email, password) {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 200)
        return res
          .json()
          .catch((error) => {
            throw new SystemError(error.message);
          })
          .then((token) => {
            // console.log(token);
            sessionStorage.token = token;
          });

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

export default loginUser;
