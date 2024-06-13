import { errors, validate, utils } from 'com'

const { SystemError } = errors

function retrieveUser() {
    validate.token(sessionStorage.token)


    const { sub: userId } = utils.extractPayload(sessionStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/users/${sessionStorage.userId}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUser