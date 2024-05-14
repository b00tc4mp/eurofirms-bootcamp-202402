import { errors, validate, utils } from 'com'

const { SystemError } = errors

function retrieveBet(betId) {
    validate.token(sessionStorage.token)
    validate.id(betId, 'bet id')

    const { sub: userId } = utils.extractPayload(sessionStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/bet/${betId}`, {
        method: 'GET',
        headers: { authorization: `Bearer ${sessionStorage.token}` }
    })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(res => {
                    const { error, message } = res

                    const constructor = errors[error]


                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveBet