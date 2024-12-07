const title = <h1 className="title">hola react 1</h1>

const loginForm = <form>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button type="submit">Login</button>
</form>

const frameworks = ['React', 'Angular', 'Svelte', 'Vue', 'Next', 'Astro']
const list = <ul>{frameworks.map(framework => <li>{framework}</li>)}</ul>


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render([title, loginForm, list])