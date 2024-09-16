
var animales = {
    0: "Perro",
    1: "Gato",
    2: "Mono",
    3: "Pez",
    4: "Jirafa",
    5: "Tigre",
    6: "León",
    length: 7
}

function everyElements(object, callbackResult){
    
    for(var i=0;i < object.length;i++){
        if(!callbackResult(object[i])){
            return false;
        }
    }
    return true;
}

var callbackResult = function(element){
    return element.length > 4;
}

console.log(everyElements(animales, callbackResult));


