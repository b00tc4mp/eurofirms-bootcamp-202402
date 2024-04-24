function HTag({ level = 1, children, className = "" }) {
    if (level === 1)
        return <h1 className="px-[10px] text-[cornflowerblue] font-bold text-2xl text-center mb-10">{children} </h1>

    if (level === 2)
        return <h2 className={"font-bold text-[cornflowerblue] " + className}>{children}</h2>
    if (level === 3)
        return <h3 className={"font-bold text-[cornflowerblue]" + className}>{children}</h3>
}
export default HTag