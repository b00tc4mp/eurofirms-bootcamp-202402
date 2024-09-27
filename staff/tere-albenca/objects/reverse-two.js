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
    var iterations = Math.floor(object.length /2)
    for( var i = 0; i< iterations;i++){ 
        var element = object[i]
        object[i] = object[object.length -1-i]
        object[object.length -1-i] = element
    }
    return object  
}
var result =reverse(series)
console.log('first case reverse')
console.log(series)
console.log(result)
