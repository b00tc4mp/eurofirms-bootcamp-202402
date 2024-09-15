import { validate, errors } from 'com'

const { SystemError } = errors

function updatePost(postId, text) {
    validate.token(sessionStorage.token)
    validate.id(postId, 'post id')
    validate.text(text)

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'authorization': `bearer ${sessionStorage.token}` },
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