function Component(tagName) {
  this.container = document.createElement(tagName);
}

Component.prototype.setStyle = function (property, value) {
  this.container.style[property] = value;
};

Component.prototype.add = function (component) {
  if (!(component instanceof Component))
    throw new TypeError("component is not a Component");

  this.container.appendChild(component.container);
};
