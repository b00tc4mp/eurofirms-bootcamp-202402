function Car(width, height, color) {

    var wheelSize = (width)

    Shape2D.call(this, width, height + wheelSize /2)

    var carBody = new CarBody(width * 0.5, height )
    

}