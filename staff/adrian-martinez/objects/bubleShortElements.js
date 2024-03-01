console.log("Case 1: ordenar con el método de la burbuja")
var notasCurso ={
    0: 4,
    1: 5,
    2: 1,
    3: 2,
    4: 7,
    5: 6,
    6: 9,
    7: 7,
    8: 10,
    length: 9
}

function ordenarMayorMenor(obj){


    for(let i=0;i < obj.length;i++){
        if(obj[i] < obj[i + 1]){

            let temporal = obj[i];
            obj[i] = obj[i+1];
            obj[i+1] = temporal;
            
            console.log("Elemento Actual: "+ obj[i] +" Siguiente: "+ obj[i + 1]);
        }
    }    
}

console.log(notasCurso);

ordenarMayorMenor(notasCurso);

for(let n in notasCurso){

    console.log(notasCurso[n]);
}