import validate from "./validate"
import errors from "./errors"

const { SystemError } = errors

function retrievePosts() {
    const userId = sessionStorage.userId

    validate.userId(userId)

    return fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: { authorization: `bearer ${userId}` }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePosts