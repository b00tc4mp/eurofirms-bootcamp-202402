 curl -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2FlZmFlMThlZDk2ZDYxNzkxNzkiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTUyNTg2ODgsImV4cCI6MTcxNTI2MjIyOH0.wXbtcBCf0h4PLj8lv7LH1DzZNWWaRjA1894m5Yhh2aw' -H 'Content-type: application/json' -d '{"image":"http://image.com/something","title":"this is a DIET PEPET","video":"empty","description":"empty"}' http://localhost:4025/diet -v


# logica funciona ok testeado 
#  {
#     _id: ObjectId('663ccb011c75a70004e44bd3'),
#     author: ObjectId('663a3aefae18ed96d6179179'),
#     title: 'this is a DIET PEPET',
#     image: 'http://image.com/something',
#     video: 'empty',
#     description: 'empty',
#     __v: 0
#   }

#  ./authenticate-user.sh
#  cuidado con el token no tiene que estar expirado hacer un test con el authenticate para sacarlo 