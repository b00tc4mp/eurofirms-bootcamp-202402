function reverseElement(object) {
    //1st copy the object in order to reverse it
    var copy = { ...object }
    // copy = {0: 'peugeot', 1:'ford', 2:'renault',3:'audi',4:'bmv',5:'mercedez',6:'bentley',7:'ferrari'}
    //2nd use the copy to insert the properties in reversed order
    for (var i = 0; i < object.length; i++) {
        // object[0] = copy[7]
        // object[1] = copy[6]
        // object[2] = copy[5]
        // object[3] = copy[4]
        // object[4] = copy[3]
        // object[5] = copy[2]
        // object[6] = copy[1]
        // object[7] = copy[0]
        object[i] = copy[object.length - i - 1]
    }

    //3rd return the reversed object
    return object
}
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

console.log('CASE 1 : reverse cars and save it in cars2')

var cars2 = reverseElement(cars)
console.log(cars2)

console.log('CASE 2: show cars ->now cars should be reversed')

console.log(cars)
