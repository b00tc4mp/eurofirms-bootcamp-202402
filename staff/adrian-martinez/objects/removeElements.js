console.log("Borrar varias frutas"); 
let fruits = {
    0: "manzana",
    1: "piña",
    2: "fresa",
    3: "tomate",
    4: "naranja",
    5: "platano",
    length: 7
}

for(let e in fruits){

    console.log(fruits[e]);
}

function removeElements(obj, index, count){

    let deletedElements = { length: 0};//Devolvemos longitud 0 hasta que se elimine algo

    let objectLength = obj.length;//Guardamos la longitud aquí para que lo ifs no modifiquen la longitud
    for(let i=index + count; i < objectLength;i++){
        if(i >= index && i < index + count){
            deletedElements[deletedElements.length] = obj[i - count];
            deletedElements.length ++;
        }

        else
            obj[i - count] = obj[i];

        if(i >= objectLength - count){

            delete object[i];

            obj.length --;
        }
    }

    return "Se borró "+ deletedElements;
}

removeElements(fruits, 2, 3);

console.log("Lista de frutas: ");

for(let e in fruits){

    console.log(fruits[e]);
}


