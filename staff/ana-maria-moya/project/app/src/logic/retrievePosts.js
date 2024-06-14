import { errors } from 'com'

const { SystemError } = errors

function retrievePosts() {

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'GET',
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(posts => posts)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePosts