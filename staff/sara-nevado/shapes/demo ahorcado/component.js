function Component(tagName) {
    this.container = document.createElement(tagName)

}

Component.prototype.setTex = function (text) {
    this.container.innerText = text
}

Component.prototype.add = function (component) {
    if (!(component instanceof Component)) throw new TypeError('component is not a Component')

    this.container.appendChild(component.container)
}

