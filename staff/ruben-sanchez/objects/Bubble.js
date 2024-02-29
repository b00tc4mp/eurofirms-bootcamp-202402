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

    

   
            for (var j= 0; j < object.length-1-i; j++) {
                var element = object[j]
                var nextElement = object[j+1]

                if( element > nextElement) {
                    object[j] = nextElement
                    object[j+1] = element
                    bubble(object)
                }

            }

    }
 return object
 }
 bubble(num)
 console.log (num)