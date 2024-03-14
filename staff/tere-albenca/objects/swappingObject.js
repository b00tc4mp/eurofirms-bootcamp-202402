var numbers = {
    0:100,
    1:300,
    2:150,
    3:180,
    4:75,
    5:500,
    6:12,
    7:10,
    8:210
}
// function swappObject(object){
//     var iterations = object[i]
//     for( var i= 0; i < iterations -1; i++){
//         var element = object[i]
//         if (object[i] > object[i+1]){
//             object[i +1]= element
            
//         }
//         return object

//     }

// }
console.log(numbers)
//
function swappObject(object){
    //declaramos el swapp empieza en true antes de realizar cambios
    var elementsMoved = true
    //recorremos los elementos para moverlos si es necesario
    for (var i = 0 ; elementsMoved ;i++){
        //la variable elements moved se vuelve falso
        elementsMoved = false
        //este for es para moverlos, si uno es mayor que el siguiente se intercambiaran
        for (var j = 0; j < object.length -1-i; j++){
            var element = object[j]
            var nextElement = object[j+  1]
            //Aqui se realiza el cambio element sera igual a nex element y al reves
            if (element > nextElement){
                object[j] = nextElement
                object[j + 1] = element
                //devolvemos elementmoved a true despues de hacer el cambio
                elementsMoved = true
            }
        }
        
    }
    return elementsMoved
}
console.log(swappObject(numbers))