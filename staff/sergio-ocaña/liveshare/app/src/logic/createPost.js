import { errors, validate } from 'com'

const { SystemError } = errors

function createPost(image, text) {
    validate.token(sessionStorage.token)
    validate.image(image)
    validate.text(text)

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${sessionStorage.token}` },
        body: JSON.stringify({ image, text })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201)
                return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createPost