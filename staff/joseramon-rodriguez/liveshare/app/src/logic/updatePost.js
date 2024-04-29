import { validate, errors } from 'com'

const { SystemError } = errors

function updatePost(postId, text) {
    validate.id(postId, 'post id')
    validate.id(sessionStorage.userId, 'user id')
    validate.text(text)

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'authorization': `bearer ${sessionStorage.userId}` },
        body: JSON.stringify({ text })
    })
        .then(res => {
            if (res.status === 200) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error) })
        })

        .catch(error => { throw new SystemError(error) })
}

export default updatePost