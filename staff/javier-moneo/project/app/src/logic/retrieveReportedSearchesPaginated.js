import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveReportedSearchesPaginated(limit, page) {
  validate.token(sessionStorage.token);
  console.log({ limit, page });

  return fetch(
    `${
      import.meta.env.VITE_API_URL
    }/reportSearches?limit=${limit}&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
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
          .then((reportedSearches) => reportedSearches);

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

export default retrieveReportedSearchesPaginated;
