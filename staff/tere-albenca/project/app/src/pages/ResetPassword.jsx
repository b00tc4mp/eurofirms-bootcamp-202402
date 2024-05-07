import logic from "../logic"
import Form from "../components/Form"
import Button from "../components/Button"
import Hone from '../components/Hone.jsx'
import Span from '../components/Span.jsx'
import Input from '../components/Input.jsx'
import { errors } from 'com'
import { useState } from "react"

const { ContentError, TypeError } = errors

function ResetPassword({ onResetPassword, onRegisterClick, onLoginClick }) {

    const [error, setError] = useState(null)

    const errorHandle = (error) => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`

        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please try with another user`

        else
            feedback = 'sorry, there was an error,please try again later'

        let isNameError = false

        const isSurnameError = error.message.includes('surname')
        const isEmailError = error.message.includes('email')
        const isRepeatPasswordError = error.message.includes('password')

        let isNewPasswordError = false


        if (!isRepeatPasswordError) isNewPasswordError = error.message.includes('password')
        if (!isSurnameError) isNameError = error.message.includes('name')

        const anotherError =
            !isNameError &&
            !isSurnameError &&
            !isEmailError &&
            !isNewPasswordError &&
            !isRepeatPasswordError



        setError({
            message: feedback,
            isNameError,
            isSurnameError,
            isEmailError,
            isNewPasswordError,
            isRepeatPasswordError,
            anotherError
        })


    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const surname = form.surname.value
        const email = form.email.value;
        const newpassword = form.newpassword.value;
        const repeatpassword = form.repeatpassword.value;

        try {
            logic.resetPassword(name, surname, email, newpassword, repeatpassword)
                .then(() => onResetPassword())
                .catch(error => {
                    errorHandle(error)
                })

        } catch (error) {
            errorHandle(error)
        }
    }

    const handleRegisterClick = (event) => {
        event.preventDefault();

        onRegisterClick();
    };

    const handleLoginClick = (event) => {
        event.preventDefault();

        onLoginClick();
    };

    return (
        <>
            <div className="flex flex-col justify-center item-center mt-3 mb-1">
                <main className="w-3/5 flex flex-col justify-center item-center mb-8">
                    <Hone className="text-center">RESET PASSWORD</Hone>
                    <Form onSubmit={handleSubmit} className="max-w-md">
                        <div className="container-form">

                            <Input type="text" id="Name" placeholder="name" /><br />
                            {error?.isNameError && <Span></Span>}

                            <Input type="text" id="Surname" placeholder="Surname" /><br />
                            {error?.isSurnameError && <Span></Span>}

                            <Input type="text" id="email" placeholder="Email" /><br />
                            {error?.isEmailError && <Span></Span>}


                            <Htwo className="text-center">NEW PASSWORD</Htwo>


                            <Input type="password" id="newpassword" placeholder="NewPassword" className="" /><br />
                            {error?.isNewPasswordError && <Span></Span>}


                            <Input type="password" id="repeatpassword" placeholder="RepeatPassword" className="" /><br />
                            {error?.isRepeatPasswordError && <Span></Span>}

                            <Button type="submit">Reset</Button>
                            {error?.anotherError && <Span></Span>}
                        </div>
                        <div className="flex justify-center bg-[whitesmoke] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
                            <a id="register" onClick={handleRegisterClick} className="no-underline text-[#25676d] hover:bg-[#25676D]">Register</a>
                            <br />
                        </div>
                    </Form>
                </main>
            </div>
        </>
    );
}
export default ResetPassword;