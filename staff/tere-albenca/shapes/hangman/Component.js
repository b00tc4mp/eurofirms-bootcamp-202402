function Component (tagName){
    this.container = document.createElement(tagName)
}

Component.prototype.setId = function (id){
    this.container.id = id
}

Component.prototype.setText = function(text){
    this.container.innerText = text
}

Component.prototype.add = function (component){
    if (!(component instanceof Component)) throw new TypeError('component is not a Component')

    this.container.appendChild(component.container)
}

Component.prototype.remove = function (component){
    if (!(component instanceof Component)) throw new TypeError('component is not a Component')

    this.container.removeChild(component.container)
}

Component.prototype.setStyle = function (property, value){
    this.container.style[property] = value
}