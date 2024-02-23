/**
 * Removes elements specified by index and count from iterable object and returns them.
 */
function removeElements(object, index, count) {
    // Guardar elementos borrados
    var deletedElements = {}

    // Elementos borrados {0: 'audi', 1 : 'bmw', length: 2}
    //deletedElements[0] = object[3]
    //deletedElements{0: 'audi', length :0}
    //deletedElements[1] = object[4]
    //deletedElements{0: 'audi', 1: 'bmw', length: 0}
    //Guardo el numero de propiedades que vamos a borrar
    var propertiesToRemove = count

    for (var i = 0; i < propertiesToRemove; i++) {
        var origin = object[index + i] //object[3+0]->object[3+1]->>object[3]->object[4]
        deletedElements[i] = origin //deletedElement[0]->deletedElement[1]
    }
        // Ajustar la longitud de deletedElement por que lo hemos rellenado

        deletedElements.length = count
        //deletedElements{0: 'audi', 1: 'bmw', length: 2}


    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7:'ferrari', length: 8}
    //object[3] = object[5]

    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7:'ferrari', length: 8}
    //object[4] = object[6]
    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bentley', 5: 'mercedez', 6: 'bentley', 7:'ferrari', length: 8}
   //object[5] = object[7]

    for (var i = index + count; i < object.length; i++){
        object[i - count] = object[i]
        //object[5-2] = object[5]
        //object[5+1-2] = object[5+1]->object[4] = object[6]
        //object[5+2-2] = object[5+2]->object[5] = object[7]

    }
    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bentley', 5: 'ferrari', 6: 'bentley', 7:'ferrari', length: 8}
    // Borrar propiedades que sobran 
    //cosas que sobran = 2
    //delete object[7] 
    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bentley', 5: 'ferrari', 6: 'bentley', length: 8}
   //delete object[6]
    var deleteStart = object.length - 1 // valor 7
    var deleteEnd = deleteStart - count // valor 7 - 2
    for(var i = deleteStart ; i > deleteEnd; i--){
       delete object[i]
       // delete object[7]
       // delete object[6]
        
    }
    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bentley', 5: 'ferrari', length: 8}
    // Cambiar la longitud
    object.length = object.length - count // Dentro del objeto, la propiedad length valdria la cantidad de cosas que queremos borrar (COUNT)
   
    // {0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'mercedez', 4: 'bentley', 5: 'ferrari', length: 6}


    // Retornar a elementos borrados
    return deletedElements


 
}
console.log('CASE 1: remove at index 3, 2 elments from cars')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi', //index 3 //displace 3 to 5
    4: 'bmw',      // displace 4 to 6
    5: 'mercedez', // displace 5 to 7
    6: 'bentley',  //displace 6 to 8
    7: 'ferrari',  // displace 7 to 9
    length: 8  // length 8 to 10
}

var removed = removeElements(cars, 3, 2)

console.log(removed)
/*
{ 
    0: 'audi',
    1: 'bmw',
    length: 2
}
*/

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'mercedez',
    4: 'bentley',
    5: 'ferrari',
    length: 6
}
*/


console.log('CASE 2: remove at index 1, 3 elements from nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    length: 5
}

var removed = removeElements(nums, 1, 3)

console.log(removed)
/*
{
    0: 200,
    1: 300,
    2: 400,
    length: 3
}
*/

console.log(nums)
/*
{
    0: 100,
    1: 500,
    length: 2
}
*/