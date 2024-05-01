import { errors, validate } from 'com'
const { SystemError } = errors

function loginUser(username, password) {
    validate.username(username)
    validate.password(password)

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .then(token => {
                        sessionStorage.token = token
                    })
            }
            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })


}

export default loginUser