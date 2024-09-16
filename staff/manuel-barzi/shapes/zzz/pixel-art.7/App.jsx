class App extends React.Component {
    constructor() {
        console.debug('App constructor')

        super()

        const pixels = new Array(10)

        for (let i = 0; i < pixels.length; i++)
            pixels[i] = new Array(pixels.length).fill('white')

        this.state = {
            pixels,
            color: 'black'
        }
    }

    paint(row, column) {
        console.debug('App paint')

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
        console.debug('App clear')

        const prevPixels = this.state.pixels

        const newPixels = new Array(prevPixels.length)
        for (let i = 0; i < prevPixels.length; i++)
            newPixels[i] = new Array(prevPixels[0].length).fill('white')

        this.setState({ pixels: newPixels })
    }

    setColor(color) {
        console.debug('App setColor')

        this.setState({ color })
    }

    doRender() {
        console.debug('App doRender')

        const pixels = this.state.pixels
        const color = this.state.color

        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'black']

        return <>
            <header>
                <h1>Pixel Art</h1>
            </header>
            <main className="main">
                <ColorButtons color={color} colors={colors} onColorClick={color => this.setColor(color)} />

                <Pixels pixels={pixels} onPixelClick={(row, col) => this.paint(row, col)} />

                <button onClick={() => this.clear()}>reset</button>
            </main>
            <footer></footer>
        </>
    }

    render() {
        // console.debug('App before render', new Date().toISOString())
        const before = window.performance.now()

        const rendered = this.doRender()

        // console.debug('App after render', new Date().toISOString())
        const after = window.performance.now()

        const renderTime = after - before

        console.debug('App render time (in millis)', renderTime)

        return rendered
    }
}