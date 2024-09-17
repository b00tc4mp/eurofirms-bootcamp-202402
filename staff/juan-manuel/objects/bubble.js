function bubble(objeto) {

for (var i = 0; i < objeto.length; i++){

for (var j = 0; j < (objeto.length -i -1); j++){
    if (objeto[j] > objeto[j + 1]) {
        var guardado = objeto[j]
        objeto[j] = objeto[j+1]
        objeto[j+1] = guardado
    }

}
}
console.log (objeto)
}

var objeto = [20, 23, 34, 45, 55, 8]

bubble(objeto)