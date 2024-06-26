const HTagHandler = {
    1: ({ children, className = "" }) => <h1 className={"px-[10px] text-[cornflowerblue] font-bold text-2xl text-center mb-10 " + className}>{children} </h1>,
    2: ({ children, className = "" }) => <h2 className={"font-bold text-[cornflowerblue] " + className}>{children}</h2>,
    3: ({ children, className = "" }) => <h3 className={"font-bold text-[cornflowerblue] " + className}>{children}</h3>
}

function HTag({ level = 1, children, className = "" }) {
    const tag = HTagHandler[level]

    return tag(children, className)
}

export default HTag