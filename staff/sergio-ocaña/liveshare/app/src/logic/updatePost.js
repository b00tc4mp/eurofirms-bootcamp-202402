import { errors, validate } from 'com'

const { SystemError } = errors

function updatePost(postId, text) {
    validate.token(sessionStorage.token)
    validate.id(postId, 'postId')
    validate.text(text)

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${sessionStorage.token}` },
        body: JSON.stringify({ text: text })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default updatePost