/**
 * Merge elements from iterable object to another iterable object at specified index.
 */

console.log('CASE 1: inserts citroen, volkswagen and seat in cars at index 5')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',
    length: 8
}

var cars2 = {
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',
    length: 3
}

function mergeElements(object, index, objectToMerge) {

    //Movemos los elementos del objecto
    for (let i = object.length-1; i >= index; i--){
        object[i + objectToMerge.length] = object[i];
    }
    //object.length ++;
    
    //Introducimos los elementos del objectToMerge en el primer objeto
    for(let i = 0;i < object.length;i++){

        let mergeElement = objectToMerge[i];
        object[index + i] = mergeElement;
    }

    object.length += objectToMerge.length;
}

console.log(cars);
console.log(cars2);

mergeElements(cars, 5, cars2);

console.log(cars);
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'citroen',
    6: 'volkswagen',
    7: 'seat',
    8: 'mercedez',
    9: 'bentley',
    10: 'ferrari',

    length: 11
}
*/

//console.log(cars2)
/*
{
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',
    length: 3
}
*/


/* console.log('CASE 2: add 250, 260, 270, 280, 290 in nums at index 2')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}

var nums2 = {
    0: 250,
    1: 260,
    2: 270,
    3: 280,
    4: 290,
    length: 5
}

function mergeElements(object, index, objectToMerge) {


} */

//mergeElements(nums, 2, nums2)

//console.log(nums)
/*

    0: 100,
    1: 200,
    2: 250,
    3: 260,
    4: 270,
    5: 280,
    6: 290,
    7: 300,
    8: 400,
    9: 500,

    length: 10
}
*/

//console.log(nums2)
/*
{
    0: 250,
    1: 260,
    2: 270,
    3: 280,
    4: 290,
    length: 5
}
*/