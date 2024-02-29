function includes (object, value, fromIndex = 0){

    
    for (var i = fromIndex; i < object.length ; i++){

        if(object[1]=== value){

            return true
        }
    
    }

    return false

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

// que funcion estamos ejecutando
console.log('FUNCTION INCLUDES')

// describimos el caso
console.log('CASE 1: return true when search for red on the object')

// guardamos el resultado en una variable
var result = includes(colors, 'red')

// pintamos en consola el resultado
console.log ({ result})

// repetir pasos anteriores

console.log('CASE 2: return false when search for green  on the object')

var result = includes(colors, 'green')

console.log ({ result})

console.log ('Case 3: return false when search for brown on the object')

var result = includes(colors, brown, 5)

console.log ({result})
