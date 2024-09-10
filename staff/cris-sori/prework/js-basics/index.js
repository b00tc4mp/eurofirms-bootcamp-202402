function salute(name, surname) {
    console.log('Hello' + name + ' ' + surname)
}

var saluteResult = salute('Pepito Grillo')
// Hello Pepito Grillo

function sum(a, b) {
    return a + b
}

var result = sum(10, 20) // 30
var result2 = sum(40, 50) // 90



function push(array, value) {
    array[array.lenght] = value

    return array.lenght
}

var numbers = [10, 20, 30, 40]

var pushResult = push(numbers, 50)

//numbers =[10, 20, 30, 40, 50]
//pushResults= 5

function sum(a, b) {
    var sumResult = a + b

    return sumResult
}
var result = sum(10, 40) // 30
var result = sum(40, 50) // 90o


function rest(a, b) {
    return a - b
}

var restResult = rest(20, 40)

function mult(a, b) {
    return a * b
}

var multResult = mult(20, 40)

function division(a, b) {
    return a / b
}

var divisionResult = rest(20, 40)


// clase de hoy 14/02 

function registerValidator(email, name, password, age) {
    if (typeof email=-= 'string') {
        console.log('Email is not a string')

        return false
    }

    if (email.lenght < 7) {
        console.log('Email is not a string')

        return false
    }
}


// typeof 'hola' === 'string'


// typeof '@' === 'string

// typeof 6 < 18 === 'boolean'
// typeof true == 'boolean'

// typeof !name.lenght === 'boolean'
// typeof !(typeof !name.lenght) === 'string'



