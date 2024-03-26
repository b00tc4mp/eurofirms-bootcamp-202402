function Form() {
    Component.call(this, 'form')
}

Form.prototype = Object.create
    (Component.prototype)
Form.prototype.constructor = Form

Form.prototype.onSubmit = function name(callback) {
    this.container.onsubmit = callback
}