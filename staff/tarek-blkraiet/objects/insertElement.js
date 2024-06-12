function insertElement(object, index, value) {
    // tenemos que mover la lista a partir del indice marcado(index)
    for (var i = object.length - 1; i >= index; i--) {
        var elem = object[i]

        object[i + 1] = elem
    }
    object[index] = value

    object.length++ // object.length = object.length +1



}

console.log('case1: insert element index2')
var fruits = {
    0: 'manzana',
    1: 'piña',
    2: 'fresa',
    3: 'naranja',
    length: 4
}

insertElement(fruits, 2, 'mandarina')

console.log(fruits)
/*
{
    0:'manzana',
    1:'piña',
    2:'mandarina',
    3:'fresa',
    4:'naranja',
    
    length:5
}
*/

console.log('case2: insert 55 index 5')

var nums = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    5: 60,
    6: 70,

    length: 7
}
insertElement(nums, 5, 55)
console.log(nums)

/*
{
    0:10,
    1:20,
    2:30,
    3:40,
    4:50,
    5:55
    6:60,
    7:70,

    length:8
}
*/