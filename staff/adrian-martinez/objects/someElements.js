//TODO
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

function someElements(object, callback){
    for(let i=0;i < object.length;i++){

        callback(object[i]);
    }
}

var callback = function(element){
    return element.length < 6;
}
console.log(animales, callback);
