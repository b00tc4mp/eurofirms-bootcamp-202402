import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveCommentsBySearchId(searchId, limit, page) {
  validate.id(searchId);
  console.log({ limit, page });

  return fetch(
    `${
      import.meta.env.VITE_API_URL
    }/comments/${searchId}?limit=${limit}&page=${page}`,
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
          .then((comments) => comments);

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

export default retrieveCommentsBySearchId;
