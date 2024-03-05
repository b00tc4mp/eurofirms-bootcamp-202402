
//Recorremos varios objectos. 
//El segundo parámetro es un callback, que es una función anónima
function forEach(object, callback) {

    for (let i = 0; i < object.length; i++) {

        callback(object[i]);
    }
}

var users = {
    "0": {
        name: "Wendy",
        userName: "Wendy12",
        password: "123",
    },
    "1": {
        name: "Peter Pan",
        userName: "PeterP",
        password: "123",
    },
    "2": {
        name: "Campanilla",
        userName: "Campana",
        password: "123",
    },
    length: 3
}
forEach(users, function (element) {

    console.log(element.name);
});

var nums = {
    0: 5,
    1: 10,
    2: 20,
    3: 30,
    length: 4
}

//Recorremos un objeto
forEach(nums, function (element) {

    console.log(element * 10);
});
