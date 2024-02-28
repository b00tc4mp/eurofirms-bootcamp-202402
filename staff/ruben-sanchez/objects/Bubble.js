var num = {
    0: 23,
    1: 13,
    2: -45,
    3: -12,
    4: 0,
    5: 89,
    6: 7,
    7: 9,
    8: 33,

    length: 9


} 

 function bubble(object) {

    for ( var i = 0; i < object.length -1; i ++ ) {

        if(object[i] > object[i +1] ) {
            var element = object[i]

            object[i + 1 ] = object[i] 
            
            object[i] = element

            
    
        }
        return object
    }


 }