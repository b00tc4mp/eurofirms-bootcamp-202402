function indexOf ( Object,searchElement, fromIndex ) {

    for ( var i = 0; i < Object.length; i++){

        if (Object(searchElement[fromIndex])){
        if ( object[1] === searchElement)

            return true
        }
    }

        return -1
}





var colors = {

    0: 'black',
    1: 'white',
    2: 'red',
    3: 'blue',
    4: 'brown',
    5: 'orange',
    6: 'yellow',
    7: 'pink',

    length: 8

}

console.log('CASE 1 Retorna el primer indice en el que se puede encontrar black')

var result = indexOf(colors, 'black')
console.log (result)



console.log ('CASE 2 Retorna ')