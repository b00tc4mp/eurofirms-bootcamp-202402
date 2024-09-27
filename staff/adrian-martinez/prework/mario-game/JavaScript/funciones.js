

let jugador = document.getElementById("jugador");
//Coger jugador del HTML jugadorImagen =

let x = 0;
let y = 520;

//Capturamos el evento del teclado y ejecutamos las funciónes necesarias
document.onkeydown = function (e) {
    console.log(e);
    draw(e);
}

//Tenemos que coger las coordenadas del navegador para que los
function moverJugador() {
    // Mario no se puede salir de la pantalla del juego

    if (e.key === "ArrowRight") {
        x = x + 10;
    } else if (e.key === "ArrowLeft") {
        x = x - 10;

    } else if (e.key === "s") {
        y = y - 100;
    } else if (e.key === "x") {
        y = y + 10;
    } else if (e.key === "s" && e.key === "ArrowRight") {
        y = y + 100;
        x = x + 100;
    } else if (e.key === "s" && e.key === "ArrowLeft") {
        y = y + 100;
        x = x - 100;
    }

    jugador.style.left = x + "px";
    jugador.style.top = y + "px";
}

//Funciones para meterle gravedad y colisión

let mario = jugador;

mario = {
    img: 0,
    x: 100,
    y: 100,
    w: 100,
    h: 200
}

let suelo = {
    x: 0,
    y: 0,
    w: 0,
    h: 50
}

function preload() {

    mario = loadImage(mario);
}
function setup() {

    createCanvas(windowWidth, windowHeight);
    background(100);
    mario.img = mario;//Ponemos la imagen de mario en su propiedad img

    suelo.y = height - 60;
    suelo.x = width;
}

//Función que se encarga de dibujar a mario dandole un tamaño determinado
function draw(e) {

    mario(mario.img, mario.x, mario.y, mario.w, mario.h);
    rect(suelo.x, suelo.y, suelo.w, suelo.h);
    moverJugador();
    gravedad();
}
function gravedad() {
    mario.y += 5;
}

