fetch('http://127.0.0.1:8989/career/6645ad4584a14b9db5a20204', {
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhMzdkNTA0NTJmMzNhYjFmZjlmMGEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTcxNTg0MzI3MywiZXhwIjoxNzE1ODQ1MDczfQ._cGXZWlIBT_Z6LB9hrJkIvER_8ZfYcXdGhmIMwgMZ_8'
    } 
})
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error))