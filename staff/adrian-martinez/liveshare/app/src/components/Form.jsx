function Form ({children, className, onSubmit}){
    return (
        <form onSubmit={onSubmit} className={"flex flex-col " + className}>
            {children}
        </form>
    )
}

export default Form