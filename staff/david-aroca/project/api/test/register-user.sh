 curl -X POST -H 'Content-type: application/json' -d '{"name":"JOSERAMON56","birthdate":"2000-01-01","email":"JOSE56@RAMON.COM","username":"JOSERAMON56","password":"123123123"}' http://localhost:4025/users -v

# comprobado 23/05/2024

#  $ ./register-user.sh
# Note: Unnecessary use of -X or --request, POST is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > POST /users HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-type: application/json
# > Content-Length: 122
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Thu, 23 May 2024 14:52:17 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# <
# * Connection #0 to host localhost left intact