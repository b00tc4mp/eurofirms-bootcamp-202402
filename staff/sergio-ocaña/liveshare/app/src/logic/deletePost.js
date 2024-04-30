import { errors, validate } from 'com'

const { SystemError } = errors

function deletePost(postId) {
    const userId = sessionStorage.userId

    validate.userId(userId)
    validate.postId(postId)

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
        headers: { authorization: `Bearer ${userId}` }
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