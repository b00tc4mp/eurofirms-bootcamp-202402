var numbers = [10, 20, 30, 40]

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i] / 2)
}

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i] / 2)
}

var i = 0
while (i < numbers.length) {
    console.log(numbers[i] / 2)

    i++
}

var i = 0
do {
    if (numbers2[i] % 2 !== 0) {
        console.log(numbers2[i])
    }

    i++
} while (i < numbers2.length)

var numbers2 = [10, 15, 30, 33, 13, 11, 50, 55]

for (var i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 !== 0) {
        console.log(numbers2[i])
    }
}
//                  0           1             2  
//                0  1      0   1   2     0   1   2    
var numbers3 = [[10, 15], [30, 33, 13], [11, 50, 55]]

for (var i = 0; i < numbers3.length; i++) {
    for (var j = 0; j < numbers3[i].length; j++) {
        if (numbers3[i][j] % 2 !== 0) {
            console.log(numbers3[i][j])
        }
    }
}

