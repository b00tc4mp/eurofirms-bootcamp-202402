//remove an elements by specified by index from iterable object an return it
function removeElement(object,index){
    //{0:'pen',1: 'pencil',2:'brush',3:'paper',4:'eraser', 5:'scissor',6:'marker',7:'whiteboard',8:'pencilcup',9:'clips', length:10}

    var element = object[ index]

    /*for (var i = index + 1 ; i < object.length; i++){
        var element = object[i]

        object[i -1 ]= element
    }
    */

    for (var i = index; i < object.legth -1; i++){
        var element = object[i +1]
        object[i] = element
    }

        //{0:'pen',1: 'pencil',2:'paper',3:'paper',4:'eraser', 5:'scissor',6:'marker',7:'whiteboard',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'eraser', 5:'scissor',6:'marker',7:'whiteboard',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'scissor', 5:'scissor',6:'marker',7:'whiteboard',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'scissor', 5:'marker',6:'marker',7:'whiteboard',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'scissor', 5:'marker',6:'whiteboard',7:'whiteboard',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'scissor', 5:'marker',6:'whiteboard',7:'pencilcup',8:'pencilcup',9:'clips', length:10}
        //{0:'pen',1: 'pencil',2:'paper',3:'eraser',4:'scissor', 5:'marker',6:'whiteboard',7:'pencilcup',8:'clips',9:'clips', length:10}

}

