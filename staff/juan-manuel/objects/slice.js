function slice (objeto, indiceInicial, indiceFinal){
    if (indiceFinal === undefined && indiceInicial === undefined){
        let cloneObjeto = { ... objeto }
        return cloneObjeto
    }

    /* if (indiceFinal === undefined){
    indiceFinal = objeto.length
    } */

    let resultado = {}
    for (var i = indiceInicial; i < indiceFinal; i++){
        let resultadoIndice = i - indiceInicial
        resultado[resultadoIndice] = objeto[i]
    }

    resultado.length = indiceFinal - indiceInicial
    return resultado
}


console.log("Función Slice")
console.log("Caso 1: Extraer de objetos los valores entre indice 2 y 4")

let natillas = {
    0: "chocolate",
    1: "vainilla",
    2: "turron",
    3: "coco",
    4: "fresa",
    5: "limón",

    length: 6
}

let recortarNatillas = slice (natillas, 2, 6)
console.log(natillas)
console.log(recortarNatillas)