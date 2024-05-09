import { errors, validate, utils } from '../com';

const { SystemError } = errors;

function createSearch(query, editionId, tagName, searcherId, searchTypeId) {
  validate.token(sessionStorage.token);
  validate.searchQuery(query);
  validate.tagName(tagName);
  validate.id(editionId);
  validate.id(searcherId);
  validate.id(searchTypeId);

  //   const { sub: userId } = utils.extractPayload(sessionStorage.token);

  return fetch(`${import.meta.env.VITE_API_URL}/searches/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      editionId,
      tagName,
      searcherId,
      searchTypeId,
    }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        // 200 ok, exists search in db
        // 201 created new search
        return res
          .json()
          .catch((error) => {
            throw new SystemError(error.message);
          })
          .then((searchUrlAndMessage) => searchUrlAndMessage);
      }

      if (res.status === 400) {
        console.error('SUPER ERROR 400 probando si pasa por aqui');
      }
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

export default createSearch;
