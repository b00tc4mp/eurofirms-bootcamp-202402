import Input from './Input'
import Label from './Label'

function LabelInput({ text, id, type }) {
    return <>
        <Label text={text} htmlFor={id} />
        <Input id={id} type={type} />
    </>

}
export default LabelInput
