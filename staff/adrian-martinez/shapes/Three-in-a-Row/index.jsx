
class App extends React.Component{
    constructor(){
        super()

        const board = new Array(3)

        for(let i=0;i < board.length;i++){

            //board[i] = [0, 0, 0]
            board[i] = new Array(board.length).fill(0);
        }

        this.state= {

            /*board : [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]*/
            //En JS6 no hace falta poner board : board
            board,
            turn : 0
        }
    }

    getCellChar(value){
        if(value === 1){
            return "X";
        }
        else if(value === 2){
            return "O";
        }
        else
            return "";
    }

    play(row, column){

        console.log("click");
        
        const prevBoard = this.state.board;
        const board = [];

        for(let i=0;i < prevBoard.length;i++){
0
            board[i] = new Array(prevBoard[0].length).fill(0);

            /*Lo que hace el for() internamente:
            board[0][0] = prevBoard[0][0]
            board[0][1] = prevBoard[0][1]
            board[0][2] = prevBoard[0][2]

            board[1][0] = prevBoard[1][0]
            board[1][1] = prevBoard[1][1]
            board[1][2] = prevBoard[1][2]

            board[2][0] = prevBoard[2][0]
            board[2][1] = prevBoard[2][1]
            board[2][2] = prevBoard[2][2]
            */
        }
        //El único bucle en donde puede ir const
        for(const i in prevBoard){
            for(const j in prevBoard[i]){
                board[i][j] = prevBoard[i][j];
            }
        }

        //Variable para saber el turno del jugador
        const turn = this.state.turn;

        if(turn % 2 === 0){
            board[row][column] = 1;
        }
        else
            board[row][column] = 2;

        this.setState({board, turn: turn + 1});
    }

    render(){

        const board = this.state.board;

        return (
            <>
                <header>
                    <h1>Tres en Raya</h1><hr/>
                </header>
                <main>
                    <section className="board" style={{gridTemplateColumns: `repeat(${board.length}, 1fr)`, gridTemplateRows: `repeat(${board.length}, 1fr)`}}>

                        <div className="cell" onClick={() => this.play(0, 0)}>{this.getCellChar(board[0][0])}</div>
                        <div className="cell" onClick={() => this.play(0, 1)}>{this.getCellChar(board[0][1])}</div>
                        <div className="cell" onClick={() => this.play(0, 2)}>{this.getCellChar(board[0][2])}</div>

                        <div className="cell" onClick={() => this.play(1, 0)}>{this.getCellChar(board[1][0])}</div>
                        <div className="cell" onClick={() => this.play(1, 1)}>{this.getCellChar(board[1][1])}</div>
                        <div className="cell" onClick={() => this.play(1, 2)}>{this.getCellChar(board[1][2])}</div>

                        <div className="cell" onClick={() => this.play(2, 0)}>{this.getCellChar(board[2][0])}</div>
                        <div className="cell" onClick={() => this.play(2, 1)}>{this.getCellChar(board[2][1])}</div>
                        <div className="cell" onClick={() => this.play(2, 2)}>{this.getCellChar(board[2][2])}</div> 

                        {/* 
                            Si tuviéramos que hacer que el tablero fuera dinámico tendríamos que recorrer las celdas que
                            fueran de esta forma:
                        */}
                        
                            {/* { board.map((row, i) => row.map((column, j) => <div className="cell" 
                             onClick={() => this.play(i, j)}>{this.getCellChar(board[i][j])}</div>)) .flat(Infinity)} */}
                            
                    </section>
                </main>
                <footer>
                    <h3>Todos los derechos reservados</h3>
                </footer>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);