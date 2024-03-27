function Form() {
  Component.call(this, "form");
}

Form.prototype = Object.create(Component.prototype);
Form.prototype.constructor = Form;

Form.prototype.onSubmit = function (callback) {
  this.container.onsubmit = callback;
};

Form.prototype.reset = function () {
  this.container.reset();
};
