function deletePost(postId) {
    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'authorization': `bearer ${sessionStorage.userId}` }
    })
        .catch(error => { throw new Error(error) })
        .then(res => {
            if (res.status === 204) return

            return res.json()
                .catch(error => { throw new Error(error) })
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })

        })
}

export default deletePost