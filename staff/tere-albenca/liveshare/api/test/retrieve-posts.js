fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: { 'authorization': '661ce2138966a5e180a4154a' }

})
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error))