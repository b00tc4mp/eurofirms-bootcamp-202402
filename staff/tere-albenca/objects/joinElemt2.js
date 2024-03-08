console.log('FUNCTION join element');
var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Lima',
    5: 'Santiago',
    6: 'New York',
    7: 'Paris',
    8: 'London',
    length: 8
};

console.log('CASE 2: WITH TEACHER JOIN')
function join(object, separator = ',') {
    //acumulador de valores
    //recorrer objectos
    //tomar cada uno de los valores e ir sumandolos al acumulador
    //i= 0 Madrid, 
    //i=1 Madrid,Barcelona...   
    //hasta el i = 8 , al ser el último no tiene coma
    var result = ''
    for (var i = 0; i < object.length; i++) {
        var element = object[i]
        //acumular
        if (i !== 0) {
            result = result + separator + element
        } else {
            result = element
        }
    }
    //para no agregar separator al final
    // if(i !== object.length -1){
    //     result = result + element + separator 
    // }

    return result
}
var resultTwo = join(cities)
console.log(resultTwo)

console.log('CASE 3: JOIN WITH -')
var resultThree = join(cities, '- ')
console.log(resultThree)



console.log('CASE 4: JOIN WITH /')
var resultFour = join(cities, '/ ')
console.log(resultFour)

console.log('case 2 with teacher join with -')
