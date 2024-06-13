curl -X DELETE -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRmNjc3N2RmY2U2YjE2NDJiMTQ3MjgiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ4NzU1NSwiZXhwIjoxNzE2NDk4MzU1fQ.yV_nHq5psJ0shlsJXigsHlC9Um_d0dz-njOZuVI5aEs' http://localhost:4025/users/664f67bffa407e9006b545a9 -v


# $ ./remove-user.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > DELETE /users/664f85195ee6eed53565d4d3 HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjRmNjc3N2RmY2U2YjE2NDJiMTQ3MjgiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ4NzU1NSwiZXhwIjoxNzE2NDk4MzU1fQ.yV_nHq5psJ0shlsJXigsHlC9Um_d0dz-njOZuVI5aEs
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 39
# < ETag: W/"27-olJvZTr++bhNC/4Uens55NB7MCQ"
# < Date: Thu, 23 May 2024 18:06:17 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"message":"User successfully deleted"}* Connection #0 to host localhost left intact