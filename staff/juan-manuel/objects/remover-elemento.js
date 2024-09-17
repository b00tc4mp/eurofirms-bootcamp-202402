function removerElemento(objeto, indice) {
    var elemento = objeto[indice]

    for (var n = indice; n < objeto.length - 1; n++) {
        var elementoxd = objeto[n + 1]
        objeto[n] = elementoxd
    }

    delete objeto[objeto.length -1]
    objeto.length--

    return elemento
}

var planetasSistemaSolar = {

    0: "Mercurio",
    1: "Venus",
    2: "Marte",
    3: "Tierra",
    4: "Pluton",
    5: "Júpiter",
    6: "Saturno",
    7: "Urano",
    8: "Neptuno",

    length: 9
}

var planetasSistemaSolarFake = {

    0: "Mercurio",
    1: "Venus",
    2: "Marte",
    3: "Tierra",
    4: "Pluton",
    5: "Júpiter",
    6: "Saturno",
    7: "Urano",
    8: "Neptuno",

    length: 9
}

var eliminado = removerElemento(planetasSistemaSolar, 4)