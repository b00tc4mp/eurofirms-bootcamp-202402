function retrieveUser() {
    return fetch(`http://localhost:8080/users/${sessionStorage.userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.userId}`
        }
    })

        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()


            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUser