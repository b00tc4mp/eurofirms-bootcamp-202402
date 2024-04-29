import { validate, errors } from 'com'

const { SystemError } = errors

function deletePost(postId) {
    validate.id(postId, 'post id')

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'authorization': `bearer ${sessionStorage.userId}` }
    })
        .catch(error => { throw new SystemError(error) })
        .then(res => {
            if (res.status === 204) return

            return res.json()
                .catch(error => { throw new SystemError(error) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })
}

export default deletePost