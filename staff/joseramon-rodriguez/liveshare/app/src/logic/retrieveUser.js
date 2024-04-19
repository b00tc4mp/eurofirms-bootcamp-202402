function retrieveUser() {
    return fetch(`http://localhost:8080/users/${sessionStorage.userId}`, {
        method: 'GET',
        headers: { 'authorization': `Bearer ${sessionStorage.userId}` },
    })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(res => {
                    const { error, message } = res

                    const constructor = Window[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new Error(error) })
        })
        .catch(error => console.error(error))
}

export default retrieveUser