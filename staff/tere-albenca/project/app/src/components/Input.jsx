function Input({className, type='text', placeholder, id}){
    return(
        <input 
        type={type}
        id={id} 
        placeholder = {placeholder}
        className={"w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[#ececec]" + className}
        />
    )

}
export default Input