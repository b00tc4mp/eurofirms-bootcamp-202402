// var cars = {
//     0: 'peugeot',
//     1: 'ford',
//     2: 'renault',
//     3: 'audi',
//     4: 'bmw',
//     5: 'mercedez',
//     6: 'bentley',
//     7: 'ferrari',

//     length: 8
// }
// //var cars = { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari',  length: 8 }
// //var cars = { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 8:'ferrari'  length: 8 }
// //var cars = { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 8:'ferrari'  length: 8 }

// function reverseObject(object){
//     //declaro las variables para los numero , los valores y el nuevo objeto
//     var newObject ={}

//     for (var i = 0; i < object.length / 2; i++ ){
//         var temporal= object[i]
//         object[i] = object.length -1-i
//         object[object.length -1 -i] = temporal
       
    
//     }
//     for (var i = 0; i < object.length; i++){
//          newObject= temporal
//     }
//    return newObject

// }

// console.log(reverseObject(cars))
var series ={
    0: 'Friends',
    1: 'Office',
    2: 'Homeland',
    3: 'Futurama',
    4: 'American horror history',
    5: 'Simpson',
    6: 'Silicon valey',
    7: 'The big bang theory',
    length: 8
}
function reverse(object){
    //copia del objeto para evitar que se machaquen
    var objectCopy = {...object} // object copy = { 0: 'Friends',1: 'Office'  2: 'Homeland',3: 'Futurama',4: 'American horror history',5: 'Simpson',6: 'Silicon valey',7: 'The big bang theory',length: 8}
    for (var i = 0; i < object.length; i ++){
        object[i] = objectCopy[object.length -1 -i]
        //object copy -> a series al reves
        //friends = 0 -> copia friends = 8 -1 -0 = 7
        //office = 1 -> copia de office = 
    }
    return objectCopy
}
var result = reverse(series)
console.log('first case reverse')
console.log(result)
console.log(series)
console.log({ sameObject: result === series })