console.log("Case 1: ordenar con el método de la burbuja")
var notasCurso ={
    0: 4,     // 5  // 
    1: 5,     // 4
    2: 1,     // 2
    3: 2,     // 7
    4: 7,     // 6
    5: 6,     // 9
    6: 9,     // 7
    7: 7,     // 10
    8: 10,    // 1
    length: 9
}

function ordenarMayorMenor(obj){
 
    var elMayor = 0;
    //Hasta que el mayor no esté en el primer índice vamos a seguir ordenando
    let i=0;
    while(elMayor != obj[0]){
        for(let i=0;i < obj.length - 1;i++){
            if(obj[i] < obj[i + 1]){
        
                let temporal = obj[i];
                obj[i] = obj[i+1];
                elMayor = obj[i];
                obj[i+1] = temporal;
                            
                    // console.log("Elemento Actual: "+ obj[i] +" Siguiente: "+ obj[i + 1]);
            }   
        }
        i++;
    } 
}

console.log(notasCurso);

ordenarMayorMenor(notasCurso);

console.log(notasCurso)
/* 
for(let n in notasCurso){

    console.log(notasCurso[n]);
} */