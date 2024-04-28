import validate from './validate';
import errors from './errors';

function loginUser(username, password) {
  validate.username(username);
  validate.password(password);

  return fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      if (res.status === 200)
        return res.json().then((userId) => {
          sessionStorage.userId = userId;
        });

      return res.json().then((body) => {
        const { error, message } = body;

        const constructor = errors[error];

        throw new constructor(message);
      });
    });
}

export default loginUser;
