function includes(object, value, fromIndex){
    todo

}


var cities = {

    0:'Madrid',
    1:'barcelona',
    2:'valencia',
    3:'chikago',
    4:'Vigo',
    5:'Santander',
    6:'Sevilla',

    length: 7
}

// que function estamos ejecutando
console.log('FUNCTION INCLUDES')

// describimos el caso

console.log('case1: return true when search for valencia on the object : cities')

//save the result en a variable

var result = includes(cities, 'Valencia')

// pintamos en console el result

console.log({result})

//repetir pasos anterios 
console.log('case2 return false when  search of madrid on the object: cities')

var result = includes(cities,'Madrid')

console.log({result})

console.log('case3: return true when search of barcelona on the object:cities')

var result = includes(cities, 'barcelona')

console.log(result)
