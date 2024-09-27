
//add element
//Esta funcion tiene dos parametros el objeto a modificar y el elemento a añadir
function addElement(object,element){
   // object.length sera igual object.legth mas un elemento 
    object.length =object.length +1
    //object.length -1 será el elemento a añadir porque es el último
    object[object.length -1] = element
    //subo la longitud del objeto
    object.length++   
}

//añadir varios elementos stapler and staplerhole
function addElements(object){
    //arguments es todas las propiedades que hay dentro del objeto
//object -> office
//arguments -> {0:pen, 1:pencil...}
    //recorro los arguments del objeto
    for (var i = 1; i < arguments.length; i++) {
        //declaro una variable para los elementos a añadir que es igual que los argumentos
        var elements = arguments[i]
        //la longitud todal del objeto sera igual que los elementos a añadir que a su vez es igual a todos los argumentos
        object[object.length] = elements
        //subo la longitud del objeto
        object.length++
    }
}


//insert elements in iterable object at specified index =2 value= staplerhole
function insertElement(object, index, value) {
    //object -> office = {0:pen, 1:pencil...}
    //index 2
    //value 'ruler'
    //recorro un for donde la variable i debe ser menos 1 con respecto a la logitud total y mayor o igual a index,a partir de index se modificará el objeto
    for (var i = object.length -1 ; i >= index; i--){
        //la variable element es el parametro que vamos a añadir en un index concreto
        var element = object[i]
        object[i + 1]= element

    }
    object[index]= value
    object.length++

}
//insert elements in iterable object at specified index
function insertElements(object, index,...values){
    //for: recorrer desde atrás el objeto para mover todos los elementos tantos lugares como valores se van a añadir
    for ( var i = object.length - 1 ; i >= index; i--){
        //añadir los espacios donde irán los nuevos valores
        object[i + values.length] = object[i]

    }
    //nuevo for, este servirá para insertar los nuevos elementos desde el indice especificado
    for(var i = 0; i< values.length;i++){
        //inserta los nuevos elementos
        object[index +1]= values[i]
    }
    object.length += values.length //en lugar de object.length++ hay que sumarle la longitud de values
}


//remove only one element
function removeElement(object,index){

}
//remove some elements at specified index
function removeElements(object,index,value){
    
}
//edit element of object
function editElement(object,value){

}

var office ={
    0:'pen',
    1:'pencil',
    2:'paper',
    3:'eraser',
    4:'scissor', 
    5:'marker',
    6:'whiteboard',
    7:'pencilcup',
    8:'clips',
    
    length:9
}


insertElements(office,4,'redpen','tipex')

console.log(office)