import { errors, validate } from 'com'

const { SystemError } = errors

function retrievePost(postId) {
    const userId = sessionStorage.userId

    validate.userId(userId)
    validate.postId(postId)

    return fetch(`http://localhost:8080/post/${postId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${userId}` }
    })
        .catch(error => { throw new SystemError(error) })
        .then(res => {
            if (res.status === 200) {

                console.log(res)
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