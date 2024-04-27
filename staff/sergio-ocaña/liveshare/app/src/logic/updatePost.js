import validate from "./validate"
import errors from "./errors"

const { SystemError } = errors

function updatePost(postId, text) {
    const userId = sessionStorage.userId

    validate.userId(userId)
    validate.postId(postId)
    validate.text(text)

    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${userId}` },
        body: JSON.stringify({ text: text })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default updatePost