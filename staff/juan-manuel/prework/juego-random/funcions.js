var character = document.getElementById("character");
var posX = 0;
var posY = 0;
var moveAmount = 30;
var Ahorros = 0;
var Multas = 0;
var gameContainer = document.getElementById("game-container");
var EnemigoSound = document.getElementById("Enemigo-sound");


/* 
var personaje = document.getElementById("character");
var x = 0;
var y = 0;

    document.onkeydown = function (oliwis) {
    movecharacter(oliwis);
}

function movecharacter(oliwis) {
    if (oliwis.key === "ArrowRight") {
        x = x + 10;
    } else if (oliwis.key === "ArrowLeft") {
        x = x - 10;
    } else if (oliwis.key === "ArrowUp") {
        y = y - 10;
    } else if (oliwis.key === "ArrowDown") {
        y = y + 10;
    }

    personaje.style.left = x + "px";
    personaje.style.top = y + "px";
}
*/

// Obtener todas las monedas
var monedas = document.getElementsByClassName("moneda");

// Obtener todos los enemigos
var enemigosList = document.getElementsByClassName("enemigo");

function isWithinBounds(x, y) {
    return (
        x >= 0 &&
        x + character.clientWidth <= gameContainer.clientWidth &&
        y >= 0 &&
        y + character.clientHeight <= gameContainer.clientHeight
    );
}

function setRandomPositions(element) {
    var maxX = gameContainer.clientWidth - element.clientWidth;
    var maxY = gameContainer.clientHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

// Configurar posiciones aleatorias para todas las monedas
for (var i = 0; i < monedas.length; i++) {
    setRandomPositions(monedas[i]);
}

function checkCollision(elem1, elem2) {
    var rect1 = elem1.getBoundingClientRect();
    var rect2 = elem2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

// Configurar posiciones aleatorias para todos los enemigos
for (var i = 0; i < enemigosList.length; i++) {
    setRandomPositions(enemigosList[i]);
}

    function crearEnemigo(){
    // Crear un nuevo elemento div para representar al Enemigo
    var nuevoEnemigo = document.createElement("div");
    nuevoEnemigo.className = "enemigo";
    // Colocar el Enemigo en una posición aleatoria dentro del contenedor de juego
    setRandomPositions(nuevoEnemigo);
    // Agregar el Enemigo al contenedor de juego
    gameContainer.appendChild(nuevoEnemigo);
}

function moverEnemigos() {
   /*/ for (var x = 0; x < monedas.length; x++) /*/
    for (var i = 0; i < enemigosList.length; i++)
    for (var f = 0; f < monedas.length; f++) {
        // Verificar colisión
        if(checkCollision(enemigosList[i], monedas[f])){
            enemigosList[i].style.display = "none";
            Multas ++;
            document.getElementById("Multas").innerText = "Multas: " + Multas;
            perdedor();

        }

        var maxX = gameContainer.clientWidth - enemigosList[i].clientWidth;
        var maxY = gameContainer.clientHeight - enemigosList[i].clientHeight;

        // Velocidad de movimiento del enemigo
        var moveAmountX = 20;
        var moveAmountY = 20;

        // Obtener la posición actual del Enemigo
        var currentX = parseFloat(enemigosList[i].style.left);
        var currentY = parseFloat(enemigosList[i].style.top);

        // Calcular la nueva posición aleatoria dentro de los límites
        var newX = Math.max(0, Math.min(maxX, currentX + Math.floor(Math.random() * (2 * moveAmountX + 1) - moveAmountX)));
        var newY = Math.max(0, Math.min(maxY, currentY + Math.floor(Math.random() * (2 * moveAmountY + 1) - moveAmountY)));

        // Establecer la nueva posición del Enemigo
        enemigosList[i].style.left = newX + "px";
        enemigosList[i].style.top = newY + "px";
    }
}

setInterval(moverEnemigos, 20);

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (isWithinBounds(posX, posY - moveAmount)) {
                posY -= moveAmount;
            }
            break;
        case 'ArrowDown':
            if (isWithinBounds(posX, posY + moveAmount)) {
                posY += moveAmount;
            }
            break;
        case 'ArrowLeft':
            if (isWithinBounds(posX - moveAmount, posY)) {
                posX -= moveAmount;
            }
            break;
        case 'ArrowRight':
            if (isWithinBounds(posX + moveAmount, posY)) {
                posX += moveAmount;
            }
            break;
    }

    character.style.transform = "translate(" + posX + "px," + posY + "px)";

    // Verificar si el personaje recoge alguna moneda
    for (var i = 0; i < monedas.length; i++)
    for (var k = 0; k < enemigosList.length; k++) {
        if (checkCollision(character, monedas[i])) {
            setRandomPositions(monedas[i]);
            Ahorros++;
            document.getElementById("Ahorros").innerText = "Repartos: " + Ahorros;
            vencedor();
            // Mostrar los Enemigos después de recoger la primera moneda
            if (Ahorros > 0) {
                for (var k = 0; k < enemigosList.length; k++) {
                    enemigosList[k].style.display = "block";
                }
            }

            crearEnemigo();
        }

    }

}

function music() {
    if (Ahorros >= 1) {
        sonido.play().catch(error => {
            console.error("Tienes que interactuar con la página para permitir la reproducción de audio.");
        });
    }
}

document.addEventListener('keydown', function(event) {
    handleKeyPress(event);
    music(); // desencadenar función (Activar música)
});


function perdedor() {
    if(Multas >= 15) {
        alert("HAS PERDIDO, ESTÁS ENDEUDADO");

        var restartLost = confirm("¿QUIERES VOLVER A JUGAR?");
    }
    if (restartLost) {
        location.reload();
    }
}

function vencedor() {
    if(Ahorros >= 20) {
        alert("HAS GANADO");

        var restartWin = confirm("¿QUIERES UN POCO DE SPAMSITO :D?");
    }
    if (restartWin) {
        window.location.href = ("https://criptoxd.com");
    }
}


document.addEventListener('keydown', handleKeyPress);