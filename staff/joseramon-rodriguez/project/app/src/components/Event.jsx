import { useParams } from "react-router-dom"
function Event() {
    let params = useParams()
    return <>
        <h1>HELLO EVENT {params}</h1>
    </>
}