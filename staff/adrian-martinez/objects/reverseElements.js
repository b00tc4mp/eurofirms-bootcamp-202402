
let pilotos = {
    0: "Max Verstapen",
    1: "Checo Pérez",
    2: "Charles Lecker",
    3: "Fernando Alonso",
    4: "Lewis Hamilton",
    5: "Carlos Sainz",
    length: 6
}

function alReves(obj){

    for(let i=0;i < obj.length;i++){

        let temporal = obj[i];
        obj[i] = obj[i + 1];
    }
}

console.log(pilotos); 
alReves(pilotos);
console.log(pilotos)


