// //a
// var mascota = "Gerda / 6 / Schnauzer"
// var mascotainfo = mascota.split(' / ')
// console.info({ Nombre: mascotainfo[0], Edad: [6], Raza: mascotainfo[2] })


function split(string, separator, limit) {

    var result = []
    var acumulated = ''

    // 0 = l
    for (var i = 0; i < string.length; i++) {  //recorre desde el indice 0 hasta el final(.length), i++(se suma)
        if (string[i] === separator) {

        } else {
            acumulated = acumulated + string[i]// acumula las letras
        }



    }



}



console.log('CASE 1: SIMPLE SPLIT')

var flores = 'las rosas son rojas'

var result = split(flores, ' ')

console.log({ expected: ['las', 'rosas', 'son', 'rojas'], received: result })




