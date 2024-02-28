
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

    let iterations = Math.floor(obj.length / 2); //LLego hasta la mitad de longitud para ir cambiando el order
    for(let i=0;i < iterations;i++){

        let temporal = obj[i];
        obj[i] = Math.floor(obj[obj.length - 1 - i]); //Te 
        obj[obj.length - 1 - i] = temporal;ad
    }
}

console.log(pilotos); 
alReves(pilotos);
console.log(pilotos)


