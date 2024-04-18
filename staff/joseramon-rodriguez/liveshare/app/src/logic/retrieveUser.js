function retrieveUser() {
    fetch(`http://localhost:8080/users/${sessionStorage.userId}`, {
        method: 'GET',
        headers: { 'authorization': `Bearer ${sessionStorage.userId}` },
    })
        .then(res => {
            if (res.status === 201) return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new Error(error) })
        })
        .catch(error => console.error(error))
}

export default retrieveUser