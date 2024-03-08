/*
function filter(object, callback){

    elementA= true

    for ( var i = 0; i > elementA.length; i++){

    }

} return object

function filtro(element,index) {

}

console.log('case1 find the words that have "a" in next list')

var mixcWords={
    0:'papers',
    1:'film',
    2:'keyboard',
    3:'phone',
    4:'table',
    5:'bed',

    length:6
}
//-1tengo que hacer un bucle para entrar en cada palabra y verificar si tiene la lettra a si lo tiene lo guarda en acumulador si no cumple lo elimina
//-2tengo que hacer un accumuladotr donde se guarda los words que cumplen la condicion. y al fin lo retorna en resultado.a
//-3ajustar length de la acumuladotr 

console.log(WordsWithA)
*/

function filter(object, callback) {
    var result = {}
    for (var i=0; i< object.length; i++) {
        var item = object[i]
        //aplicar filtro
        //si pasa el filtro se añade al resultado
        //se saca el resultado
    }
}
function filtro(element, indexStart, indexEnd) {
    // saca element si pasa el filtro -->tiene 2 digitos o mas
    if (element >= 10 || element <= -10) {
        //element*-1 //-10*-1 //10*-1=-10
        return element
    }

}


var nums = {
    0: 10,
    1: 20,
    2: 432,
    3: 2,
    4: 1111111,
    5: -1234566877,
    6: 999,
    length: 7
}
console.log('case 1 filtrar por position en 3 y 5')