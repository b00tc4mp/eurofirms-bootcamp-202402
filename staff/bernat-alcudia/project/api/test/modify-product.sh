curl -X PATCH -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNjY2FlYWM3OTJkNzdhMTQ5MmQ0OTQiLCJyb2xlIjoiYnV5ZXIiLCJpYXQiOjE3MTUyNjAzOTUsImV4cCI6MTcxNTI2Mzk5NX0.-YhlCYejSWye-Lg0cCluvKeUteyuA2ldalJIhg_RtYI' -H 'Content-Type: application/json' -d '{"urls":["https://giphy.com/gifs/rodneydangerfield-birthday-happy-happybirthday-LzwcNOrbA3aYvXK6r7"],"title":"test title","description":"test15","brand":"test8","price":43,"state":"used","stock":8}' http://localhost:9010/products/663ccc45a054e79c61bacce6 -v