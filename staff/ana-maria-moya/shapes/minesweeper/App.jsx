function App() {

    const matriz = new Array(8).map(() => new Array(8));

    const board = matrix.map((row) =>
    row.map(() => {
        const cell = {
            isBomb: false,
            isClicked: false,
            bombsAside: 0
        };
    })
);

const [board. setBoard] = useState(initialBoard);

return(
    <>
    <header>
        <h1>Minesweeper</h1>
    </header>
    <main>
        
    </main>
    <footer></footer>
    </>
)

}

