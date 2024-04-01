
class App extends React.Component{
    constructor(){
        super()

        const board = new Array(10);

        for(let i=0;i < board.length;i++){

            //board[i] = [0, 0, 0]
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
        const board = this.state.board.map(row => [...row]);

        console.log("click");
        board[row][column] = changeColor;
        this.setState({board});
    }

    changeColor(color){
        /* if(color == "blue"){
            return "#3333cc";
        }
        else if(id == "green"){
            return "#00cc00";
        }
        else if(id == "yellow"){
            return "#fff00";
        }
        else if(id == "red"){
            return "#e60000";
        }
        else
            return "#b3b3cc"; */
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
                            
                    </section>
                    <section class="float-left">
                        <h2>Pinta celda</h2>
                        <button className="blue" class="azul" onClick={() => this.changeColor("blue")}>Azul</button><br/>
                        <button className="green" class="verde" onClick={() => this.changeColor("green")}>Verde</button><br/>
                        <button className="yellow" class="amarillo" onClick={() => this.changeColor("yellow")}>Amarillo</button><br/>
                        <button className="red" class="rojo" onClick={() => this.changeColor("red")}>Rojo</button>
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