fetch('http://localhost:8080/users/66163cb3a9730c303816c9b6')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))