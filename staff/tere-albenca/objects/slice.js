var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}

//Recuerda que slice recortará el objeto y le puedes dar un parametro de principio y final, mostrandote una seccion del objeto
console.log('SLICE CON CONDICIONES PARA EVITAR LOS NEGATIVOS Y SALIRSE DEL OBJETO')

function sliceObjects(object, start, end){
    //nuevo objeto recortado
    var newObject ={}

    //si end es negativo, hay que convertirlo en positivo
    //end= -1 ; end = 7 + (-1) = 6
    if(end < 0)
        end = object.length + end
    //si start es negativo, lo tengo que hacer positivo
    //start = 
    if (start < 0)
        start = object.length + start

    //End no puede ser más grande que el length del objeto
    if(end > object.length)
        end = object.length
    //start no puede ser mayor que end
    if(start > end)
        start = end
    //recorro el objeto para poder realizar el slice
    for ( var i = start; i < end; i++){
        //copio las propiedades del objeto al nuevo objeto o slice
        newObject[i] = object[i]
    }
    //devuelvo el nuevo ojeto o slice
    return newObject
}
var result = sliceObjects(cars, 2,-4)
console.log(cars)
console.log(result)




//declaro la funcion

// function sliceObjects (object, start, end){
      
//     
//     var newObject = {}

  
//     //declaro la variable para los valores de este objeto
//     //newObject[0] = object[1]
//     //newObject[1] = object[2]
//     //newObject[2] = object[3]
//     for(var i = 0 ; i + start < end; i++){
//         newObject[i] = object[i + start]
//     }
//     if (start >= 0 || end <= object.length ) {
//         return newObject
//     }else {
//         return 'error'
//     }
 
//     //devuelvo la selección de propiedades

// }