import Input from './Input'
import Label from './Label'

function LabelInput({ text, id, type = "text", defaultValue = "" }) {
    return <>
        <Label text={text} htmlFor={id} />
        <Input id={id} type={type} defaultValue={defaultValue} />
    </>

}
export default LabelInput
