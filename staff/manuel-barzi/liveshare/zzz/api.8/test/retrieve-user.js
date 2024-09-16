fetch('http://localhost:8080/users/66190c8dc915114931865b26')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))