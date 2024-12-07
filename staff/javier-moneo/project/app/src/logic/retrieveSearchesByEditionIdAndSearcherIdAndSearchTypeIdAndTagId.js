import { validate, errors } from '../com';

const { SystemError } = errors;

function retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId(
  editionId,
  searcherId,
  searchTypeId,
  tagId
) {
  // No validamos porque queremos que nos traiga resultados si faltan los otros parametros
  // console.log('inside retrieve', editionId, searcherId, searchTypeId, tagId);
  return fetch(`${import.meta.env.VITE_API_URL}/searches/getByAllParamsId`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      editionId,
      searcherId,
      searchTypeId,
      tagId,
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

export default retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId;
