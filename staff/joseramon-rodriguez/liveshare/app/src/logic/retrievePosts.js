function retrievePosts() {
    fetch('http://localhost:8080/posts/', {
        method: 'GET',
        headers: { 'authorization': `Bearer ${sessionStorage.userId}` },
    })
        .then(res => {
            if (res.status === 201) return res.json()//<--posts are here to be reversed

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

export default retrievePosts