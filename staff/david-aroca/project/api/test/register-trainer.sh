 curl -X POST -H 'Content-type: application/json' -d '{"name":"JOSEMAMADO91","birthdate":"2000-01-01","email":"JOSE@MAMADO616.COM","username":"JOSEMAMADO561","password":"123123123"}' http://localhost:4025/users/trainer -v

# comprobado 23/05/2024

#  $ ./register-trainer.sh
# Note: Unnecessary use of -X or --request, POST is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > POST /users/trainer HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-type: application/json
# > Content-Length: 127
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Thu, 23 May 2024 14:51:51 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# <
# * Connection #0 to host localhost left intact