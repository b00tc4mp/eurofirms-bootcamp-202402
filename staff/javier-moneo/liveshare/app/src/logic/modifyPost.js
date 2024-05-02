import { validate, errors } from 'com';

const { SystemError } = errors;

function modifyPost(postId, text) {
  validate.token(sessionStorage.token);
  validate.id(postId, 'postId');
  validate.text(text);

  return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((res) => {
      if (res.status === 204) return;

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

export default modifyPost;
