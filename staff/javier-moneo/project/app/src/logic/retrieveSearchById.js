import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveSearchById(searchId) {
  validate.id(searchId);

  return fetch(
    `${import.meta.env.VITE_API_URL}/searches/${searchId}`,
    {
      method: 'GET',
    }
  )
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      if (res.status === 200)
        return res
          .json()
          .catch((error) => {
            throw new SystemError(error.message);
          })
          .then((search) => search);

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

export default retrieveSearchById;
