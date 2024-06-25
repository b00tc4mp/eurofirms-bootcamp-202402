class App extends React.Component {
    constructor() {
        super()

        //INICIAR EL ESTADO DEL TABLERO CON UN ARRAY BLANCO
        const board = new Array(10)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill('white') // HACER QUE TODAS LAS CELDAS SEAN BLANCAS

        // ESTADO INICIAL DEL TABLERO
        this.state = {
            board,
            turn: 0,
            selectedColor: 'white' // COLOR POR DEFECTO
        }
    }
    // METODO PARA MANEJAR EL COLOR EN EL TABLERO
    play(row, column) {
        const { board, turn, selectedColor } = this.state;

        // ACTUALIZAR EL TABLERO CON EL BOTON ACTUALIZADO
        const newBoard = board.map((rowArray, i) =>
            rowArray.map((cell, j) => {
                if (i === row && j === column) {
                    return selectedColor; // CAMBIAR EL COLOR DE LA CELDA SELECCIONADA
                } else {
                    return cell;
                }
            })
        );
        // ACTUALIZAR EL ESTADO DEL TABLERO CON EL COLOR 
        this.setState({ board: newBoard, turn: turn + 1 });
    }

    // METODO PARA SELECCIONAR EL TABLERO
    selectColor(color) {
        this.setState({ selectedColor: color });
    }

    resetColors() {
        const { board } = this.state;
        const newBoard = board.map(row => row.map(() => 'white'));
        // METODO QUE USAMOS PARA ESTABLECER TODAS LAS CELDAS A BLANCO
        this.setState({ board: newBoard });
    }

    render() {
        const { board } = this.state;

        return (
            <>
                <header>
                    {/* ESTA ES LA PARTE DE LA CABEZERA A LA QUE LE ASIGNO EL RAINBOW */}
                    <marquee>
                        <span style={{ color: 'blue' }}>P</span>
                        <span style={{ color: 'green' }}>i</span>
                        <span style={{ color: 'red' }}>x</span>
                        <span style={{ color: 'orange' }}>e</span>
                        <span style={{ color: 'purple' }}>l</span>
                        <span style={{ color: 'teal' }}> </span>
                        <span style={{ color: 'yellow' }}>A</span>
                        <span style={{ color: 'pink' }}>r</span>
                        <span style={{ color: 'brown' }}>t</span>
                        <span style={{ color: 'yellow' }}> </span>
                        <span style={{ color: 'blue' }}>B</span>
                        <span style={{ color: 'green' }}>y</span>
                        <span style={{ color: 'yellow' }}> </span>
                        <span style={{ color: 'red' }}>D</span>
                        <span style={{ color: 'orange' }}>a</span>
                        <span style={{ color: 'purple' }}>v</span>
                        <span style={{ color: 'teal' }}> i</span>
                        <span style={{ color: 'yellow' }}>d</span>
                    </marquee>
                </header>
                <main>
                    {/* PALETA DE LOS COLORES PARA SELECCIONAR COMO BOTONES */}
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

                    {/* Intento de David , Ana y Javier */}
                    {/* <section> */}
                    {/* <button onClick={() => this.fill('white')}>Reset</button> */}
                    {/* <button className="buttonReset" onClick={this.board.length.fill('white')}>Reset</button> */}
                    {/* <button className="reset" onClick={() => { board.reset() }}></button> */}

                    {/* </section> */}

                    {/* BOTON PARA REINICIAR EL TABLERO */}
                    <section>
                        <button onClick={() => this.resetColors()}>Reset</button>
                    </section>

                </main>
                <footer></footer>
            </>
        )
    }
}
// CON ROOT RENDERIZAMOS EL TABLERO 
ReactDOM.render(<App />, document.getElementById('root'));