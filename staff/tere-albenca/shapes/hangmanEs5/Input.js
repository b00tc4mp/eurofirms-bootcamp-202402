function Input() {
  Component.call(this, "input");
}

Input.prototype = Object.create(Component.prototype);
Input.prototype.constructor = Input;

Input.prototype.getValue = function () {
  return this.container.value;
};

Input.prototype.setMaxLength = function (maxLength) {
  this.container.maxLength = maxLength;
};

Input.prototype.setType = function (type) {
  this.container.type = type;
};
