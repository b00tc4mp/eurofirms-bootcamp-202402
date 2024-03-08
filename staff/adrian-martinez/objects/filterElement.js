
var nums = {
    0: 10,
    1: 20,
    2: 432,
    3: -2,
    4: 1111111,
    5: -1232442345,
    6: 999,
    length: 7
}
console.log("Case 1: Filtrar de la posición 3 a la 5 los números que tengan 2 dígitos o más.");

var listaCorrecta = function(){
    return num > 30;
};
console.log(listaCorrecta);

function filter(object, callback){
    //Creamos una variable nueva donde haremos una copia del original con el filter()
    var result = { length: 0 };
    //Recorrer object
    for(let i=0;i < object.length;i++){

        let callbackResult = callback(object[i]);

        if(callbackResult){

            result[result.length] = object[i];
            result.length++;
        }
    }
    //Dentro del bucle llamar al callback con cada uno de los elementos del objecto
    // Evaluar la respuesta del callback, y si es true agregamos el elemento al nuevo objeto
    return result;
}

//En este callback vamos a poner las condiciones que se tienen que dar para devolver el resultado
var filterCallback = function(mun){

    if(number < 0){
        return number.toString().length > 2 //Mayor que dos para que cuente también el signo -
    }
    else{
        return false;
    }
}
var result = filter(nums, filterCallback);
console.log(result);