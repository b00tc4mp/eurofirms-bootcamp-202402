import { errors, validate } from 'com';

const { SystemError } = errors;

function retrieveComments(postId) {
    validate.id(postId, 'postId');
   

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments`, {
        method: 'GET',
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(comments => comments);
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];

                    throw new constructor(message);
                });
        });
}

export default retrieveComments;