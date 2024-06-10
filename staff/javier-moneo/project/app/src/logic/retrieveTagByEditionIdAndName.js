import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveTagByEditionIdAndName(editionId, name) {
  validate.id(editionId);
  return fetch(`${import.meta.env.VITE_API_URL}/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      editionId,
      name,
    }),
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
          .then((tag) => tag);

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

export default retrieveTagByEditionIdAndName;
