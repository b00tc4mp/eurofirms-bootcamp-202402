const title = React.createElement('h1', { children: 'hola react' })

const userInput = React.createElement('input', { placeholder: 'username' })
const passInput = React.createElement('input', { type: 'password', placeholder: 'password' })
const submitButton = React.createElement('button', { type: 'submit', children: 'Login' })
const loginForm = React.createElement('form', { children: [userInput, passInput, submitButton] })

const frameworks = ['React', 'Angular', 'Svelte', 'Vue', 'Next', 'Astro']
const listItems = frameworks.map(framework => React.createElement('li', { children: framework }))
const list = React.createElement('ul', { children: listItems })


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render([title, loginForm, list])