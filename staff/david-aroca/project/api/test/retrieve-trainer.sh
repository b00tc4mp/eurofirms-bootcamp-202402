 curl -X GET -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' http://localhost:4025/trainers -v

# comprobado 23/05/2024

# $ ./retrieve-trainer.sh
# Note: Unnecessary use of -X or --request, GET is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /trainers HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1622
# < ETag: W/"656-O3b/OWgxq7vKHiR9Jla9pxT4rrc"
# < Date: Thu, 23 May 2024 14:59:52 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"_id":"663a3aefae18ed96d6179179","name":"JOSEMAMADOTRAINER","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer.com","username":"josemamadotrainer","password":"123123123","role":"trainer"},{"_id":"663a3b1bd26a81d7178f9043","name":"JOSEMAMADOTRAINER1","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer1.com","username":"josemamadotrainer1","password":"123123123","role":"trainer"},{"_id":"664b5c2f391e39cc510a8696","name":"JOSEMAMADOTRAINER25","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer25.com","username":"josemamadotrainer25","password":"123123123","role":"trainer"},{"_id":"664b5d8e06159d7aed579ae0","name":"JOSEMAMADO26","birthdate":"2000-01-01T00:00:00.000Z","email":"JOSE@MAMADO26.COM","username":"JOSEMAMADO26","password":"123123123","role":"trainer"},{"_id":"664b5ec0e6832bdd57d57d87","name":"trainer5","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer5@gmail.com","username":"trainer5","password":"trainer5trainer5","role":"trainer"},{"_id":"664b5ef6e6832bdd57d57d8d","name":"trainer6trainer6","birthdate":"2024-05-11T00:00:00.000Z","email":"trainer6trainer6@gmail.com","username":"trainer6trainer6","password":"trainer6trainer6","role":"trainer"},{"_id":"664f4fc9ed931ac86ace75f7","name":"JOSEMAMADOTRAINER26","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer26.com","username":"josemamadotrainer26","password":"123123123","role":"trainer"},{"_id":"664f5807efc302d2efbee530","name":"JOSEMAMADO91","birthdate":"2000-01-01T00:00:00.000Z","email":"JOSE@MAMADO616.COM","username":"JOSEMAMADO561","password":"123123123","role":"trainer"}]* Connection #0 to host localhost left intact