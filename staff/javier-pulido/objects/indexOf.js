function indexOf ( Object,value, fromIndex ) {

    for ( var i = 0; i < Object.length; i++){

      
        if(object[i]=== value)

            return value
        
    
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


console.log ({ result})


console.log ('CASE 2 : Retorna -1 cuando no encuentra el elemento  ')

var result = indexOf(colors, 'green')
console.log ({ result})