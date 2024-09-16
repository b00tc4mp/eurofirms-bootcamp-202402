function salute(name, surname) {
    console.log('Hello ' + name + ' ' + surname)
}

var saluteResult = salute('Pepito Grillo')
// Hello Pepito Grillo

//----------------------------
function sum(a, b) {
    var sumResult = a + b

    return sumResult
}

var result = sum(10, 20) // 30
var result2 = sum(40, 50) // 90

//----------------------------
function push(array, value) {
    array[array.length] = value

    return array.length
}

var numbers = [10, 20, 30, 40]

var pushResult = push(numbers, 50)

// numbers = [10, 20, 30, 40, 50]
// pushResult = 5

//----------------------------
var fullName = 'Pepito Grillo'

function salute2(name, surname) {
    var fullName = name + ' ' + surname

    console.log(fullName)
}

salute2('Peter', 'Pan') // Peter Pan

//------------------------------
// ''   ---> false
// '0'  ---> true
// 0    ---> false
// NaN  ---> false
// null ---> false
// []   ---> true
// undefined ---> false
// 'false' ---> true

// !''  ---> true
// !!'' ---> false

// 10 === 10 ---> true
// 10 === 20 ---> false

// 10 !== 10 ---> false
// 10 !== 20 ---> true

// 10 > 20 ---> false
// 10 > 5 ---> true
// 10 < 20 ---> true
// 10 < 5 ---> false
// 10 > 10 ---> false
// 10 >= 10 ---> true
// 10 <= 10 ---> true

//-------------------------
var condition1 = 10 === 20
var condition2 = 10 !== 20

if (condition1 && condition2) {
    console.log('two conditions are ok')
}
//------------------------
var array = []

array.pop() // nada

array = null

array.pop() // cannot read properties of null reading 'pop'

array = undefined

array.pop() // cannot read properties of undefined reading 'pop'
//----------------------------
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Lo valores deben ser numericos')

        return null
    }

    return a * b
}

var multiplyResult = multiply(10, 20) // 200
var multiplyResult2 = multiply('hola', 10) // null

// -----------------------------
// function divide(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         console.log('Lo valores deben ser numericos')
//     } else if (b === 0) {
//         console.log('El segundo valor no puede ser 0')
//     }
//     else {
//         return a / b
//     }
// }

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Lo valores deben ser numericos')

        return
    }

    if (b === 0) {
        console.log('El segundo valor no puede ser 0')

        return
    }

    return a / b
}

var divideResult = divide(10, 20) // 0.5
var divideResult2 = divide('hola', 10) // null

//------------------------------
function register(email, name, password, age) {

}