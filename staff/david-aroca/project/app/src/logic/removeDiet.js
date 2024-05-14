import { errors, validate } from 'com'

const { SystemError } = errors

function removeDiet(dietId) {
    validate.token(sessionStorage.token)
    validate.id(dietId, 'dietId')

    return fetch(`${import.meta.env.VITE_API_URL}/diets/${dietId}`, {
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

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default removeDiet