

function Form({ children, onSubmit, className = "" }) {

    return (
        <form className={"flex flex-col gap-2 mb-5 " + className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}
export default Form