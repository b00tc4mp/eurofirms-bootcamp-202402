function Input() {
    Component.call(this, 'input')
}

Input.prototype = Object.create(Component.prototype)
Input.prototype.contructor = Input

Input.prototype.getValue = function () {
    return this.container.value
}

