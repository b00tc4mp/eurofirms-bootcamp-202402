import { errors, validate, utils } from 'com'

const { SystemError } = errors 

function retrieveUser() {
    validate.token(sessionStorage.token)

    const { sub: userId } = utils.extractPayload(sessionStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
    .catch(error => { throw new SystemError(error.message) })
    .then(res => {
        if (res.status === 200) {
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(user => {
                  
                    if (!user || !user.role) {
                        throw new SystemError('User data incomplete or missing role')
                    }
                    return user
                })
        } else {
            throw new SystemError('Failed to retrieve user data')
        }
    })
}

export default retrieveUser
