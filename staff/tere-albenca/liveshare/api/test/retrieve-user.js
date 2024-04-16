fetch('http://localhost:8080/users/6616a745373730a8e163ae8a')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))