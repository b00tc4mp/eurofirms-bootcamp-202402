fetch('http://localhost:8080/users/6617d38e7197d5c4d62dc42d', {
    method: 'GET',

})
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))