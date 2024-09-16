function Label() {
    Component.call(this, 'label')
}

Label.prototype = Object.create(Component.prototype)
Label.prototype.constructor = Label

Label.prototype.setFor = function (htmlFor) {
    this.container.htmlFor = htmlFor
}