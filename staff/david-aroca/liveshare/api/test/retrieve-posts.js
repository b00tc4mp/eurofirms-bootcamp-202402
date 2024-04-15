fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: { 'authorization': '661796c9fed8742582db7421' },
})
    .then(res => res.json())
    .then(userId => console.log(userId))
    .catch(error => console.error(error))