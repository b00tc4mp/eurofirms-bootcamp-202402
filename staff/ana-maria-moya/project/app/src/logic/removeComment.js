import { errors, validate } from 'com'

const { SystemError } = errors

function removeComment(postId, commentId) {
    validate.id(postId, 'postId')
    validate.id(commentId, 'commentId')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
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

export default removeComment