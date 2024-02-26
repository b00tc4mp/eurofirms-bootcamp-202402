
let cars = {
    0: "peugeot",
    1: "Alfa Romeo",
    2: "Red Bull",
    3: "Ferrari",
    4: "peugeot",
    5: "Lamborgini",
    length: 6
}

let firstCar = removeFirstElement(cars);

function removeFirstElement(obj){

    let devolver = obj[0];
    for(let i=1;i < obj.length-1;i++){

        obj[i-1] = obj[i];
    }

    delete obj[obj.length-1];
    obj.length --;

    return devolver;
}

for(let e in cars){

    console.log(cars[e]);
}

console.log("Borraste el "+ firstCar);