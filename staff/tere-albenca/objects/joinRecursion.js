function recursive(object){
    var result =''
    for (var i = 0;i < object.length; i++){
        if(object[i] instanceof object){
            result += recursive(object[i])
        }else{
            result += object[i]
        }
    }
   return result
}
var countries = {
    0: {
        0:{ 0:'France', 1:'Irak', length:2 },
        1:{ 0:'Suisse', 1:'España', length:2 },
        length:2
    },
    1:{ 0: 'Chile',
        1:{ 0:'Colombia', 1:'Portugal',length:2 },
        length:2
    },
    2:{ 0:'Peru',
        1:{0:'Canada', 1:'Texas', length:2}

    },
    length:3
}

[[[10,12],[14,16]][18[20,22]][24[26,28]]]

recursive(numbers)