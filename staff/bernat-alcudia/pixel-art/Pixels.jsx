class Pixels extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <section className="pixels" style={{
            gridTemplateColumns: `repeat(${this.props.pixels.length}, 1fr)`,
            gridTemplateRows: `repeat(${this.props.pixels.length}, 1fr))`
        }
        }>
            {
                this.props.pixels.map((row, i) => row.map((column, j) =>
                    <Pixel
                        key={`${i}-${j}`}
                        color={this.props.pixels[i][j]}
                        onClick={() => this.props.onPixelClick(i, j)}
                    />)).flat(Infinity)
            }

        </section>
    }
}