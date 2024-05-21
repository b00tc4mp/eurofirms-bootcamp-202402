import { errors } from 'com'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import logic from '../logic'
import Form from './Form'
import Input from './Input'

const { MatchError, ContentError } = errors

function Wallet({ onWalletModified, user }) {
    const [operation, setOperation] = useState('add')
    const [error, setError] = useState(null)

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please input correct data`
        else feedback = 'sorry there was an error, please try again later'

        const isAmountError = error.message.includes('wallet')


        const isAnotherError = !isAmountError

        setError({ message: feedback, isAmountError, isAnotherError })
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const amount = Number(form.amount.value)

        if (operation === 'add') {
            try {
                console.log('add to wallet', amount)
                logic.addCreditToWallet(amount)
                    .catch(error => errorHandler(error))
                    .then(() => {
                        console.log('successfully added credit to wallet -> navigate to home')

                        onWalletModified()
                    })

            } catch (error) {
                errorHandler(error)
            }

        } else if (operation === 'remove') {
            try {
                console.log('remove from wallet', amount)
                logic.substractCreditFromWallet(amount)
                    .then(() => {
                        console.log('successfully substracted from wallet -> navigate to home')

                        onWalletModified()
                    })
                    .catch(error => {
                        errorHandler(error)
                    })
            } catch (error) {
                errorHandler(error)
            }
        }

    }

    const handleClick = operation => {
        console.log(operation)
        setOperation(operation)
    }
    return <>
        <h3>Your wallet = {user?.wallet}</h3>
        <Button onClick={() => handleClick('remove')}>Remove from wallet</Button>
        <Button onClick={() => handleClick('add')}>Add to wallet</Button>
        {operation === 'add' ? <Form onSubmit={handleSubmit}>
            <label htmlFor='amount'>Amount</label>
            <Input type='text' id='amount'></Input>
            {error?.isAmountError && <span className='text-red-500'>{error.message}</span>}


            <Button type='submit'>Add to wallet</Button>
            {error?.isAnotherError && <span className='text-red-500'>{error.message}</span>}

        </Form> :
            <Form onSubmit={handleSubmit}>
                <label htmlFor='amount'>Amount</label>
                <Input type='text' id='amount'></Input>
                {error?.isAmountError && <span className='text-red-500'>{error.message}</span>}


                <Button type='submit'>Remove from wallet</Button>
                {error?.isAnotherError && <span className='text-red-500'>{error.message}</span>}

            </Form>
        }

    </>
}

export default Wallet