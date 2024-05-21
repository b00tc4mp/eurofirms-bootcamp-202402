import { errors, validate, } from "com";

const { SystemError } = errors

// TODO SALTA VALIDACION PORQUE LA BUSQUEDA LLEGA COMO UNDEFINED
function searchDiet() {
    validate.token(sessionStorage.token)

    validate.text(searchQuery, 'searchQuery')

    return fetch(`${import.meta.env.VITE_API_URL}/diets/search`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        },
        body: JSON.stringify({ searchQuery })

    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(users => users)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}


export default searchDiet
