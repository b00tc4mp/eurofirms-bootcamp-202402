import errors from "./errors.js"
import validate from "./validate.js"

const { SystemError } = errors

function createPost(image, text) {
    const userId = sessionStorage.userId

    validate.text(text)
    validate.image(image)
    validate.userId(userId)

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.userId}`,
            'Content-Type': 'application/json'
        },
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