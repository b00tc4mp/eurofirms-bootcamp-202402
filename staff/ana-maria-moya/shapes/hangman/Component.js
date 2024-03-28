// function Component(tagName) {
//     this.container = document.createElement(tagName)
// }
class Component {
    constructor(tagName) {
        this.container = document.createElement(tagName)
    }


    // Component.prototype.setId = function (id) {
    //     this.container.id = id
    // }
    setId(id) {
        this.container.id = id
    }

    // Component.prototype.setText = function (text) {
    //     this.container.innerText = text
    // }
    setText(text) {
        this.container.innerText = text
    }

    add(component) {
        if (!(component instanceof Component)) throw new TypeError('component is not a Component')
        this.container.appendChild(component.container)
    }

    remove(component) {
        if (!(component instanceof Component)) throw new TypeError('component is not a Component')

        this.container.removeChild(component.container)
    }

    setStyle(property, value) {
        this.container.style[property] = value
    }

}