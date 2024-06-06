curl -v -X PUT "http://localhost:9010/events/select/6654f0eccda28d2f38a4b2e6" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0OTk1ZDFjYWFkOGUxZjI0ZmRkYzciLCJpYXQiOjE3MTY5ODYxOTksImV4cCI6MTcxNjk5MzM5OX0.tmZV1YrubRPkFW-S8b5B49yTzkr7pjA49PYjRbDAKYg" \
    -H "Content-Type: application/json" \
    -d '{"eventId":"6654f0eccda28d2f38a4b2e6"}'
