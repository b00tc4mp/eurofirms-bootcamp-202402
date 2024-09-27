//Declaramos variables
var numberone;
var numbertwo;
var operation;
function init(){
    //variables
    var result = document.getElementById('result');
    var reset = document.getElementById('reset');
    var addition = document.getElementById('addition');
    var rest = document.getElementById('rest');
    var multiplication = document.getElementById('multiplication');
    var division = document.getElementById('division');
    var equal = document.getElementById('equal');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var cero = document.getElementById('cero');
  }
  
  //Eventos de click
  one.onclick = function(e){
    result.textContent = result.textContent  + "1";
}
two.onclick = function(e){
    result.textContent = result.textContent  + "2";
}
three.onclick = function(e){
    result.textContent = result.textContent  + "3";
}
four.onclick = function(e){
    result.textContent = result.textContent  + "4";
}

five.onclick = function(e){
    result.textContent = result.textContent  + "5";
}
six.onclick = function(e){
    result.textContent = result.textContent  + "6";
}
seven.onclick = function(e){
    result.textContent = result.textContent  + "7";
}
eight.onclick = function(e){
    result.textContent = result.textContent  + "8";
}
nine.onclick = function(e){
    result.textContent = result.textContent  + "9";
}
cero.onclick = function(e){
    result.textContent = result.textContent  + "0";
}
reset.onclick = function(e){
    toreset();
}

addition.onclick = function(e){
    numberone = result.textContent;
    operation = "+";
    clean();
}
rest.onclick = function(e){
    numberone = result.textContent;
    operation = "-";
    clean();
}
multiplication.onclick = function(e){
    numberone = result.textContent;
    operation = "*";
    clean();
}
division.onclick = function(e){
    numberone = resultado.textContent;
    operation = "/";
    clean();
}
equal.onclick = function(e){
    numbertwo = result.textContent;
    resolve();
}
function clean(){
result.textContent = "";
}
function toreset(){
result.textContent = "";
numberone = 0;
numbertwo = 0;
operation = "";
}
function resolve(){
var res = 0;
switch(operation){
  case "+":
    res = parseFloat(numberone) + parseFloat(numbertwo);
    break;
  case "-":
      res = parseFloat(numberone) - parseFloat(numbertwo);
      break;
  case "*":
    res = parseFloat(numberone) * parseFloat(numbertwo);
    break;
  case "/":
    res = parseFloat(numberone) / parseFloat(numbertwo);
    break;
}
toreset();
result.textContent = res;
}