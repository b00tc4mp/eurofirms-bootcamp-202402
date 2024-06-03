function Hone({ children, className }) {
  return (
    <h1
      className={'text-2xl text-blue-400 font-bold mb-[15px]' + className}
    >
      {children}
    </h1>
  )
}
export default Hone;