function Label() {
    Component.call(this, 'label')
}

Label.prototype = Object.create(Component.prototype)
Label.prototype.constructor = Label

Label.prototype.setFor = function (htmlfor) {
    this.container.htmlFor = htmlfor
}