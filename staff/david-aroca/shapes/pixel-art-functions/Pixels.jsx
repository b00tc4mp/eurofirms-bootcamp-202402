function Pixels(props) {
    console.debug('Pixels render')

    return <section className="pixels" style={{
        gridTemplateColumns: `repeat(${props.pixels.length}, 1fr)`,
        gridTemplateRows: `repeat(${props.pixels.length}, 1fr)`
    }
    }>
        {
            props.pixels.map((row, i) => row.map((column, j) =>
                <Pixel
                    key={`${i}-${j}`}
                    color={props.pixels[i][j]}
                    onClick={() => props.onPixelClick(i, j)}
                />)).flat(Infinity)
        }
    </section>

}