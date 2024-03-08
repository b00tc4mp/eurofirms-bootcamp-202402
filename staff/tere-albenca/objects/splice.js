var months = {
    0: 'January',
    1: 'February',
    2: 'September',
    3: 'July',
    4: 'August',
    length: 5
}
//Esta funcion es como el remove pero al final hay que añadir elementos
function splice(object, index, count, ...elements) {//tres puntos porque no sabemos cuantos elementos vamos a añadir
    // Mover tantos elementos como los que se añaden al final
    for (var i = object.length - 1; i >= index; i--) {//se recorre desde atrás y teniendo en cuenta la última posición
        //para mover los elementos a la nueva posición
        object[i + elements.length - count] = object[i]
    }

    // Eliminar los elementos definidos en count           
    for (var i = index; i < index + count; i++) {
        delete object[i]
    }

    // Agregar los nuevos elementos en el índice dado
    for (var i = 0; i < elements.length; i++) {
        object[index + i] = elements[i];
    }

    // Calcular el nuevo length
    //la longitud del objeto+ la de los elementos- los eliminados
    object.length += elements.length - count;

    return object;
}
//eliminar los objetos que sobran al final (ESTE YA NO VALE PORQUE YA MOVIMOS LOS ELEMENTOS)
// for (var i = object.length - count; i < object.length; i++) {
//     delete object[i]
// }

splice(months, 2, 1, 'March', 'April', 'May', 'June')
console.log(months)


splice(months,1, 3, 'March')
console.log(months)

