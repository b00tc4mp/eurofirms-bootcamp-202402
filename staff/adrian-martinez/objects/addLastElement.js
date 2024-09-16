console.log("Case 1: add element to iterable object")
var chars ={
    0: "h",
    1: "o",
    2: "l",
    length: 3
}

function addElement(x, element) {
    for(let i=0;i < x.length;i++){
        if(i == x.length-1){

            x[x[i]] = element;
            x.length ++;
            
            return length;
        }
    }
}

addElement(chars, "a");

for(let x in chars){

    console.log(chars[x]);
}