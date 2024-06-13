 curl -X GET -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' http://localhost:4025/trainees -v


# comprobado 23/05/2024

# $ ./retrieve-trainee.sh
# Note: Unnecessary use of -X or --request, GET is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /trainees HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1823
# < ETag: W/"71f-mwPpf5R8P/A8BdMtebzS4UTogYM"
# < Date: Thu, 23 May 2024 14:58:47 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"_id":"663a37c977b7ce4137e97723","name":"JOSEMAMADO","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamado.com","username":"josemamado1","password":"123123123","role":"trainee"},{"_id":"663a4f9f7cc9193db5983fa5","name":"david","birthdate":"2024-05-01T00:00:00.000Z","email":"david@gmail.com","username":"david","password":"123123123","role":"trainee"},{"_id":"663a5ace9d458e4b7400c969","name":"david1","birthdate":"2024-05-02T00:00:00.000Z","email":"davidd@gmail.com","username":"davidad","password":"123123123","role":"trainee"},{"_id":"663bc976d012491c81134d56","name":"pepe","birthdate":"2024-03-07T00:00:00.000Z","email":"pepe@gmail.com","username":"pepe","password":"123123123","role":"trainee"},{"_id":"664b52f9976e2d06eb29aebb","name":"josetrainer1","birthdate":"2024-05-01T00:00:00.000Z","email":"josetrainer1@gmail.com","username":"josetrainer","password":"123123123","role":"trainee"},{"_id":"664b5bd9976e2d06eb29aec2","name":"trainer","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer@gmail.com","username":"trainer","password":"123456789","role":"trainee"},{"_id":"664b5e6306159d7aed579ae4","name":"trainer3","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer3@gmail.com","username":"trainer3","password":"123456789","role":"trainee"},{"_id":"664b5edee6832bdd57d57d8a","name":"trainer6","birthdate":"2024-05-14T00:00:00.000Z","email":"trainer6@gmai.com","username":"trainer6","password":"trainer6trainer6","role":"trainee"},{"_id":"664f4fea6147e2dfbe1ba14a","name":"JOSEMAMAD","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamad.com","username":"josemamad","password":"123123123","role":"trainee"},{"_id":"664f5821efc302d2efbee533","name":"JOSERAMON56","birthdate":"2000-01-01T00:00:00.000Z","email":"JOSE56@RAMON.COM","username":"JOSERAMON56","password":"123123123","role":"trainee"}]* Connection #0 to host localhost left intact
