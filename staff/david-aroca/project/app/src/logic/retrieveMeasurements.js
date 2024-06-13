import { errors, validate } from 'com'

const { SystemError } = errors

function retrieveMeasurements() {
    validate.token(sessionStorage.token)

    // filtrado de fechas TODO

    return fetch(`${import.meta.env.VITE_API_URL}/measurements`, {
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
                    .then(measurements => measurements)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = error[error]

                    throw new constructor(message)
                })

        })
}

export default retrieveMeasurements
