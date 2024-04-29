import { validate, errors } from 'com'

const { SystemError } = errors

function retrieveUser() {
    validate.id(sessionStorage.userId, 'user id')

    return fetch(`http://localhost:8080/users/${sessionStorage.userId}`, {
        method: 'GET',
        headers: { 'authorization': `Bearer ${sessionStorage.userId}` },
    })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(res => {
                    const { error, message } = res

                    const constructor = errors[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveUser