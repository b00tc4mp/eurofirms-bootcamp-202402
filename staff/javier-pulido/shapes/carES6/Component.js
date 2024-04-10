class Component {
    constructor(tagName) {
        this.container = document.createElement(tagName)
    }

    setStyle(property, value) {
        this.container.style[property] = value
    }

    add(component) {
        if (!(component instanceof Component)) throw new TypeError('component is not a Component')

        this.container.appendChild(component.container)
    }
}


