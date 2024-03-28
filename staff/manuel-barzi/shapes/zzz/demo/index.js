var title = new Component('h1')

// title.container.innerText = 'Ahorcado'
title.setText('Ahorcado')

var list = new Component('ul')
var item1 = new Component('li')
item1.setText('Red')
var item2 = new Component('li')
item2.setText('Green')
var item3 = new Component('li')
item3.setText('Blue')

//list.container.appendChild(item1.container)
//list.container.appendChild(item2.container)
//list.container.appendChild(item3.container)
list.add(item1)
list.add(item2)
list.add(item3)

var body = new Component()
body.container = document.body

//document.body.appendChild(title.container)
//document.body.appendChild(list.container)
body.add(title)
body.add(list)

var redBox = new Shape2D(100, 100, 'red')
redBox.setLocation(100, 300)
body.add(redBox)
