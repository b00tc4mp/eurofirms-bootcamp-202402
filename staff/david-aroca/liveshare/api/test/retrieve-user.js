fetch('http://localhost:8080/users/661796c9fed8742582db7421')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))