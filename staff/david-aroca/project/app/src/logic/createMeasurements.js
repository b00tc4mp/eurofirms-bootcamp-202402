import { errors, validate } from 'com'

const { SystemError } = errors

function createMeasurements(date, weight, torso, legs) {
    validate.token(sessionStorage.token)
    validate.date(date, 'date')
    validate.weight(weight, 'weight')
    validate.torso(torso, 'torso')
    validate.legs(legs, 'legs')

    return fetch(`${import.meta.env.VITE_API_URL}/measurements`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ date, weight, torso, legs })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201)
                return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createMeasurements
