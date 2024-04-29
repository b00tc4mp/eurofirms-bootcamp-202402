import { validate, errors } from 'com'

const { SystemError } = errors

function createPost(image, text) {
    validate.image(image)
    validate.text(text)
    validate.id(sessionStorage.userId, 'user id')

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${sessionStorage.userId}` },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 201) return

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

export default createPost