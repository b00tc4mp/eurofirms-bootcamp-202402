fetch('http://localhost:8080/post/662244e2ce4373b1aca2b0e4', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'authorization': 'bearer 66216b525f8dc92bbe2d13c6' },
})
    .then(res => res.json())
    .then(post => console.log(post))

    .catch(error => console.error(error))