// const title = React.createElement('h1', { children: 'hola react' })
// const title = <h1>hola react 1</h1>
// const title = <h1 style= {{ color: 'red' }}>hola react 1</h1>
const title = <h1 className="title">hola react</h1>
const title1 = <h2 className="title1">Hola estoy aprendiendo programacion</h2>


// const userInput = React.createElement('input', { placeholder: 'username })
const userInput = <input type='text' placeholder="username" />
const userLabel = <label htmlFor="user">username</label>
// const passInput = React.createElement('input', { type: 'password', placeholder: 'password' })
const userPassword = <input type="password" placeholder="password" />
// const submitButton = React.createElement('button', { type: 'submit', children: 'Login'})
const submitButton = <button type="submit">Login</button> 
// const loginForm = React.createElement('form', { children: [userInput, passInput, submitButton] })
const loginForm = <form>
     {userLabel}
    {userInput}
    {userPassword}
    {submitButton}
    
</form>

const frameworks = ['React', 'Angular', 'Svelte', 'Vue', 'Next', 'Astro']
// const listItems = frameworks.map(framework => React.createElement('li', { childen: framework }))
const listItems = frameworks.map(framework => React.createElement('li', { children: framework }))
//const  list = React.createElement('ul', { children: listItems }) 
const list = <ul>{listItems}</ul>


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render([title, title1, loginForm, list])

