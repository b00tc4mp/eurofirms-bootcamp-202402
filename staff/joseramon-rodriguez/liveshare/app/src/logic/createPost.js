function createPost(image, text) {
    // validateText(image)
    // validateText(text)
    fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${sessionStorage.userId}` },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 201) return

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

export default createPost