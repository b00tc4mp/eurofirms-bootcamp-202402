class GuessForm extends Form {
  constructor() {
    super();

    this.setStyle('display', 'flex');
    this.setStyle('gap', '10px');

    const label = new Label();
    label.setFor('guessInput');
    label.setText('Type a letter');
    this.add(label);

    const charInput = new Input();
    charInput.setId('guessInput');
    charInput.setStyle('maxWidth', '20px');
    charInput.container.maxLength = '1';
    this.add(charInput);

    this.charInput = charInput;

    const button = new Button();
    button.setType('submit');
    button.setText('Send');
    this.add(button);
  }

  onSubmit(callback) {
    super.onSubmit((event) => {
      event.preventDefault();

      const char = this.charInput.getValue();

      callback(char);
    });
  }
}
