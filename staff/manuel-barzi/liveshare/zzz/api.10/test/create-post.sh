 curl -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjIyMmMxYTQxOWM4MGE3NjRjODY5NjYiLCJpYXQiOjE3MTQ0ODk3MjAsImV4cCI6MTcxNDQ4OTcyMX1.zeboHzYzD68gOhhsEaMgTFJE2mItkfUZXIEyR7SwI6Q' -H 'Content-type: application/json' -d '{"image":"http://image.com/something","text":"this is an image"}' http://localhost:8080/posts -v