import { errors, validate } from 'com'

const { SystemError } = errors

function removeMeasurements(measurementId) {
    validate.token(sessionStorage.token)
    validate.id(measurementId, 'measurementId')

    return fetch(`${import.meta.env.VITE_API_URL}/measurements/${measurementId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 204)
                return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = error[error]

                    throw new constructor(message)
                })
        })

}

export default removeMeasurements