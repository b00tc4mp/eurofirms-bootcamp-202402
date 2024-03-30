class App extends React.Component {
    constructor() {
        super()

        const board = new Array(10)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill('#ffffff') // Inicialmente, todas las celdas son blancas

        this.state = {
            board,
            turn: 0,
            selectedColor: '#000000' // Color por defecto
        }
    }

    getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    play(row, column) {
        const { board, turn, selectedColor } = this.state;

        const newBoard = board.map((rowArray, i) =>
            rowArray.map((cell, j) => {
                if (i === row && j === column) {
                    return selectedColor; // Cambiar el color de la celda seleccionada
                } else {
                    return cell;
                }
            })
        );

        this.setState({ board: newBoard, turn: turn + 1 });
    }

    selectColor(color) {
        this.setState({ selectedColor: color });
    }

    render() {
        const { board } = this.state;

        return (
            <>
                <header>Pixel Art</header>
                <main>
                    <div id="color-picker">
                        <button onClick={() => this.selectColor('#ff0000')} style={{ backgroundColor: '#ff0000' }}></button>
                        <button onClick={() => this.selectColor('#00ff00')} style={{ backgroundColor: '#00ff00' }}></button>
                        <button onClick={() => this.selectColor('#0000ff')} style={{ backgroundColor: '#0000ff' }}></button>
                        <button onClick={() => this.selectColor('orange')} style={{ backgroundColor: 'orange' }}></button>
                        <button onClick={() => this.selectColor('pink')} style={{ backgroundColor: 'pink' }}></button>
                        <button onClick={() => this.selectColor('black')} style={{ backgroundColor: 'black' }}></button>
                        

                        {/* Agrega más botones con diferentes colores según tus necesidades */}
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
                </main>
                <footer></footer>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
