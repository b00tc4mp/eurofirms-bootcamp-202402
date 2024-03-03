console.log("Añadir una fruta");
let fruits = {
    0: "manzana",
    1: "piña",
    2: "fresa",
    3: "tomate",
    4: "naranja",
    5: "platano",
    length: 7
}

function insertElements(obj){

    for(let i=0; i < arguments.length;i++){

        let elem = arguments[i];
        obj[obj[i]] = elem;

        obj.length ++;
    }
}

insertElements(fruits, "sandía","kiwi");

console.log("Lista de frutas: ");

for(let e in fruits){

    console.log(fruits[e]);
}


