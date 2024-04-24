function Button({ type = "", onClick, className = "", children }) {
    return <button className={"rounded-[10px] border-w-[1px] px-[10px] max-w- self-end " + className} onClick={onClick} type={type}>
        {children}
    </button>
}
export default Button