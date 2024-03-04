function forEach ( object, callback){

    for ( var i = 0 ; i < object.length; i++ ) {
        callback(object[i])
}
    
}

var users = {

    '0': { 
        name: 'Javier',
        surname: 'Pulido',
        password: '123123123',
        
    },

    '1': { 
        name: 'Pepito',
        surname: 'Pepito12',
        password: '123123123',
        
    },
    
    '2': { 
        name: 'Grillo',
        surname: 'Grillo12',
        password: '123123123',          
},
        length: 3

var printUserName = function (user) {
    console.log(user.name + ' ' + user.userName)
}

forEach(users, printUsername)







    var users function ( callback)



    console.log (users, )