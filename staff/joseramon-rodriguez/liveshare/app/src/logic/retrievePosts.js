import { validate, errors } from 'com'

const { SystemError } = errors

function retrievePosts() {
    validate.token(sessionStorage.token)

    return fetch('http://localhost:8080/posts/', {
        method: 'GET',
        headers: { 'authorization': `Bearer ${sessionStorage.token}` },
    })
        .then(res => {
            if (res.status === 200) return res.json()//<--posts are here to be reversed

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error) })
        })
        .catch(error => { throw new SystemError(error) })
}

export default retrievePosts