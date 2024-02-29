var cities = {
    0: 'Barcelona',
    1: 'Madrid',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Oslo',
    5: 'Paris',
    6: 'Santiago',
    7: 'Londres',

    length: 8
}

function join(object,separator= ",") {

    var joinedObject = ''

    for ( var i = 0; i < object.length; i++) {
        if (i === object.length - 1 ) {

            joinedObject = joinedObject + object[i]
    
            } else {
        joinedObject = joinedObject +     object[i]  + separator
            }
        
    } 

    return joinedObject
}

console.log('CASE 1: We call the function with cities')

 var result = console.log(join(cities))

console.log('CASE 2: We call the function with cities and ; we expect all the cities separated by ; ')

var result = console.log(join(cities, ';'))
