function createPost(image, text) {
    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${sessionStorage.userId}` },
        body: JSON.stringify({ image, text })
    })

        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 200)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
}

export default createPost