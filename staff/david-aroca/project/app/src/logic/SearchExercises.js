import { errors, validate, } from "com";

const { SystemError } = errors

function searchExercises(searchQuery) {
    validate.token(sessionStorage.token)
    validate.text(searchQuery, 'searchQuery')

    return fetch(`${import.meta.env.VITE_API_URL}/exercises/search?q=${searchQuery}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(exercise => exercise)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default searchExercises