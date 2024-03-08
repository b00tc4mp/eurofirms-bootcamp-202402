function bubblesSort(object){
    for (var i=0; i<object.length;i++){
        var element =object[i]
        var nextElement =object [i+1]

        if(element > nextElement){
            ojbect[i]=nextElement
            object[i+1]=element
        }
    }
    return object

}


console.log('order objects of nums from minor to major')

var nums ={
    1:100,
    2:50,
    3:300,
    4:10,

    length:5
}

var sorteNumbers = bubblesSort(object)
console.log(nums)