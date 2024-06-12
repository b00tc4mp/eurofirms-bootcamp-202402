
//-1tengo que hacer un bucle para entrar en cada palabra y verificar si tiene la lettra a si lo tiene lo guarda en acumulador si no cumple lo elimina
//-2tengo que hacer un accumuladotr donde se guarda los words que cumplen la condicion. y al fin lo retorna en resultado.a
//-3ajustar length de la acumuladotr 

function filterElement(object, callback) {
    var result = { length: 0 }
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) {
            result[result.length] = object[i]
            result.length
        }
        //aplicar filtro
        //si pasa el filtro se añade al resultado
        //se saca el resultado
    }
    return result
}


// function de callback to compare if the length is less than 5 characters
// este la function de callback
function lessThan5(something) {
    // saca element si pasa el filtro -->tiene 5 characters o mas
    if (something.length < 5)
        return true

    else
        return false
    //element*-1 //-10*-1 //10*-1=-10

}


var worlds = {
    0: 'Palastine',
    1: 'tunez',
    2: 'peña',
    3: 'Maroco',
    4: 'naranja',
    5: 'España',
    6: 'Baja',
    length: 7
}
console.log('case 1 :filtrar all world with callback by 5 characters or less ')
var map = filterElement(worlds, lessThan5)
console.log(map)