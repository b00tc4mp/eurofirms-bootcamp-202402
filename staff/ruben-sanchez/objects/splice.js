var videogames = {
    0: 'valorant',
    1: 'overwatch',
    2: 'zelda',
    3: 'metroid',
    4: 'super mario',
    5: 'dark souls',
    6: 'elden ring',
    7: 'sonic',
    8: 'doom',
    length: 9
}

function splice(object, index,toDelete,){
   for (var j =0; j<toDelete;j++){
   
    for (var i =index;i <object.length;i++ ){
        object[i] =object[1+i]
        
    }
    object.length--
    delete object[object.length]
}
for (var k =index;k <object.length;k++ ){
    object[i+1] =object[i]
    
}
return console.log(object)
}
        
 
   
 

splice(videogames,2,2,'tetris','tomb raider','street fighter')
