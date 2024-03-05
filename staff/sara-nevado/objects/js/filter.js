//haciendo en clase y por terminar. Repasar funcion 



function filter(object, callback) {
    var result = {}
    //recorrer el objeto y paso el filtro a cada propiedad
    for (var i = 0; i < object.lengt; i++) {
        //recoger propiedad
        var item = object[i]
        //aplicar filtro
        //si pasa el filtro se añade al resultado
        //se saca el resultado

    }

}

function filtro(element, index, object) {
    //comprobar si pasa el filtro->tiene dos digitos o mas
    if (element >= 10 || element <= -10) { //
        //element*-1 // -10*-1= 10 // 10*-1= -10
        return true
    }

    //filtrar por posicion entre 3 y 5

}



var nums = {
    0: 10,
    1: 20,
    2: 432,
    3: 2,
    4: 11111111,
    5: -1231231254,
    5: 999,

    length: 7


}

console.log('CASE 1: filtrar desde la posicion 3 a la 5 los numeros que tengan dos casos o mas')
var case1 = filter(nums, filtro)
//var case1 filter(nums, function(element){dasdasd})
//resultado esperado->[11111111, 1231231254]
console.log('CASE 2:  filtrar en toda la lista los numeros que tengan 2 ')
//resultado esperado->[20,432,2,1231231254]