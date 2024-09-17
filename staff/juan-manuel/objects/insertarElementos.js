function insertarElementos (objeto, indice) {
    var posicionParaDesplazar = objeto.length - indice
    var posicionParaInsertar = arguments.length - 2

    for (var n = 0; n < posicionParaDesplazar; n++) {
        var indiceOriginal = objeto.length -1 -n
        var indiceDestino = indiceOriginal + posicionParaInsertar

        objeto[indiceDestino] = objeto[indiceOriginal]
    }

    for (var n = 0; n < posicionParaInsertar; n++) {
        var indiceOriginal = 2 + n
        var indiceDestino = indice + n

        objeto[indiceDestino] = arguments[indiceOriginal]
    }

    objeto.length += posicionParaInsertar
}


var miau = {

    0: "negrito",
    1: "blanquito",
    2: "grisito",

    length: 3
}

insertarElementos(miau, 1, "maduixa", "llimona", "kiwi")