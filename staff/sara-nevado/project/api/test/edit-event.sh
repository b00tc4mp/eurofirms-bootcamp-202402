curl -X PATCH 'http://localhost:9010/events/66605a19bdd41d5b484bac8d' \
     -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjVlYzdmNjQ2ZjAzNmQ5ZDgxMmZjMWIiLCJpYXQiOjE3MTc1OTQ5NzIsImV4cCI6MTcxNzYxMjk3Mn0.KzTyB4nyjDYpeGvesWA8mRUZifKyZPaJsSq_gd6uffo' \
     -H 'Content-Type: application/json' \
     -d '{
          "type": "event",
          "title": "BJJ `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "date": "2024-02-20T09:00",
          "duration": 2,
          "address": "c/sol, nº1",
          "description": "Entrenamiento editado"
       }' -v

