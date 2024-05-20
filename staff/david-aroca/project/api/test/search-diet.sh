curl -X GET -H 'authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYxOTIxNjMsImV4cCI6MTcxNjIwMjk2M30.gFNdwZLnn1XjPsoakys4sJPPS4bLp5ZsmjXJBg1MePY' -H 'Content-Type: application/json' -d '{"title:" es "}' "http://localhost:4025/diets/" -v

# FUNCIONA CORRECTAMENTE PROBLEMA CON EL BODY
# $ ./search-diet.sh
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /diets/ HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYxOTIxNjMsImV4cCI6MTcxNjIwMjk2M30.gFNdwZLnn1XjPsoakys4sJPPS4bLp5ZsmjXJBg1MePY
# > Content-Type: application/json
# > Content-Length: 17
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 3589
# < ETag: W/"e05-EmTbEhohkKloypVGlR7u3R+RSu0"
# < Date: Mon, 20 May 2024 09:13:03 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"_id":"663a3b1bd26a81d7178f9043","username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUBEA123123123","image":"https://media3.giphy.com/media/l1AsC986MBVsQPckg/200.webp?cid=ecf05e477a56yazxpag36u64lw8utt3jqsvscvpcrddjix6m&ep=v1_gifs_search&rid=200.webp&ct=g","video":"https://youtu.be/m6GUoN-IcEM","description":" 1-Batido de Proteínas Energizante: Este batido es una excelente opción para comenzar tu día o para recargar después de un entrenamiento intenso. Combina una porción de proteína en polvo de tu sabor favorito con leche de almendras, plátano, mantequilla de maní y un puñado de espinacas frescas. Licúa todo hasta que esté suave y disfruta de una explosión de energía y proteínas.\n\n3-Ensalada de Quinoa con Pollo a la Parrilla: Esta ensalada es una comida completa y satisfactoria. Cocina la quinoa según las instrucciones del paquete y déjala enfriar. Agrega dados de pollo a la parrilla, tomates cherry cortados por la mitad, pepino en rodajas, aguacate en cubos y un puñado de espinacas frescas. Adereza con un aliño de tu elección y mezcla bien para obtener una deliciosa y abundante fuente de proteínas.\n\n2-Tazón de Salmón Asado con Verduras al Vapor: Este tazón es una explosión de sabor y nutrientes. Asa filetes de salmón sazonados con limón, ajo y hierbas frescas en el horno hasta que estén tiernos y ligeramente dorados. Acompaña con una variedad de verduras al vapor como brócoli, zanahorias y coliflor. Sirve sobre arroz 
# integral o quinoa para una comida completa y equilibrada cargada de proteínas.\n\n4-Hamburguesas de Pavo y Espinacas: Estas hamburguesas son una opción saludable y deliciosa para satisfacer tus antojos de comida rápida. Mezcla carne de pavo molida con espinacas picadas, cebolla rallada, ajo picado y condimentos al gusto. Forma las hamburguesas y ásalas a la parrilla o en una sartén hasta que estén cocidas por completo. Sirve en pan integral con tus toppings favoritos para una cena abundante y alta en proteínas.\n\n5-Tortitas de Avena y Claras de Huevo: Estas tortitas son ideales para un desayuno rápido y nutritivo. Mezcla claras de huevo con avena, polvo de proteína, canela y un poco de leche de almendras hasta obtener una masa homogénea. Cocina las tortitas en una sartén antiadherente hasta que estén doradas por ambos lados. Sirve con yogur griego, frutas frescas y un chorrito de miel para un desayuno lleno de proteínas y sabor.","id":"6645ccd3c17705817965563a"},{"author":{"_id":"663a3b1bd26a81d7178f9043","username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUEBA 13245","image":"https://media1.giphy.com/media/eeYtwiYHARla8/giphy.webp?cid=790b7611e8sgvy5rfyhow1xix6h6zqik5ghxntoqkzjbmiiy&ep=v1_gifs_search&rid=giphy.webp&ct=g","video":"ESTO ES UNA PRUEBA 121345","description":"ESTO ES UNA PRUEBA1231345","id":"664480c43699dacd796a024d"},{"author":{"_id":"663a3b1bd26a81d7178f9043","username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUEBA","image":"https://media1.giphy.com/media/eeYtwiYHARla8/giphy.webp?cid=790b7611e8sgvy5rfyhow1xix6h6zqik5ghxntoqkzjbmiiy&ep=v1_gifs_search&rid=giphy.webp&ct=gESTO ES UNA PRUEBA","video":"ESTO ES UNA PRUEBA","description":"ESTO ES UNA PRUEBA","id":"664480b63699dacd796a0247"},{"author":{"_id":"663a3aefae18ed96d6179179","username":"josemamadotrainer","id":"663a3aefae18ed96d6179179"},"title":"this is a test1.1","image":"http://image.com/testsomething","video":"test1.2","description":"test1.1","id":"663ccb011c75a70004e44bd3"}]* Connection #0 to host localhost left intact


# curl -X GET -H 'authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTU5NjA0NTgsImV4cCI6MTcxNTk3MTI1OH0.2w02vwN0TsNJh3Zw0-lrKVHEnypAj3klZCrojiCuG8s' -d '{"title":"prueba"}'http://localhost:4025/diets/search -v

# TODO


# $ ./search-diet.sh
# Note: Unnecessary use of -X or --request, GET is already inferred.
# *   Trying [::1]:4025...
# * Connected to localhost (::1) port 4025
# > GET /diets/search?q=esto%20es HTTP/1.1
# > Host: localhost:4025
# > User-Agent: curl/8.4.0
# > Accept: */*
# > authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2NjNhM2IxYmQyNmE4MWQ3MTc4ZjkwNDMiLCJyb2xlIjoidHJhaW5lciJ9LCJpYXQiOjE3MTYxOTIxNjMsImV4cCI6MTcxNjIwMjk2M30.gFNdwZLnn1XjPsoakys4sJPPS4bLp5ZsmjXJBg1MePY
# > Content-Type: application/json
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 3238
# < ETag: W/"ca6-fK6pFO70IlOymdZHxc6hooo7Vuw"
# < Date: Mon, 20 May 2024 08:30:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUEBA","image":"https://media1.giphy.com/media/eeYtwiYHARla8/giphy.webp?cid=790b7611e8sgvy5rfyhow1xix6h6zqik5ghxntoqkzjbmiiy&ep=v1_gifs_search&rid=giphy.webp&ct=gESTO ES UNA PRUEBA","video":"ESTO ES UNA PRUEBA","description":"ESTO ES UNA PRUEBA","id":"664480b63699dacd796a0247"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUEBA 13245","image":"https://media1.giphy.com/media/eeYtwiYHARla8/giphy.webp?cid=790b7611e8sgvy5rfyhow1xix6h6zqik5ghxntoqkzjbmiiy&ep=v1_gifs_search&rid=giphy.webp&ct=g","video":"ESTO ES UNA PRUEBA 121345","description":"ESTO ES UNA PRUEBA1231345","id":"664480c43699dacd796a024d"},{"author":{"username":"josemamadotrainer1","id":"663a3b1bd26a81d7178f9043"},"title":"ESTO ES UNA PRUBEA123123123","image":"https://media3.giphy.com/media/l1AsC986MBVsQPckg/200.webp?cid=ecf05e477a56yazxpag36u64lw8utt3jqsvscvpcrddjix6m&ep=v1_gifs_search&rid=200.webp&ct=g","video":"https://youtu.be/m6GUoN-IcEM","description":" 1-Batido de Proteínas Energizante: Este batido es una excelente opción para comenzar tu día o para recargar después de un entrenamiento intenso. Combina una porción de proteína en polvo de tu sabor favorito con leche de almendras, plátano, mantequilla de maní y un puñado de espinacas frescas. Licúa todo hasta que esté suave y disfruta de una explosión de energía y proteínas.\n\n3-Ensalada de Quinoa con Pollo 
# a la Parrilla: Esta ensalada es una comida completa y satisfactoria. Cocina la quinoa según las instrucciones del paquete y déjala enfriar. Agrega dados de pollo a la parrilla, tomates cherry cortados por la mitad, pepino en rodajas, aguacate en cubos y un puñado de espinacas frescas. Adereza con un aliño de tu elección y mezcla bien para obtener una deliciosa y abundante fuente de proteínas.\n\n2-Tazón de Salmón Asado con Verduras al Vapor: Este tazón es 
# una explosión de sabor y nutrientes. Asa filetes de salmón sazonados con limón, ajo y hierbas frescas en el horno hasta que estén tiernos y ligeramente dorados. Acompaña con una variedad de verduras al vapor como brócoli, zanahorias y coliflor. Sirve sobre arroz integral o quinoa para una comida completa y equilibrada cargada de proteínas.\n\n4-Hamburguesas de Pavo y Espinacas: Estas hamburguesas son una opción saludable y deliciosa para satisfacer tus antojos de comida rápida. Mezcla carne de pavo molida con espinacas picadas, cebolla rallada, ajo picado y condimentos al gusto. Forma las hamburguesas y ásalas a la parrilla o en una sartén hasta que estén cocidas por completo. Sirve en pan integral con tus toppings favoritos para una cena abundante y alta en proteínas.\n\n5-Tortitas de Avena y 
# Claras de Huevo: Estas tortitas son ideales para un desayuno rápido y nutritivo. Mezcla claras de huevo con avena, 
# polvo de proteína, canela y un poco de leche de almendras hasta obtener una masa homogénea. Cocina las tortitas en 
# una sartén antiadherente hasta que estén doradas por ambos lados. Sirve con yogur griego, frutas frescas y un chorrito de miel para un desayuno lleno de proteínas y sabor.","id":"6645ccd3c17705817965563a"}]* Connection #0 to host 
# localhost left intact