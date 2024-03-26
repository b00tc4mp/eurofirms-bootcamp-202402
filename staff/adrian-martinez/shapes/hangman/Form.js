
function Form(){
    Component.call(this, "Form");
}

Form.prototype = Object.create(Component.prototype);
Form.prototype.constructor = Form;

Form.prototype.onSubmit = function(callback){
    this.container.onsubmit = callback;
}