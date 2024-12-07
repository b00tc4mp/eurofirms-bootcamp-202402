import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveEditionByCode(code) {
  return fetch(`${import.meta.env.VITE_API_URL}/editions/${code}`, {
    method: 'GET',
  })
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
          .then((edition) => edition);

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

export default retrieveEditionByCode;
