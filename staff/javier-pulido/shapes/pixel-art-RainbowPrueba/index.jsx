class App extends React.Component {
    constructor() {
        super();
        // Inicializa el estado del tablero con un array de 10x10 lleno de (blanco)
        const board = new Array(10);

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill('white'); // Inicialmente, todas las celdas son blancas

        // Estado inicial con el tablero, el turno y el color seleccionado
        this.state = {
            board,
            turn: 0,
            selectedColor: 'white', // Color por defecto
            currentIndex: 0 // Índice para el cambio de color de las letras
        };
    }

    // Método para manejar el clic en una celda del tablero
    play(row, column) {
        const { board, turn, selectedColor } = this.state;

        // Crea un nuevo tablero con el color actualizado en la celda clicada
        const newBoard = board.map((rowArray, i) =>
            rowArray.map((cell, j) => {
                if (i === row && j === column) {
                    return selectedColor; // Cambiar el color de la celda seleccionada
                } else {
                    return cell;
                }
            })
        );
        // Actualiza el estado con el nuevo tablero y el turno incrementado
        this.setState({ board: newBoard, turn: turn + 1 });
    }

    // Método para seleccionar un color
    selectColor(color) {
        this.setState({ selectedColor: color });
    }

    // Método para resetear los colores a blanco
    resetColors() {
        const { board } = this.state;
        const newBoard = board.map(row => row.map(() => 'white')); // Establece todas las celdas en blanco
        this.setState({ board: newBoard });
    }

    componentDidMount() {
        this.intervalId = setInterval(this.changeColors.bind(this), 500); // Cambia de color cada segundo
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    changeColors() {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % 9 // Cambia al siguiente color en el array
        }));
    }

    render() {
        const { board, currentIndex } = this.state;
        const letters = "Pixel Art".split(""); // Divide la palabra en letras
        const colors = ['blue', 'green', 'red', 'orange', 'purple', 'teal', 'yellow', 'pink', 'brown'];

        return (
            <>
                <header>
                    <marquee>
                        {letters.map((letter, index) => (
                            <span key={index} style={{ color: colors[(currentIndex + index) % 9] }}>{letter}</span>
                        ))}
                    </marquee>
                </header>

                <main>
                    <div id="color-picker">
                        <button onClick={() => this.selectColor('red')} style={{ backgroundColor: 'red' }}></button>
                        <button onClick={() => this.selectColor('yellow')} style={{ backgroundColor: 'yellow' }}></button>
                        <button onClick={() => this.selectColor('blue')} style={{ backgroundColor: 'blue' }}></button>
                        <button onClick={() => this.selectColor('orange')} style={{ backgroundColor: 'orange' }}></button>
                        <button onClick={() => this.selectColor('pink')} style={{ backgroundColor: 'pink' }}></button>
                        <button onClick={() => this.selectColor('black')} style={{ backgroundColor: 'black' }}></button>
                        <button onClick={() => this.selectColor('white')} style={{ backgroundColor: 'white' }}></button>

                    </div>
                    <section className="board" style={{
                        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                        gridTemplateRows: `repeat(${board.length}, 1fr)`
                    }}>
                        {board.map((row, i) => row.map((cellColor, j) =>
                            <div
                                className="cell"
                                key={`${i}-${j}`}
                                onClick={() => this.play(i, j)}
                                style={{ backgroundColor: cellColor }}>
                            </div>
                        )).flat(Infinity)}
                    </section>

                    {/* Botón para resetear todos los colores del tablero a blanco */}
                    <section>
                        <button onClick={() => this.resetColors()}>Reset</button>
                    </section>

                </main>
                <footer></footer>
            </>
        );
    }
}

// Renderiza la aplicación en el elemento con id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
