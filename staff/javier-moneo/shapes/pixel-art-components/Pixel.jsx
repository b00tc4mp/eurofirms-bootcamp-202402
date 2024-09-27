class Pixel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="pixel"
        style={{ backgroundColor: this.props.color }}
        onClick={() => {
          this.props.onClick();
        }}
      ></div>
    );
  }
}
