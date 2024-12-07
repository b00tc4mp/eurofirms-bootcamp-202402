import { errors, validate, utils } from '../com';

const { SystemError } = errors;

function reportTag(editionId, tagId) {
  validate.token(sessionStorage.token);
  validate.id(editionId);
  validate.id(tagId);

  //   const { sub: userId } = utils.extractPayload(sessionStorage.token);

  return fetch(`${import.meta.env.VITE_API_URL}/reportTags`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      editionId,
      tagId,
    }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 201 || res.status === 200) return; // no de vuelve nada en este caso

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

export default reportTag;
