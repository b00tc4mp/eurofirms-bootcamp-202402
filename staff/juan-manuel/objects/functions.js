function addElement(object, element) {
    object[object.length] = element
    object.length++
    }
    
    let chars = {
        0: 'o',
        1: 'm',
        2: 'g',
    
        length: 3
    }
    
    addElement(chars, "g")
    
    console.log(chars)



    function deleteElement(object) {
        let elemento = object[object.length]
        delete object[object.length]
        return elemento
        }
        
        let charss = {
            0: 'o',
            1: 'm',
            2: 'g',
        
            length: 3
        }
        
        deleteElement(charss);
        
        console.log(charss)