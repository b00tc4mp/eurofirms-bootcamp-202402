function sortObject(object) {
    var elementsMoved = true
    for (var i = 0; elementsMoved && (i < object.length); i++) {
        elementsMoved = false
        for (var j = 0; j < object.length - 1 - i; j++) {
            var temp = 0
            if (object[j] > object[j + 1]) {
                temp = object[j + 1]
                object[j + 1] = object[j]
                object[j] = temp
                elementsMoved = true
            }
        }
    }
}

var nums = {
    0: 100,
    1: 3,
    2: 700,
    3: 400,
    4: 230,
    length: 5
}
sortObject(nums)
console.log(nums)