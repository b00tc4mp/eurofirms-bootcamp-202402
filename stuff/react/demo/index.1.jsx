
class Button extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <button className="Button" onMouseDown={() => console.log('mouse down')} onMouseUp={() => console.log('mouse up')}>{this.props.children}</button>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render([<Button>hola button</Button>])