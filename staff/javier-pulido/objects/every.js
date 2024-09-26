var people = {
    0: 'Salva',
    1: 'Maite', 
    2: 'Javis', 
    3: 'Pepito',
    length: 4
}




function every(object, callback) {

    for (var i = 0; i < object.length; i++) {

        if (!callback(object[i])) return false

    }
    return true
}

var callback = function (element) {
    return element.length > 4
}

console.log('CASE 1: comprobar si todos los elementos tienen mas de 4 caracteres')

console.log(every(people, callback))