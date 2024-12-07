import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveEditionByEditionId(editionId) {
  validate.id(editionId);
  return fetch(
    `${import.meta.env.VITE_API_URL}/editions/getEditionById/${editionId}`,
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

export default retrieveEditionByEditionId;
