import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom'

console.debug(`APP STARTED RUNING ☠(CONECTED TO THE API ${import.meta.env.VITE_API_URL})`)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
)