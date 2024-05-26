import { errors, validate } from 'com'

const { SystemError } = errors

function retrieveUserMeasurements(targetUserId) {
    validate.id(targetUserId, 'targetUserId')

    const token = sessionStorage.getItem('token')

    return fetch(`${import.meta.env.VITE_API_URL}/measurements/${targetUserId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(body => {
                    const { error, message } = body
                    const constructor = errors[error]
                    throw new constructor(message)
                })
            }
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}

export default retrieveUserMeasurements
