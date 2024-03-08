function salute() {
    console.log('hello world');
}
function saluteSir(name, surname) {
    console.log('hello ' + name + ' ' + surname);
}
saluteSir('pepito', 'grillo');
var name2 = 'juanito';
var surname = 'menganito'
saluteSir(name2, surname);
//-----------------------------
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('Los valores deben ser numericos');
    } else if (b === 0) {
        console.log('El segundo valor no puede ser 0');
    } else {
        return a / b;
    }
}
var addResult = add(1, 2);
var substractResult = substract(1, 2);
var multiplyResult = multiply(1, 3);
var divideResult = divide(4, 2);
//----------------------------------
var numbers = [10, 20]
function map(array, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray
}
var numbers2 = map(numbers, function (number) {
    return numbers * 10
})