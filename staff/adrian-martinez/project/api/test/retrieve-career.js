fetch('http://127.0.0.1:8989/users/664388c6cd25fbbfb3101cac/careers', {
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2UxYTBiNjU0OWM4MTIwZmM2NGEiLCJyb2xlIjoiY29tcGFueSIsImlhdCI6MTcxNjU0OTg3NywiZXhwIjoxNzE2NTUxNjc3fQ._zdIlOK8LONgqULOb24owGwhNkOtC88mKXNrf27EFo0'
    } 
})
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))