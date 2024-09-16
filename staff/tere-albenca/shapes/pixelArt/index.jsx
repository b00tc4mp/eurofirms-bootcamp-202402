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

        const colorButtons = ['blueviolet','darkred','lightgreen','red','pink','gold','purple','deepskyblue','orange','black','yellow','coral', 'olive', 'whitesmoke','blue', 'dimgray', 'navy', 'orangered']

        return (
            <>
                <header><div>PIXEL ART</div></header>
                <main>
                    <section className="board" style={{
                        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                        gridTemplateRows: `repeat(${board.length}, 1fr)`
                    }}>
                        {board.map((row, i) => row.map((color, j) =><div key={`${i}-${j}`} className="cell" onClick={() => this.play(i, j)} style={{ backgroundColor: color }}
                        />
                        )).flat()}
                    </section>
                    <section className="palette">
                        {colorButtons.map(color => <button onClick={()=> this.selectColor(color)} style={{backgroundColor: color}}> </button>)}
                        {/* <button className="redButton" onClick={() => this.selectColor('red')}></button>
                        <button className="pinkButton" onClick={() => this.selectColor('pink')}></button>
                        <button className="purpleButton" onClick={() => this.selectColor('purple')}></button>
                        <button className="blueButton" onClick={() => this.selectColor('blue')}></button>
                        <button className="greenButton" onClick={() => this.selectColor('green')}></button>
                        <button className="yellowButton" onClick={() => this.selectColor('yellow')}></button>
                        <button className="navyButton" onClick={() => this.selectColor('navy')}></button>
                        <button className="fuchsiaButton" onClick={() => this.selectColor('fuchsia')}></button>
                        <button className="limeButton" onClick={() => this.selectColor('lime')}></button>
                        <button className="blackButton" onClick={() => this.selectColor('black')}></button>
                        <button className="aquaButton" onClick={() => this.selectColor('aqua')}></button>
                        <button className="maroonButton" onClick={() => this.selectColor('maroon')}></button>
                        <button className="tealButton" onClick={() => this.selectColor('teal')}></button>
                        <button className="oliveButton" onClick={() => this.selectColor('olive')}></button>
                        <button className="orangeButton" onClick={() => this.selectColor('orange')}></button>
                        <button className="chartreuseButton" onClick={() => this.selectColor('chartreuse')}></button>
                        <button className="coralButton" onClick={() => this.selectColor('coral')}></button>
                        <button className="bluevioletButton" onClick={() => this.selectColor('blueviolet')}></button>
                        <button className="orangetwoButton" onClick={() => this.selectColor('orangetwo')}></button>
                        <button className="darkredButton" onClick={() => this.selectColor('darkred')}></button>
                        <button className="darkslategrayButton" onClick={() => this.selectColor('darkslategray')}></button>
                        <button className="deepskyblueButton" onClick={() => this.selectColor('deepskyblue')}></button>
                        <button className="darkolivegreenButton" onClick={() => this.selectColor('darkolivegreen')}></button>
                        <button className="goldButton" onClick={() => this.selectColor('gold')}></button>
                        <button className="dimgreyButton" onClick={() => this.selectColor('dimgrey')}></button>
                        <button className="lightgreenButton" onClick={() => this.selectColor('lightgreen')}></button>
                        <button className="indigoButton" onClick={() => this.selectColor('indigo')}></button>
                        <button className="goldenrodButton" onClick={() => this.selectColor('goldenrod')}></button>
                        <button className="firebrickButton" onClick={() => this.selectColor('firebrick')}></button>
                        <button className="greenyellowButton" onClick={() => this.selectColor('greenyellow')}></button> */}


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