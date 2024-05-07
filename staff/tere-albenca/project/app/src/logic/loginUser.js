import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function loginUser(email, password) {
    validate.email(email)
    validate.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new MatchError(error.message) })
                    .then(token => sessionStorage.token = token)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                })
        })
}
export default loginUser