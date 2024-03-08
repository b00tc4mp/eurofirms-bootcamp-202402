var numbers = [10, 20, 30, 40]
for(var i = 0; i < numbers.length; i++){
   console.log(numbers[i]/2)
}

for(var i = 0; i < numbers.length; i--){
    console.log(numbers[i]/2)
 }

 var i=0
 while(i< numbers.length){
    console.log(numbers[i]/2)

    i++
}
do{
    console.log(numbers[i]/2)
}while(false)

var numbers2=[10, 15, 30, 33, 13, 11, 50, 55]

for(var i=0; i< numbers2.length;i++){
    if(numbers2[i] % 2 !== 0){
        console.log(numbers2[i])
    }
}

var numbers3=[[10, 15], [30, 33, 13],[11, 50, 55]]

for (var i=0; i< numbers3.length; i++){
    for ( var i = 0; j< numbers3[i].length; j++){
        if(numbers3[i][j] % 2!== 0){
            console.log(numbers[i][j])
        }
    }
}
