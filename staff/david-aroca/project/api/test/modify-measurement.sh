 curl -X PATCH -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTU2MTIyMjYsImV4cCI6MTcxNTYyMzAyNn0.Snv-SP5O8-JYXKHY0F7FAdEw50m2fSh50fEdk2qBS0s' -H 'Content-Type: application/json' -d '{"date":"2024/05/13","weight":"120","torso":"120","legs":"60"}' http://localhost:4025/measurements/6642134c750161c72f694f8f -v

#  logica funciona ok
#   {
#     _id: ObjectId('6642134c750161c72f694f8f'),
#     author: ObjectId('663a3b1bd26a81d7178f9043'),
#     date: ISODate('2024-05-12T22:00:00.000Z'),
#     weight: 120,
#     torso: 120,
#     legs: 60,
#     __v: 0
#   },