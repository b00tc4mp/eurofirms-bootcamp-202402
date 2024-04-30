import { errors, validate } from 'com'

const { SystemError } = errors

function retrieveUser() {
    const userId = sessionStorage.userId

    validate.userId(userId)

    return fetch(`http://localhost:8080/users/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUser