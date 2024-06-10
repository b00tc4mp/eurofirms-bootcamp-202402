import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveSearchesByEditionIdAndTagIdPaginated(
  editionId,
  tagId,
  limit,
  page
) {
  // validate.token(sessionStorage.token);
  validate.id(editionId);
  validate.id(tagId);
  console.log({ limit, page });

  return fetch(
    `${
      import.meta.env.VITE_API_URL
    }/searches/getByEdtionIdAndTagId?limit=${limit}&page=${page}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        editionId,
        tagId,
      }),
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
          .then((searches) => searches);

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

export default retrieveSearchesByEditionIdAndTagIdPaginated;
