function Hangman(width, height){
    Shape2D.call(this, width, height,'transparent')

    this.setLocation(50,500)
    
    var gallowBase = new Shape2D(100, 0)
    gallowBase.setStyle('border', '1px solid blue')
    gallowBase.setLocation(this.width - gallowBase.width - 5, this.height)
    this.add(gallowBase)

    var gallowBar1 = new Shape2D(0, 200)
    gallowBar1.setStyle('border', '1px solid red')
    gallowBar1.setLocation(this.width - 5 - ( gallowBase.width/2), this.height - gallowBar1.height)
    this.add(gallowBar1)

    var gallowBar2 = new Shape2D(50, 0)
    gallowBar2.setStyle('border', '1px solid green')
    gallowBar2.setLocation(this.width -5 - (gallowBase.width/2) - gallowBar2.width, 0)
    this.add(gallowBar2)

    var gallowBar3 = new Shape2D(0, 50)
    gallowBar3.set
}
