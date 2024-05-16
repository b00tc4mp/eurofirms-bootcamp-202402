import { errors, validate } from "com";

const { SystemError } = errors

function retrieveUsersWorks(targetUserId) {
    validate.token(sessionStorage.token)
    validate.id(targetUserId, 'targetUserId')

    return fetch(`http://localhost:8080/users/${targetUserId}/works`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(works => works)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUsersWorks