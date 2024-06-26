import { errors, validate, utils } from 'com'

const { SystemError } = errors

function retrieveUser() {
    validate.token(sessionStorage.token)

    const { sub: userId } = utils.extractPayload(sessionStorage.token)

    validate.id(userId)

    return fetch(`http://localhost:8080/users/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
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