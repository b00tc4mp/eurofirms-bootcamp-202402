function bubbleSort(object) {
    //creamos esta variable para saber si ha habido un cambio en los elementos
    // la iniciamos en TRUE para entrar al for 
    var elementsMoved = true

    // bucle para repetir las interaciones sobre el objecto

    for ( var i= 0; elementsMoved; i++){
        // la cambiamos a false para que en caso de que no se mueva nigun element, no repita al bucle
        elementsMoved = false

        //bucle para recorrer el objecto y detectar si cambiar algun element
        for ( var j = 0; j < object.length -1 - i; j++) {
            var element = object[j]
            var nextElement = object[j + 1]

            //valoration if the actual element is under than next element

            if(element > nextElement) {
                //if is true , we give the order to change it
                object[j] = nextElement
                object[j +1] = element
                //dectamos un cambio de element asi que la pasamos a true para repetir el primer bucle elementMoved = true
                elementsMoved = true
            }
        

        }
    }
    return object
}

console.log('FUNCTION BUBBLESORT')

console.log('case1: ordenate sort numbers objects from minor to max')

var numbers={
    0:8,
    1:34,
    2:6,
    3:9,
    4:40,
    5:16,
    6:31,

    length:7
}
var sorteNumbers = bubbleSort(numbers)
console.log(numbers)
console.log(sorteNumbers)
console.log({equal10Objects: numbers === sorteNumbers})