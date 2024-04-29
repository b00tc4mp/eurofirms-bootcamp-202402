import { validate, errors } from 'com'

const { SystemError } = errors

function retrievePost(postId) {
    validate.id(postId, 'post id')

    return fetch(`http://localhost:8080/post/${postId}`, {
        method: 'GET',
        headers: { 'authorization': 'bearer 66216b525f8dc92bbe2d13c6' },
    })
        .catch(error => { throw new SystemError(error) })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePost