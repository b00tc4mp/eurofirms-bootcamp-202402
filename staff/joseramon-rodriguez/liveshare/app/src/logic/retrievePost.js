function retrievePost(postId) {
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: 'GET',
        headers: { 'authorization': 'bearer 66216b525f8dc92bbe2d13c6' },
    })
        .catch(error => { throw new Error(error) })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
        })
    // .then(post => console.log(post))

}

export default retrievePost