import validate from './validate';
import errors from './errors';

function createPost(image, text) {
  validate.text(image);
  validate.text(text);
  // TODO use sessionStorage.userId

  return fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.userId}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ image, text }),
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      if (res.status === 201) return;

      return res.json().then((body) => {
        const { error, message } = body;

        const constructor = errors[error];

        throw new constructor(message);
      });
    });
}

export default createPost;
