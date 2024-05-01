import { errors, validate } from 'com'

const { SystemError } = errors

function deletePost(postId) {
    validate.token(sessionStorage.token)
    validate.id(postId, 'postId')

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
        headers: { authorization: `Bearer ${sessionStorage.token}` }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 204) return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default deletePost