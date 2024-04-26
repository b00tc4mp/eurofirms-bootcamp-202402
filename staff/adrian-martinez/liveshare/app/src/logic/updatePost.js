function updatePost(postId, text){

    return fetch(`http://localhost:8080/posts/${postId}`, {

        method: "PATCH",
        headers: {
            "Authorization":`Bearer ${ sessionStorage.userId }`,
            "Content-type": "application/json"
        },

        body: JSON.stringify({ text })
    })
    .catch(error => { throw new Error(error.message) })
    .then(res => {
        if(res.status === 204) return;

        return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = window[error]

                    throw new constructor(message)
                })
    })
}

export default updatePost;