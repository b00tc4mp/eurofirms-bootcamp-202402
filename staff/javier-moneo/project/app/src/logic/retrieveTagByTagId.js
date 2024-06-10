import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveTagByTagId(tagId) {
  validate.id(tagId);
  return fetch(`${import.meta.env.VITE_API_URL}/tags/${tagId}`, {
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

export default retrieveTagByTagId;
