function retrievePosts() {
    return fetch('http://localhost:8080/posts', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.userId}`
        }
    })

        .catch(error => { throw new Error(error.message) })
}

export default retrievePosts