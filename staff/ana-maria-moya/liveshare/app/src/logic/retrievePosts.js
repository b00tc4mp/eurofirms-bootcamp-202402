function retrievePosts() {
    // TODO use sessionStorage.userId
    return fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.userId}`
        }
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 200)
                return res.json()
            //.then(posts => posts)

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePosts