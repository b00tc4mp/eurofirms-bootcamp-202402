import validate from "./validate"
import errors from "./errors"

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
            }

            return res.json(body => {
                const { error, message } = body

                constructor = window[error]

                throw new constructor(message)
            })
        })
}
export default retrievePost