






var cities = {
    0: 'Barcelon',
    1: 'Madrid',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Oslo',
    5: 'Paris',
    6: 'Santiago',
    7: 'Londres',

    length: 8
}

function includes(object,element,fromIndex= 0) {
    var booleanVar =  false;
for ( var i = fromIndex; i < object.length -1;i++) {
    
    if (object[i]== element) {

        booleanVar = true;
    }

}
    return booleanVar
}

console.log( 'CASE 1: we write Tokyo and the function returns true ')

console.log(includes(cities,'Tokyo'))

console.log( 'CASE 2: we write Vancover and the function returns false ')

console.log(includes(cities, 'Vancover'))

console.log('CASE 3: We write Tokyo and fromIndex = 4 and return false')

console.log(includes(cities, 'Tokyo',4))