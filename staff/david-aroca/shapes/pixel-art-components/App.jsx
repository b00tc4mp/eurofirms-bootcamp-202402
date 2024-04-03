class App extends React.Component {
    constructor() {
        super()

        const pixels = new Array(15)

        for (let i = 0; i < pixels.length; i++)
            pixels[i] = new Array(pixels.length).fill('white')

        this.state = {
            pixels,
            color: 'black'
        }
    }

    paint(row, column) {
        const prevPixels = this.state.pixels

        const newPixels = new Array(prevPixels.length)
        for (let i = 0; i < prevPixels.length; i++)
            newPixels[i] = new Array(prevPixels[0].length).fill('white')

        for (const i in prevPixels)
            for (const j in prevPixels[i])
                newPixels[i][j] = prevPixels[i][j]


        newPixels[row][column] = this.state.color

        this.setState({ pixels: newPixels })
    }

    clear() {
        const prevPixels = this.state.pixels

        const newPixels = new Array(prevPixels.length)
        for (let i = 0; i < prevPixels.length; i++)
            newPixels[i] = new Array(prevPixels[0].length).fill('white')

        this.setState({ pixels: newPixels })
    }

    setColor(color) {
        this.setState({ color })
    }

    render() {
        const pixels = this.state.pixels

        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'black']

        return <>
            <header>
                <h1>Pixel Art By Components</h1>
            </header>
            <main className="main">
                <ColorButtons colors={colors} onColorClick={color => this.setColor(color)} />

                <Pixels pixels={pixels} onPixelClick={(row, col) => this.paint(row, col)} />

                <button onClick={() => this.clear()}>reset</button>
            </main>
            <footer></footer>
        </>
    }
}