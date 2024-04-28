import validate from "./validate"
import errors from "./errors"

const { SystemError } = errors

function createPost(image, text) {
    const userId = sessionStorage.userId

    validate.userId(userId)
    validate.image(image)
    validate.text(text)

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${userId}` },
        body: JSON.stringify({ image, text })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createPost