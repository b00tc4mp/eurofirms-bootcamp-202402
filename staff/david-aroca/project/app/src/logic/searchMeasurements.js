import { errors, validate, } from "com"

const { SystemError } = errors


// TODO RENOMBRAR
function searchMeasurements(startDate, endDate) {
    validate.token(sessionStorage.token)
    validate.date(startDate, 'startDate')
    validate.date(endDate, 'endDate')

    return fetch(`${import.meta.env.VITE_API_URL}/measurement/search?startDate=${startDate}&endDate=${endDate}`, {
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

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}
export default searchMeasurements