class App extends React.Component {
    //el constructor inicia el tablero y dos propiedades en el estado
    //el color seleccionado y resetear el juego
    constructor() {
        super()

        const board = new Array(10)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(10).fill('gray')

        this.state = {
            board,
            selectedColor: 'gray'
        }
        //.bind sirve para enlazar correctamente 
        //el contexto this con el componente de app
        this.resetGame = this.resetGame.bind(this);
        this.selectColor = this.selectColor.bind(this);
    }

    //el metodo play es para cambiar el color de las celdas
    play(row, column) {
        const board = this.state.board.map(row => [...row]);
        const selectedColor = this.state.selectedColor;

        board[row][column] = selectedColor;
        //para actualizar el estado del tablero
        this.setState({ board });
    }

    //esto resetea el tablero
    resetGame() {
        //.fill rellena todo el array de valor null
        //.map crea un nuevo array y lo rellena de gris
        const board = new Array(10).fill(null).map(() => new Array(10).fill('gray'));
        this.setState({ board });
    }

    selectColor(color) {
        this.setState({ selectedColor: color });
    }

    //para renderizar la interfaz, con todas las partes del jeugo
    render() {
        const board = this.state.board;

        return (
            <>
                <header><div>PIXEL ART</div></header>
                <main>
                    <section className="board" style={{
                        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                        gridTemplateRows: `repeat(${board.length}, 1fr)`
                    }}>
                        {board.map((row, i) => row.map((color, j) =>
                            <div
                                key={`${i}-${j}`}
                                className="cell"
                                onClick={() => this.play(i, j)}
                                style={{ backgroundColor: color }}
                            />
                        )).flat()}
                    </section>
                    <section className="palette">
                        <button className="redButton" onClick={() => this.selectColor('red')}>Red</button>
                        <button className="pinkButton" onClick={() => this.selectColor('pink')}>Pink</button>
                        <button className="purpleButton" onClick={() => this.selectColor('purple')}>Purple</button>
                        <button className="blueButton" onClick={() => this.selectColor('blue')}>Blue</button>
                        <button className="greenButton" onClick={() => this.selectColor('green')}>Green</button>
                        <button className="yellowButton" onClick={() => this.selectColor('yellow')}>Yellow</button>
                        <button className="orangeButton" onClick={() => this.selectColor('orange')}>Orange</button>
                    </section>
                </main>
                <footer>
                    <button onClick={this.resetGame}>NEW PLAY</button>
                </footer>
            </>
        );
    }
}

//renderizar el dom y la app
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)