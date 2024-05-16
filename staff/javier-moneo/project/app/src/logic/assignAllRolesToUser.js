import { errors, validate } from '../com';

const { SystemError } = errors;

function assignAllRolesToUser(secretAdminWord) {
  validate.token(sessionStorage.token);

  //   const { sub: userId } = utils.extractPayload(sessionStorage.token);

  return fetch(`${import.meta.env.VITE_API_URL}/auth/asignAllRolesToUser`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secretAdminWord,
    }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 200) return; // no de vuelve nada en este caso

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

export default assignAllRolesToUser;