function salute(name, surname) {
    console.log('Hello' + name + ' ' + surname)

}

salute('Pepito Grillo')

function sum(a, b) {
    return a + b
}

var result = sum(10, 20) // 30
var result = sum(40, 50) // 90


function push(array, value) {
    array[array.length] = value
    return array.length
}
var numbers = [10, 20, 30, 40]
var pushResult = push(numbers, 50)
// numbers=[10, 20 , 30, 40, 50]
//pushResult= 5

function sum(a, b) {
    return a + b
}

var sumResult = sum(20, 40) // 60

function rest(a, b) {
    return a - b
}

var restResult = rest(20, 40) // -20

function mult(a, b) {
    return a * b
}

var multResult = mult(20, 40) // 800

function div(a, b) {
    return a / b
}
// var divResult = div(20, 40) // 0.5

//________________________________________________

function registerValidator(email, name, password, age) {
    if (age < 18) {
        console.log('Para registrarse debe ser mayor de edad')

        return false
    }
    if (age > 65) {
        console.log('Para registrarse tiene que ser menor que 65')

        return false
    }

    return true
}
//______________________________________________________
function map(numbers,callback){
for (i=0; i < array.length; i ++){
} result[i] = callback(array[i])]
return result
}

var numbers2 = map(numbers, function(number){
    return number *10
})
//_____________________________________________
var numbers = {
'0':20,
'1':30,
'2':40,
'3':50,
length:4

}

// for (var i = 0; j< numbers.length); i++ {
//     var number = numbers [i]
// }
// return
//__________________________________________________

var a= 10
var b= 4
function mult(a,b){
    var result = a * b
return (result)
var result= mult(a*b)
}
mult(10,4)

var a= 80
var b= 20
function sum(a,b){
var result= a + b
return (result)
}
sum(80,20)


