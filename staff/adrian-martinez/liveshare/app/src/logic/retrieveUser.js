import { errors, validate } from "com"

const { SystemError } = errors;

function retrieveUser() {

    validate.userId(sessionStorage.userId, "userId");

    return fetch(`http://localhost:8080/users/${sessionStorage.userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.userId}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(user => user)

            return res.json()
                .catch(error => { throw new SystemError(error.message)})
                .then(body => {
                    const { error, message } = body

                    const constructor = error[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUser;