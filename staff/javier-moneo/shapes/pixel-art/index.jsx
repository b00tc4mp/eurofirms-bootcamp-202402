class App extends React.Component {
  constructor() {
    super();

    const board = new Array(50);
    const colorDefault = '#0000ff';

    for (let i = 0; i < board.length; i++)
      board[i] = new Array(board.length).fill(colorDefault);

    this.state = {
      board,
      turn: 0,
      color: '#000000',
      colorDefault,
    };
  }

  playColor(row, column) {
    console.log('click');
    const prevBoard = this.state.board;
    const colorDefault = this.state.colorDefault;
    const color = this.state.color;

    let reg = /^#[0-9A-F]{6}$/i;
    if (!reg.test(color)) {
      alert('Error: el color no es válido');
      return;
    }

    const board = [];
    for (let i = 0; i < prevBoard.length; i++)
      board[i] = new Array(prevBoard[0].length).fill(colorDefault);

    for (const i in prevBoard)
      for (const j in prevBoard[i]) board[i][j] = prevBoard[i][j];

    board[row][column] = color;

    this.setState({ board });
  }

  updateInputColor(event) {
    const color = event.target.value;

    this.setState({ color });
  }

  render() {
    const board = this.state.board;

    return (
      <>
        <header>
          <h1>Pixel Art</h1>
        </header>
        <main>
          <section id="section-input-color">
            <label for="color">Introduce un color en hexadecimal</label>
            <input
              id="input-color"
              type="text"
              name="color"
              value={this.state.color}
              onChange={(event) => this.updateInputColor(event)}
            />
          </section>
          <section
            className="board"
            style={{
              gridTemplateColumns: `repeat(${board.length}, 1fr)`,
              gridTemplateRows: `repeat(${board.length}, 1fr)`,
            }}
          >
            {board
              .map((row, i) =>
                row.map((column, j) => (
                  <div
                    className="cell"
                    onClick={() => this.playColor(i, j)}
                    style={{ backgroundColor: board[i][j] }}
                  >
                    {/* {board[i][j]} */}
                  </div>
                ))
              )
              .flat(Infinity)}
          </section>
        </main>
        <footer></footer>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
