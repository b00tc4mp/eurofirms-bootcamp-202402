
class App extends React.Component{
    constructor(){
        super()

        const board = new Array(10);

        for(let i=0;i < board.length;i++){

            //board[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            board[i] = new Array(board.length).fill("gray");
        }

        this.state= {

            /*board : [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]*/
            //En JS6 no hace falta poner board : board
            board,
            changeColor : "blue"
        }
        this.changeColor = this.changeColor.bind(this);
    }

    /* getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return '.'
        else return ''
    } */

    play(row, column){

        const changeColor = this.state.changeColor;
        const board = this.state.board.map(row => [...row]);//Siempre se debe poner esto para evitar mutar el array original

        console.log("click");
        board[row][column] = changeColor;
        this.setState({board});
    }

    changeColor(color){
        /*if(color == "blue"){
            board[row][column].style= "background-color : #3333cc";
        }
        else if(color == "green"){
            board[row][column].style= "background-color : #00cc00";
        }
        else if(color == "yellow"){
            board[row][column].style= "background-color : #fff00";
        }
        else if(color == "red"){
            board[row][column].style= "background-color : #e60000";
        }
        else
            board[row][column].style= "background-color : #b3b3cc"; */
        this.setState({changeColor : color});
    }

    render(){

        const board = this.state.board;

        return (
            <>
                <header>
                    <h1>Pixel-art</h1><hr/>
                </header>
                <main>
                    <section className="board" style={{gridTemplateColumns: `repeat(${board.length}, 1fr)`, gridTemplateRows: `repeat(${board.length}, 1fr)`}}>

                        {/* <div className="cell" onClick={() => this.play(0, 0)}>{this.getCellChar(board[0][0])}</div>
                        <div className="cell" onClick={() => this.play(0, 1)}>{this.getCellChar(board[0][1])}</div>
                        <div className="cell" onClick={() => this.play(0, 2)}>{this.getCellChar(board[0][2])}</div>

                        <div className="cell" onClick={() => this.play(1, 0)}>{this.getCellChar(board[1][0])}</div>
                        <div className="cell" onClick={() => this.play(1, 1)}>{this.getCellChar(board[1][1])}</div>
                        <div className="cell" onClick={() => this.play(1, 2)}>{this.getCellChar(board[1][2])}</div>

                        <div className="cell" onClick={() => this.play(2, 0)}>{this.getCellChar(board[2][0])}</div>
                        <div className="cell" onClick={() => this.play(2, 1)}>{this.getCellChar(board[2][1])}</div>
                        <div className="cell" onClick={() => this.play(2, 2)}>{this.getCellChar(board[2][2])}</div>  */}

                        {/* 
                            Si tuviéramos que hacer que el tablero fuera dinámico tendríamos que recorrer las celdas que
                            fueran de esta forma:
                        */}

                        
                            {board.map((row, i) => row.map((color, j) => <div key={`${i}-${j}`} className="cell" 
                             onClick={() => this.play(i, j)} style={{ backgroundColor : color }}/>)).flat()}
                            {/* Cada div tiene que tener un identificador único, por eso le decimos que sea una
                            combinación de la i y la j, separados por un guión. */}
                    </section>
                    <section class="float-left">
                        <h2>Pinta celda</h2>
                        <button className="azul"  onClick={() => this.changeColor("blue")}>Azul</button><br/>
                        <button className="verde"  onClick={() => this.changeColor("green")}>Verde</button><br/>
                        <button className="amarillo" onClick={() => this.changeColor("yellow")}>Amarillo</button><br/>
                        <button className="rojo" onClick={() => this.changeColor("red")}>Rojo</button>
                        {/* <button className="green" class="verde" onClick={(changeColor("green"))}>Verde</button><br/> */}
                    </section>
                </main>
                <footer>
                    <hr/>
                </footer>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);