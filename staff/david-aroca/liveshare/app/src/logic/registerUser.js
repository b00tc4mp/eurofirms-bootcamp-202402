import validate from "./validate.js"
import errors from "./errors.js"

const { SystemError } = errors

function registerUser(name, birthdate, email, username, password) {
    validate.name(name)
    validate.birthdate(birthdate)
    validate.username(username)
    validate.email(email)
    validate.password(password)

    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, birthdate, email, username, password })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201) return


            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}
export default registerUser