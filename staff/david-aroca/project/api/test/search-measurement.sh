curl -X GET -H 'authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYxOTIxNjMsImV4cCI6MTcxNjIwMjk2M30.gFNdwZLnn1XjPsoakys4sJPPS4bLp5ZsmjXJBg1MePY' -H 'Content-Type: application/json' -d '{"date:"2024-05-12"}' "http://localhost:4025/measurements/" -v


# funciona correctamente
# $ ./search-measurement.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /measurements/ HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYxOTIxNjMsImV4cCI6MTcxNjIwMjk2M30.gFNdwZLnn1XjPsoakys4sJPPS4bLp5ZsmjXJBg1MePY   
# > Content-Type: application/json
# > Content-Length: 20
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 536
# < ETag: W/"218-K1EAoRzO+1LynFIuPR4gFjUdomg"
# < Date: Mon, 20 May 2024 09:18:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-12T22:00:00.000Z","weight":120,"torso":120,"legs":60,"id":"664234e6fa2e7fa6eebcb776"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-12T22:00:00.000Z","weight":120,"torso":120,"legs":60,"id":"6642134c750161c72f694f8f"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-12T22:00:00.000Z","weight":150,"torso":150,"legs":150,"id":"66421347cb9bb726f28ae751"}]* Connection #0 to host localhost left 
# intact
