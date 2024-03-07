function removerElemento(objeto, indice, contador) {
    var elementosEliminados = [];

    for (var i = 0; i < contador; i++) {
        var elemento = objeto[indice];
        elementosEliminados.push(elemento);

        for (var n = indice; n < objeto.length - 1; n++) {
            var elementoxd = objeto[n + 1];
            objeto[n] = elementoxd;
        }

        delete objeto[objeto.length - 1];
        objeto.length--;
    }

    return elementosEliminados;
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

var eliminados = removerElemento(planetasSistemaSolar, 4, 1);

console.log("Elementos eliminados:", eliminados);
console.log("Planetas restantes:", planetasSistemaSolar);