console.log('FUNCTION INCLUDES')
var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    3: 'Tokyo',
    4: 'Lima',
    5: 'Santiago',
    6: 'New York',
    7: 'Paris',
    length: 8
}

console.log('CASE 1 : FUNCTION INCLUDES')
//var cities ={0:'Madrid',1:'Barcelona',3:'Tokyo',4:'Lima',5:'Santiago',6:'New York',7:'Paris',length: 8}

function includes(object, value, fromIndex = 0) {
    //si el valor de fromIndex es undefined se pondrá a 0
    if (fromIndex === undefined) {
        fromIndex = 0
    }

    //si fromIndex es mayor que object.length
    if (fromIndex >= object.length) {
        console.log('this value doesnt exist')
    }

    //si fromIndex es menor que 0 , lo pondremos al inicio
    if (fromIndex < 0) {
        fromIndex = 0
    }

    //RECORRO LOS PARAMETROS en busca de value
    for (var i = fromIndex; i < object.length; i++) {
        //object[i]=== value
        //Dentro de object[i] debe estar el valor, si esta es true
        if (object[i] === value) {
            return true
        }
    }
    return false
}

var result = includes(cities, 'Barcelona')

console.log(result)


console.log('CASE 2: INCLUDES FROM INDEX')


var results = includes(cities, 'Barcelona', 3)
console.log(results)
console.log('CASE 3 : FUNCTION INCLUDES')