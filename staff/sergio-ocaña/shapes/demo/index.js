var goodButton = document.querySelector('#good')
var resetButton = document.querySelector('#reset')
var form = document.querySelector('form')

var normalHand = new Hand(100, 200, 60, 'yellow', 150, 200)

document.onkeydown = function (event) {
    console.log(event.key)

    switch (event.key) {
        case 'ArrowLeft':
            normalHand.addRotX(20)
            break;
        case 'ArrowRight':
            normalHand.addRotX(-20)
            break;
        case 'ArrowUp':
            normalHand.addRotY(20)
            break;
        case 'ArrowDown':
            normalHand.addRotY(-20)
            break;
    }
}
goodButton.onclick = function () {
    if (normalHand.boxX !== 10 || normalHand.boxY !== 0 || normalHand.boxZ !== 0)
        normalHand.setRotationDefault()
    if (normalHand.boxZ !== 90) normalHand.addRotZ(90)
    normalHand.changeColor('green')
}
resetButton.onclick = function () {
    normalHand.resetRotation()
    normalHand.changeColor('yellow')
}

form.onsubmit = function (event) {
    event.preventDefault()

    var colorInput = form.querySelector('#color')
    var color = colorInput.value

    normalHand.changeColor(color)

    form.reset
}