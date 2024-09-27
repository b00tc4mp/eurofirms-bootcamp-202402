var people = {
   0:'Salva',
   1:'Maite',
   2:'Majose',
   3:'Javi',
   4:'Alba',
   5:'Laia',
   length: 6
}
//primera vuelta del for
//var people = {0:'Salva',1:'Maite',2:'MaJose',3:'Javi',4:'Alba',5:'Laia',length: 6}
//var people = {0:'Maite',1:'Salva',2:'MaJose',3:'Javi',4:'Alba',5:'Laia',length: 6}
//var people = {0:'Maite',1:'MaJose',2:'Salva',3:'Javi',4:'Alba',5:'Laia',length: 6}
//var people = {0:'Maite',1:'MaJose',2:'Javi',3:'Salva',4:'Alba',5:'Laia',length: 6}
//var people = {0:'Maite',1:'MaJose',2:'Javi',3:'Alba',4:'Salva',5:'Laia',length: 6}
//var people = {0:'Maite',1:'MaJose',2:'Javi',3:'Alba',4:'Laia',5:'Salva',length: 6}
//segunda vuelta
//var people = {0:'Maite',1:'MaJose',2:'Javi',3:'Alba',4:'Laia'',5:'Salva',length: 6}
//var people = {0:'Maite',1:'Javi',2:'MaJose',3:'Alba',4:'Laia'',5:'Salva',length: 6}
//var people = {0:'Maite',1:'Javi',2:'Alba',3:'MaJose',4:'Laia'',5:'Salva',length: 6}
//var people = {0:'Maite',1:'Javi',2:'Alba',3:'Laia',4:'MaJose',5:'Salva',length: 6}
//tercera
//var people = {0:'Javi',1:'Maite',2:'Alba',3:'Laia',4:'MaJose',5:'Salva',length: 6}
//var people = {0:'Javi',1:'Alba',2:'Maite',3:'Laia',4:'MaJose',5:'Salva',length: 6}
//var people = {0:'Javi',1:'Alba',2:'Laia',3:'Maite',4:'MaJose',5:'Salva',length: 6}
//cuarta
//var people = {0:'Alba',1:'Javi',2:'Laia',3:'MaJose',4:'Maite',5:'Salva',,length: 6}

function bubbleSort(object) {
    //esta variable verficará si se ordenan
    //var bubble = true
    var bubble 
    //necesito un for para recorrer todas las propiedades
    for (var i = 0; i < object.length; i++) {
        //al principio del bucle nuestro bubble será falso porque aun no se han ordenado
        bubble = false
        //necesitaré otro for para volver comparar un elemento con el siguiente
        for (var j = 0; j < object.length - 1 - i; j++) {
            //declaro un elemento del objeto dentro del for que será igual a una propiedad
            var element = object[j];
            //declaro el siguiente elemento dentro del for será la siguiente propiedad
            var nextElement = object[j + 1];
            //necesito una condicion que mueva los elemento si no van por orden alfabetico
            if (element > nextElement) { //este if es el comienzo de mi condicion
                // Si es necesario se intercambiaran los elementos
                //nextElement = element
                //element = nextElement
                object[j] = nextElement; 
                object[j + 1] = element;
                //si no establecemos criterios para que pare hará un bucle  infinito
                bubble = true; //este true verifica que se ha hecho un bubble o intercambio
            }
        }
        // Si en el recorrido no hay ningún intercambio, es porque ya está ordenado
        if(!bubble)
            //sal del bucle
            break;

    }//devuelve el objeto
    return object;
}

// desarrollo del bubble en people
console.log('OBJETO PERSONAS')
console.log(people)
console.log('OBJETO PERSONAS ORDENADO ALFABÉTICAMENTE')
bubbleSort(people)
console.log(people)