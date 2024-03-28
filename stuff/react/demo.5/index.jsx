const title = <h1 className="title">hola react 1</h1>

const loginForm = <form>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button type="submit">Login</button>
</form>

const frameworks = ['React', 'Angular', 'Svelte', 'Vue', 'Next', 'Astro']
const list = <ul>{frameworks.map(framework => <li>{framework}</li>)}</ul>

class Register extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <form>
            <input type="text" placeholder="name" />
            <input type="date" placeholder="birthdate" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Register</button>
        </form>
    }
}

class Logo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <img className="logo" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0003/3169/brand.gif?itok=lF7Q10Sx" />
    }
}

class NavBar extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <nav className="navbar">
            <a href="http://">Home</a>
            <a href="http://">Blog</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
        </nav>
    }
}

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <header className="header">
            <Logo />
            <NavBar />
        </header>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render([title, loginForm, list, new Register().render()])
// root.render([title, loginForm, list, <Register />])
root.render([title, loginForm, list, <Register />, <Header />, <Header />, <Header />])