function Button({ children, className = '', type, onClick}) {
  
    return (
        <button
        type={type}
        onClick={onClick}
        className={"w-full p-1 text-base rounded-xl border-0 bg-[#007bff] hover:bg-[#0056b3] text-white self-center mb-1 " + className}
      >
        {children}
      </button>
    )
  }
  export default Button;
  