function h1({ children, className = "" }) {
    return <h1 className={"px-[10px] text-[cornflowerblue] font-bold text-2xl text-center mb-10 " + className}>{children} </h1>
}
function h2({ children, className = "" }) {
    return <h2 className={"font-bold text-[cornflowerblue] " + className}>{children}</h2>
}
function h3({ children, className = "" }) {
    return <h3 className={"font-bold text-[cornflowerblue] " + className}>{children}</h3>
}

const HHandler = {
    1: h1,
    2: h2,
    3: h3
}
export default HHandler