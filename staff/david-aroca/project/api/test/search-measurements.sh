curl -H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjUwYjA1N2Y4NDIxOTE5MzRjYjgxYWYiLCJyb2xlIjoidHJhaW5lZSIsImlhdCI6MTcxNjc5NzIyOSwiZXhwIjoxNzE2ODA4MDI5fQ.dbIFGwfx569vKu3AHwXSyn2lI-sOu3x546HwaP97vFo' "http://localhost:4025/measurement/search?startDate=2024-01-01&endDate=2024-05-22" -v

# logica funciona ok problema con la ruta comprobado el dia 27/05
# $ ./search-measurements.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /measurement/search?startDate=2024-01-01&endDate=2024-05-22 HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjUwYjA1N2Y4NDIxOTE5MzRjYjgxYWYiLCJyb2xlIjoidHJhaW5lZSIsImlhdCI6MTcxNjc5NzIyOSwiZXhwIjoxNzE2ODA4MDI5fQ.dbIFGwfx569vKu3AHwXSyn2lI-sOu3x546HwaP97vFo
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 814
# < ETag: W/"32e-ZC3+6jWO5NiSbJSWjedyolOLQz8"
# < Date: Mon, 27 May 2024 09:39:07 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"username":"samy","id":"6650b057f842191934cb81af"},"date":"2024-01-08T00:00:00.000Z","weight":86,"torso":102,"legs":66,"id":"6650b093f842191934cb81bd"},{"author":{"username":"samy","id":"6650b057f842191934cb81af"},"date":"2024-01-22T00:00:00.000Z","weight":86,"torso":99,"legs":65,"id":"6650b0c3f842191934cb81db"},{"author":{"username":"samy","id":"6650b057f842191934cb81af"},"date":"2024-01-29T00:00:00.000Z","weight":87,"torso":102,"legs":69,"id":"6650b0d3f842191934cb81e1"},{"author":{"username":"samy","id":"6650b057f842191934cb81af"},"date":"2024-02-05T00:00:00.000Z","weight":89,"torso":109,"legs":75,"id":"6650b0e7f842191934cb81e7"},{"author":{"username":"samy","id":"6650b057f842191934cb81af"},"date":"2024-03-07T00:00:00.000Z","weight":49,"torso":80,"legs":60,"id":"665362870942a4f15c717b4c"}]* Connection #0 to host localhost 
# left intact