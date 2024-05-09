fetch('http://localhost:8080/posts/6627d66861602b1961d0d4ee', {
    method: 'DELETE',
    headers: { "Authorization": "Bearer 66224af9cb2992f34165c8dc" },
})
    .then(() => console.log("Post deleted"))
    .catch(error => console.error(error))