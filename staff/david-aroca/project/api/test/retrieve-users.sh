 curl -X GET -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYyMjc1NDMsImV4cCI6MTcxNjIzODM0M30.R2LkC8SyN3CY-IC8HpZQA3myz0AYQ0uH_aNfLIYCveI' http://localhost:4025/users -v

# logica funciona ok
#  $ ./retrieve-users.sh
# Note: Unnecessary use of -X or --request, GET is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /users HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYyMjc1NDMsImV4cCI6MTcxNjIzODM0M30.R2LkC8SyN3CY-IC8HpZQA3myz0AYQ0uH_aNfLIYCveI
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2673
# < ETag: W/"a71-WlOth0eFuX9+MDzoOBJF+jbnEDs"
# < Date: Mon, 20 May 2024 17:54:10 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"_id":"663a37c977b7ce4137e97723","name":"JOSEMAMADO","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamado.com","username":"josemamado1","password":"123123123","role":"trainee"},{"_id":"663a3aefae18ed96d6179179","name":"JOSEMAMADOTRAINER","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer.com","username":"josemamadotrainer","password":"123123123","role":"trainer"},{"_id":"663a3b1bd26a81d7178f9043","name":"JOSEMAMADOTRAINER1","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer1.com","username":"josemamadotrainer1","password":"123123123","role":"trainer"},{"_id":"663a4f9f7cc9193db5983fa5","name":"david","birthdate":"2024-05-01T00:00:00.000Z","email":"david@gmail.com","username":"david","password":"123123123","role":"trainee"},{"_id":"663a5ace9d458e4b7400c969","name":"david1","birthdate":"2024-05-02T00:00:00.000Z","email":"davidd@gmail.com","username":"davidad","password":"123123123","role":"trainee"},{"_id":"663bc976d012491c81134d56","name":"pepe","birthdate":"2024-03-07T00:00:00.000Z","email":"pepe@gmail.com","username":"pepe","password":"123123123","role":"trainee"},{"_id":"664b52f9976e2d06eb29aebb","name":"josetrainer1","birthdate":"2024-05-01T00:00:00.000Z","email":"josetrainer1@gmail.com","username":"josetrainer","password":"123123123","role":"trainee"},{"_id":"664b5bd9976e2d06eb29aec2","name":"trainer","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer@gmail.com","username":"trainer","password":"123456789","role":"trainee"},{"_id":"664b5c2f391e39cc510a8696","name":"JOSEMAMADOTRAINER25","birthdate":"2000-01-01T00:00:00.000Z","email":"jose@mamadotrainer25.com","username":"josemamadotrainer25","password":"123123123","role":"trainer"},{"_id":"664b5d8e06159d7aed579ae0","name":"JOSEMAMADO26","birthdate":"2000-01-01T00:00:00.000Z","email":"JOSE@MAMADO26.COM","username":"JOSEMAMADO26","password":"123123123","role":"trainer"},{"_id":"664b5e6306159d7aed579ae4","name":"trainer3","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer3@gmail.com","username":"trainer3","password":"123456789","role":"trainee"},{"_id":"664b5ec0e6832bdd57d57d87","name":"trainer5","birthdate":"2024-05-01T00:00:00.000Z","email":"trainer5@gmail.com","username":"trainer5","password":"trainer5trainer5","role":"trainer"},{"_id":"664b5edee6832bdd57d57d8a","name":"trainer6","birthdate":"2024-05-14T00:00:00.000Z","email":"trainer6@gmai.com","username":"trainer6","password":"trainer6trainer6","role":"trainee"},{"_id":"664b5ef6e6832bdd57d57d8d","name":"trainer6trainer6","birthdate":"2024-05-11T00:00:00.000Z","email":"trainer6trainer6@gmail.com","username":"trainer6trainer6","password":"trainer6trainer6","role":"trainer"}]* Connection #0 to host localhost left intact