
let cars = {
    0: "peugeot",
    1: "Alfa Romeo",
    2: "Red Bull",
    3: "Ferrari",
    4: "peugeot",
    5: "Lamborgini",
    length: 6
}

let firstCar = removeElement(cars, 3);


//Mover los valores del índice siguiente con [i-1] hasta la posición indicada y despues poner el valor a mano
function removeElement(obj, indice){

    let deletedElement = obj[indice];

    for(let i=indice+1;i < obj.length;i++){

        var element = obj[i];
        obj[i-1] = element;
    }
    
    obj.length --;
    delete obj[obj.length];

    return deletedElement;
}



