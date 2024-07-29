// el methodo comprueba en cada element y devuelve el indice el primero si cumple con el  requisitos si no cumple devolve -1 
function indexOfElement(object, value, fromIndex = 0) { // check if fromIndex exist. if undefined then from Index = 0
    // if ( fromIndex === undefined)
    // fromIndex = 0
    // if fromIndex exceed the length of our object or is a equal the we dont search in our object and -1 is returned

    if (fromIndex >= object.length)

        return -1

    // if fromIndex is negative we set fromIndex to start from the end bacakwards
    // if fromIndex is negative and is greater than the object length then we search in the whole object -> fromIndex = 0

    if (fromIndex < 0) {
        if (fromIndex < -object.length)
            fromIndex = 0
        else
            fromIndex = object.length + fromIndex
    }
    // check if fromIndex is valid inside our object

    for (var i = fromIndex; i < object.length; i++) {
        if (value === object[i])

            return i
    }

    // if value does'nt exist inside our object then return -1

    return -1

}

var worlds = {
    0: 'Palestine',
    1: 'tunez',
    2: 'peña',
    3: 'Maroco',
    4: 'Palestine',
    5: 'España',
    6: 'Baja',
    length: 7
}
console.log('CASE1: search in worlds the first instance of Palestine with no start attached')
console.log(indexOfElement(worlds, 'Palestine'))
// expect result -> 0

console.log('CASE 2: search in worlds the first instance of Palestine with start attachek->3')
console.log(indexOfElement(worlds, 'Palestine', 3))
// exepected result -> 4

console.log('CASE3 : search in worlds the first instance of "Laptop" with start attached -> 3')
console.log(indexOfElement(worlds, 'Laptop', 3))
// if the element doesnt exist in the object -1 will return
// expected result -> -1

console.log('CASE 4: search in worlds the first instance of España with start attached ->3')
console.log(indexOfElement(worlds, 'España', -3))
// function can search with negative index
// expected result -> 4

console.log('CASE 5: search in worlds the first instance of España with start attached -> -50')
console.log(indexOfElement(worlds, 'beja', -50))
// function can search with negative index
// expected result ->0

console.log('CASE 6: search in worlds the first instance of España with start attached -> 50')
console.log(indexOfElement(worlds, 'España', 50))
// function can search if the start its at the end of the object or doesnt exist
// expected result -> -1    