import { errors, validate } from "com";

const { SystemError } = errors;

function updatePost(postId, text){

    validate.token(sessionStorage.token);

    return fetch(`http://localhost:8080/posts/${postId}`, {

        method: "PATCH",
        headers: {
            "Authorization":`Bearer ${ sessionStorage.token }`,
            "Content-type": "application/json"
        },

        body: JSON.stringify({ text })
    })
    .catch(error => { throw new SystemError(error.message) })
    .then(res => {
        if(res.status === 204) return;

        return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
    })
}

export default updatePost;