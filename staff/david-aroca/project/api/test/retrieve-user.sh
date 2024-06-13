 curl -X GET -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' http://localhost:4025/users/663a37c977b7ce4137e97723 -v


#  logica comprobada dia 23/05
# $ ./retrieve-user.sh
# Note: Unnecessary use of -X or --request, GET is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /users/663a37c977b7ce4137e97723 HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg   
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 215
# < ETag: W/"d7-RBe+JoSBmfUdk3jN2S4S2btWWWA"
# < Date: Thu, 23 May 2024 15:00:23 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"_id":"663a3b1bd26a81d7178f9043","name":"JOSEMAMADOTRAINER1","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer1.com","username":"josemamadotrainer1","password":"123123123","role":"trainer","__v":0}* Connection #0 to host localhost left intact
