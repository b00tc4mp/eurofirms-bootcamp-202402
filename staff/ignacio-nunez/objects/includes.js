function includes(object, value, fromIndex) {

}

var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Santiago',
    5: 'Manchester',
    6: 'Lima',
    7: 'Sevilla',

    length: 8
}

// que funcion estamos ejecutando
console.log('FUNCTION INCLUDES')

// describimos el caso
console.log('CASE 1: return true when search for Tokyo on the object')

// guardamos el resultado en una variable
var result = includes(cities, 'Tokyo')

// pintamos en consola el resultado
console.log({ result })

// repetir pasos anteriores
console.log('CASE 2: return false when search for Liverpool on the object')

var result = includes(cities, 'Liverpool')

console.log({ result })

console.log('CASE 3: return false when search for Barcelona on the object')

var result = includes(cities, 'Barcelona', 3)

console.log({ result })