function Htwo({ children, className = '', type, onClick }) {

  return (
    <h1
      type={type}
      onClick={onClick}
      className={'text-base text-[#00929E] font-bold mb-[12px]' + className}
    >
      {children}
    </h1>
  )
}
export default Htwo;
