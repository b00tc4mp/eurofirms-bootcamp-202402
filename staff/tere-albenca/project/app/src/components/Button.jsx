function Button({ children, className = '', type, onClick }) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={'w-full p-1 text-base rounded-xl border-0 bg-[#00929E] hover:bg-[#25676D] text-white self-center mb-1 ' + className}
    >
      {children}
    </button>
  )
}
export default Button;
