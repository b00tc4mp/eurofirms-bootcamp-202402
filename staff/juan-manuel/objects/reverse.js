function reverse(objeto) {
    var iteraciones = Math.floor(objeto.length / 2)
    for (var i = 0; i < iteraciones; i++) {
        var elemento = objeto[i]

        objeto[i] = objeto[objeto.length - 1 - i]

        objeto[objeto.length -1 -i] = elemento
    }

    return objeto
}

console.log("Función reverse")

console.log("Caso 1: reverse series de anime")

var anime = {
    0: "Death Note",
    1: "Sword Art online",
    2: "Steins Gate",
    3: "Doraemon",
    4: "Los simpsons",
    5: "Shin Chan",

    length: 6
}

var resultado = reverse(anime)

console.log(resultado)
