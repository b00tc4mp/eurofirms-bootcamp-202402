curl -H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' "http://localhost:4025/measurements/search?startDate=2024-01-01&endDate=2024-05-22" -v
# comprobado 23/05/2024
# $ ./search-measurements.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /measurements/search?startDate=2024-01-01&endDate=2024-05-22 HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg    
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1590
# < ETag: W/"636-dTUOKbQg9m8tOq3aqmzYlAcgh9k"
# < Date: Thu, 23 May 2024 15:03:39 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-01-01T00:00:00.000Z","weight":60,"torso":80,"legs":90,"id":"664cfa1a1ed6c209da20a023"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-01-08T00:00:00.000Z","weight":62,"torso":82,"legs":92,"id":"664cfa2d1ed6c209da20a029"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-01-15T00:00:00.000Z","weight":64,"torso":84,"legs":94,"id":"664cfa441ed6c209da20a02f"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-01-22T00:00:00.000Z","weight":61,"torso":83,"legs":92,"id":"664cfa5e1ed6c209da20a035"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-01-29T00:00:00.000Z","weight":68,"torso":88,"legs":98,"id":"664cfa751ed6c209da20a03b"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-02-01T00:00:00.000Z","weight":66,"torso":86,"legs":96,"id":"664cfa8c1ed6c209da20a041"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-08T00:00:00.000Z","weight":79,"torso":85,"legs":100,"id":"664dee87f00b8ec9bf8a032f"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-13T00:00:00.000Z","weight":120,"torso":120,"legs":60,"id":"664f56e2efc302d2efbee521"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"date":"2024-05-13T00:00:00.000Z","weight":120,"torso":120,"legs":60,"id":"664f5779efc302d2efbee527"}]* Connection #0 to host localhost left intact
