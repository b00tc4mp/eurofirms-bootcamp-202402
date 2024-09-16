
let coches = {
    0: " Peugeot ",
    1: "Ferrari ",
    2: "Mercedes",
    length: 3
}

function trim(object, element){

    var result = "";
    for(let i=0;i < object.length;i++){
        for(let j=0; j < object[object[i]].length;j++){
            if(object[object[0]] != element){

                result += object[i];
            }
        }
        console.log(result);
        
    }
}

trim(coches, " ");
