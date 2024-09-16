
console.log("Añadir una fruta");
let fruit = {
    0: "manzana",
    1: "piña",
    2: "fresa",
    3: "tomate",
    4: "naranja",
    5: "plantano",
    length: 7
}

function insertFirstElement(obj, indice, fruta){

    let insertado = insertFirstElement(obj[fruta]);

    //Hecho a la inversa por el profesor
    for(let i=obj.length-1;i > indice;i--){

        var elem = obj[i];
        
        obj[i+1] = elem;
    }

    obj[index] = fruta;
    index ++;
    //Lo de abajo es ordenación, no es lo mismo que correr los elementos para un lado
    
    /*let anterior = obj[fruta];
    for(let i=indice;i < obj.length;i++){

        anterior = obj[i];
        obj[i+1] = obj[anterior];
     } */
}

for(let e in cars){

    console.log(cars[e]);
}

console.log("Borraste el "+ firstCar);

console.log("Añadir un número");
let numeros = {
    0: "manzana",
    1: "piña",
    2: "fresa",
    3: "tomate",
    4: "naranja",
    5: "plantano",
    length: 7
}

function insertFirstElement(obj, indice, fruta){

    let insertado = insertFirstElement(obj[fruta]);

}

for(let e in cars){

    console.log(cars[e]);
}

console.log("Borraste el "+ firstCar);