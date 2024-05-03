import { errors, validate } from 'com'

const { SystemError } = errors

function retrievePost(postId) {
    validate.token(sessionStorage.token)
    validate.id(postId, 'postId')

    return fetch(`${import.meta.env.VITE_API_URL}/${postId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${sessionStorage.token}` }
    })
        .catch(error => { throw new SystemError(error) })
        .then(res => {
            if (res.status === 200) {

                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
            }

            return res.json(body => {
                const { error, message } = body

                constructor = errors[error]

                throw new constructor(message)
            }).catch(error => { throw new SystemError(error.message) })
        })
}
export default retrievePost