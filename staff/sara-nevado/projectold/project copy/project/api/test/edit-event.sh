curl -X PUT 'http://localhost:9010/events/6654995d1caad8e1f24fddc7' \
     -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU0OTk1ZDFjYWFkOGUxZjI0ZmRkYzciLCJpYXQiOjE3MTY4NDI2NzMsImV4cCI6MTcxNjg0OTg3M30.102CwT0agUqOQyaGQ80ufgJaJe9iTr4094tVybqhmj0' \
     -H 'Content-Type: application/json' \
     -d '{
          "type": "event",
          "title": "BJJ `pppppppp",
          "date": "2024-02-20T09:00",
          "duration": 2,
          "address": "c/sol, nº1",
          "description": "Entrenamiento editado con administrador"
       }' -v

