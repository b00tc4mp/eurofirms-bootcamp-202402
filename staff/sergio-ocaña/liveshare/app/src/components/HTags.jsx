import HHandler from "./HHandler.jsx"

function HTag({ level = 1, children, className = "" }) {
    const handler = HHandler[level]

    return handler(children, className)
}
export default HTag