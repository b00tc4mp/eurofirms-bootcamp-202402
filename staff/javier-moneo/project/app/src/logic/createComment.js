import { errors, validate, utils } from '../com';

const {
  SystemError,
  ContentError,
  MatchError,
  DuplicityError,
  RangeError,
  TypeError,
} = errors;

function createComment(searchId, text) {
  validate.token(sessionStorage.token);
  validate.id(searchId);
  validate.text(text);

  //   const { sub: userId } = utils.extractPayload(sessionStorage.token);

  return fetch(`${import.meta.env.VITE_API_URL}/comments/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      searchId,
      text,
    }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 201) {
        return; // no de vuelve nada en este caso
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

export default createComment;
