import { errors, validate } from 'com'

const { SystemError } = errors

function resetPassword(name, surname, email, newPassword, repeatPassword) {
    validate.name(name)
    validate.surname(surname)
    validate.email(email)
    validate.password(newPassword)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, newPassword, repeatPassword })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => {
                        const { error, message } = body

                        const constructor = errors[error]

                        throw new constructor(message)
                    })
        })
}
export default resetPassword