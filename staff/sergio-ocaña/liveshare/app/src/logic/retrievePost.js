function retrievePost(postId) {
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${sessionStorage.userId}` }
    })
        .catch(error => { throw new Error(error) })
        .then(res => {
            if (res.status === 200) {

                console.log(res)
                return res.json()
            }

            return res.json(body => {
                const { error, message } = body

                constructor = window[error]

                throw new constructor(message)
            })
        })
}
export default retrievePost