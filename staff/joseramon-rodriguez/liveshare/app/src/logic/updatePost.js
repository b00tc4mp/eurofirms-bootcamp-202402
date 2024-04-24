function updatePost(postId, text) {
    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'authorization': `bearer ${sessionStorage.userId}` },
        body: JSON.stringify({ text })
    })
        .then(res => {
            if (res.status === 200) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new Error(error) })
        })

        .catch(error => { throw new Error(error) })
}

export default updatePost