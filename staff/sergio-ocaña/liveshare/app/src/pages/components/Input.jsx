function Input({ type = text, id, defaultValue }) {
    return <input className="border-b-2 min-h-6 border-black" type={type} id={id} defaultValue={defaultValue} />
}
export default Input