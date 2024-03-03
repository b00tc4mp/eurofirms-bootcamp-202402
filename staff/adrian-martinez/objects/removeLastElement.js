console.log("Case 1: add element to iterable object")
var chars ={
    0: "h",
    1: "o",
    2: "l",
    length: 3
}

function removeLastElement(x) {

    delete x[x.length-1]; 
    x.length --;

    return x.length;
}

removeLastElement(chars);

for(let x in chars){

    console.log(chars[x]);
}