curl -H 'authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg' "http://localhost:4025/exercises/search?q=muerto" -v

# comprobado 23/05/2024
# $ ./search-exercises.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /diets/search?q=muerto HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg
# >
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 49
# < ETag: W/"31-jW9ORShVgTWV6uneSHU5/rUibus"
# < Date: Thu, 23 May 2024 15:02:02 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"error":"MatchError","message":"diet not found"}* Connection #0 to host localhost left intact

# emime@LAPTOP-SQF9JB06 MINGW64 ~/Desktop/eurofirms-bootcamp-202402/staff/david-aroca/project/api/test (feature/project)
# $ ./search-exercises.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /exercises/search?q=muerto HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciIsImlhdCI6MTcxNjQ3NTEzMiwiZXhwIjoxNzE2NDg1OTMyfQ.X7iZ2Ds48H_GY1Al-wJ580R-VnxCU3QJrr4eB9zFglg    
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2432
# < ETag: W/"980-ETpQHd1XCNN9GQic6Gu5fMhzYuA"
# < Date: Thu, 23 May 2024 15:03:12 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"COMO HACER PESO MUERTO","image":"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJiMjdsNG5jZnc5aG5qcjF0YWdoNWc1Zm91aG9tOGFybDM4OTF6NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SVNP800QoYcJZx1Wqx/giphy.webp","video":"https://youtu.be/7Sjfm61-HC4","description":"Introducción\n\nEn este video, aprenderás a realizar correctamente el ejercicio de peso muerto, uno de los movimientos esenciales en el entrenamiento de fuerza. Verás la técnica adecuada, los rangos de repeticiones óptimos y el peso recomendado para diferentes niveles. También incluimos algunos consejos para obtener los mejores resultados y evitar lesiones.\n\nTécnica del Peso Muerto\n\nPosición Inicial:\n\nColoca los pies a la anchura de las caderas.\nLa barra debe estar sobre el empeine de los pies.\nAgáchate y agarra la barra con las manos 
# un poco más abiertas que los hombros.\nMantén la espalda recta y el pecho hacia afuera.\nLevantamiento:\n\nEmpuja con los talones mientras extiendes las piernas.\nMantén la barra cerca del cuerpo mientras te levantas.\nExtiende completamente las caderas y las rodillas al final del levantamiento.\nDescenso:\n\nBaja la barra lentamente invirtiendo el movimiento.\nMantén la espalda recta y flexiona las caderas y las rodillas.\nRangos de Repeticiones Óptimos\n\nFuerza: 3-5 repeticiones por serie.\nMasa muscular: 6-12 repeticiones por serie.\nResistencia muscular: 12-15 repeticiones por serie.\nPeso Recomendado\n\nPrincipiantes: Empieza con una barra vacía (20 kg/45 lbs) o menos. Enfócate en la técnica.\nIntermedios: Aumenta el peso gradualmente. Trabaja con un peso que te permita hacer 6-8 repeticiones con buena forma.\nAvanzados: Incrementa el peso de manera controlada. Realiza 
# 3-5 repeticiones por serie con buena técnica.\nConsejos Generales\n\nCalentamiento: Siempre calienta antes de empezar.\nTécnica Primero: Prioriza la técnica sobre el peso.\nProgresión Gradual: Aumenta el peso poco a poco.\nUso de Cinturón: Considera usar un cinturón para levantar pesos pesados.\nDescanso y Recuperación: Descansa adecuadamente entre series y días de entrenamiento.\nConclusión\n\nEl peso muerto es clave para desarrollar fuerza y músculo. Sigue estos pasos y consejos para incorporarlo de manera segura y efectiva en tu rutina. ¡Mira el 
# video para una demostración completa!","id":"6645c6c4c1770581796555df"}]* Connection #0 to host localhost left 
# intact