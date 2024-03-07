
//objetos
var fruits = {
    0: 'apple',
    1: 'orange',
    2: 'cherry',
    3: 'strawberry',
    4: 'Watermelon',
    5: 'Pineapple',
    6: 'Apple',
    7: 'Banana',
    length: 8

}
// crear funcion para ser llamada
var callback =function (element) {
    console.log(element)
}
// crear la funcion que llama a la otra funcion 
function forEach (object, callback) {

    for (var i=0; i < object.length; i++){
        callback(object[i])
    }

}

forEach(fruits, callback)