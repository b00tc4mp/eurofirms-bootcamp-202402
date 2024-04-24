function deletePost(postId) {
  // validateText(image)
  // validateText(text)
  // TODO use sessionStorage.userId

  return fetch(`http://localhost:8080/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${sessionStorage.userId}`,
      'Content-type': 'application/json',
    },
  })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((res) => {
      if (res.status === 200) return;

      return res.json().then((body) => {
        const { error, message } = body;

        const constructor = window[error];

        throw new constructor(message);
      });
    });
}

export default deletePost;
