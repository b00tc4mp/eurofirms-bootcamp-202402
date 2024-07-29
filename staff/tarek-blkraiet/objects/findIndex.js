
function findIndex(object,callback){
    for (var i=0; i< object.length;i++){
        if (callback(object[i])){
            return i

        }
     
    }
    return
}

var callback = function (element){
    if (element === 456){
        return true
    }
    return false
}
console.log( 'case 1return the first element that have more than 3 craracters')

var nums = {
    0:23,
    1:30,
    2:456,
    3:43,
    4:567,

    length:5
}



console.log(findIndex(nums,callback))

