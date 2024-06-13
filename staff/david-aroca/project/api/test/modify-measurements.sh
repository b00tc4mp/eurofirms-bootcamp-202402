 curl -X PATCH -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' -H 'Content-Type: application/json' -d '{"date":"2024-05-13","weight":155,"torso":155,"legs":60}' http://localhost:4025/measurements/664cface1ed6c209da20a053 -v


 # comprobado 23/05/2024

# $ ./modify-measurements.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > PATCH /measurements/664cface1ed6c209da20a053 HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg   
# > Content-Type: application/json
# > Content-Length: 56
# >
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Thu, 23 May 2024 14:51:13 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# * Connection #0 to host localhost left intact