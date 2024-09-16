function sum(a, b) {
    let suma = a + b;
    return suma;
}

function resta(a, b) {
    let rest = a - b;
    return rest;
}

function multi(a, b) {
    let mult = a * b;
    return mult;
}

function div(a, b) {
    let divi = a / b;
    return divi;
}

resultadosum = sum(3, 78);

resultado_resta = resta(8, 9);

resultMult = multi(9, 3);

resultdiv = div(4, 6);

function salute2(name, surname) {
    var fulName = name + ' ' + surname
    console.log(fullName)
}

salute2('Peter', 'Pan')

function register(email, name, password, age) {
    if (typeof email !== 'string' || email.length < 8) {
        console.log("Email no correctos")
        return false;
    }
    if (typeof name !== 'string' || name.length < 2) {
        return 'Nombre no correcto';

    }
    if (typeof password !== 'string' || password.length < 7) {
        return 'Password no correcto';
    }
    if (age < 18) {
        return 'Solo mayores de edad';
    }
    return true;
}
//ffffffffffffffffffffffffff
function registerValidator(email, name, password, age) {
    if (typeof email !== 'string') {
        console.log('Email is not a string')
       
        return false;
    }
    if (email.length < 7) {
        console.log('email length must be longer than 7')
       
        return false;
    }
    if(typeof name !== 'string'){
        console.log('Nam is not a string')

        return false;
    

}

if (typeof 25 < 18) {

}



typeof 'hola' === 'string'

typeof 6 < 18 === 'boolean'

typeof '@' === 'string'

typeof true === 'boolean'

// typeof !name.length === 'boolean'

// typeof (typeof |nam.length) === 'string' 
if(name.length < 2)


function stringValidator(string, stringName){
    var isEmailValidString = stringValidator(email, 'Email')
    if(!isEmailString) return false
    
    if (typeof email !== 'string') {
        console.log(  stringName 'is not a string')
       
        return false;

}
    var isNameValidString = stringValidato(name, 'Name') return false