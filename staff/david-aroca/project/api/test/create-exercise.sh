 curl -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' -H 'Content-type: application/json' -d '{"image":"http://image.com/something","title":"this is an image","video":"empty","description":"empty"}' http://localhost:4025/exercises -v

# comprobado 23/05/2024
# $ ./create-exercise.sh
# Note: Unnecessary use of -X or --request, POST is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > POST /exercises HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg
# > Content-type: application/json
# > Content-Length: 103
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Thu, 23 May 2024 14:46:47 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# <
# * Connection #0 to host localhost left intact