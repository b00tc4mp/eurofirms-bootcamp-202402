function Button({ onClick, id, className = '', children, type = 'button' }) {
    return <button type={type} className={'px-3  border border-black' + className} onClick={onClick} id={id}>{children}</button>

}

export default Button