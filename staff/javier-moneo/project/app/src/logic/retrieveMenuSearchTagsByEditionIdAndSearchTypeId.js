import { errors, validate, utils } from '../com';

const { SystemError } = errors;

function retrieveMenuSearchTagsByEditionIdAndSearchTypeId(
  editionId,
  searchTypeId
) {
  // validate.token(sessionStorage.token);
  validate.id(editionId);
  validate.id(searchTypeId);

  //   const { sub: userId } = utils.extractPayload(sessionStorage.token);

  return fetch(
    `${
      import.meta.env.VITE_API_URL
    }/menuSearchTags/getByEditionIdAndSearchTypeId`,
    {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${sessionStorage.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        editionId,
        searchTypeId,
      }),
    }
  )
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
          .then((menuSearchTags) => menuSearchTags);

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

export default retrieveMenuSearchTagsByEditionIdAndSearchTypeId;
