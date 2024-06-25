class Component {
    constructor(tagName) {
        this.container = document.createElement(tagName)
    }

    setId(id) {
        this.container.id = id
    }

    setText(text) {
        this.container.innerText = text
    }

    add(component) {
        if (!(component instanceof
            Component)) throw new TypeError
                ('component is not a Component')

        this.container.appendChild
            (component.container)
    }

    remove(component) {
        if (!(component instanceof Component)) throw new TypeError
            ('component is not a Component')

        this.container.removeChild
            (component.container)
    }

    setStyle(property, value) {
        this.container.style[property] =
            value
    }
}
