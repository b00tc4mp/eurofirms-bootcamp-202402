fetch('http://127.0.0.1:8989/offers', {
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhMzdkNTA0NTJmMzNhYjFmZjlmMGEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTcxNTg1MzQ3MSwiZXhwIjoxNzE1ODU1MjcxfQ.IYoMntIVbZHHb33UP3NiEITlzMYBLliXs7XHi4tm98E'
    } 
})
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))