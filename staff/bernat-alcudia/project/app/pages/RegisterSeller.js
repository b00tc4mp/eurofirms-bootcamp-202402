import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import logic from '../logic';
import { errors } from '/..com';

const { ContentError, DuplicityError } = errors

const RegisterSeller = ({ onUserRegistered, onLoginClick }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    try {
        logic.registerSeller(name, birthdate, email, username, password)
            .then(() => onUserRegistered())
            .catch(error => {
                console.error(error.message)

                let feedback = error.message

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    feedback = `${feedback}, please correct it`
                else if (error instanceof DuplicityError)
                    feedback = `${feedback},please try with another user`
                else
                    feedback = 'sorry,there was an error,please try again later'

                alert(feedback)
            })
    } catch (error) {
        console.error(error.message)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please try with another user`
        else
            feedback = 'sorry, there was an error,please try again later'

        alert(feedback)
    }
    const handleRegisterBuyer = () => {
        onLoginClick()
    };

    return <View>
        <TextInput placeholder="name" value={name} onChangeText={setName} />
        <TextInput placeholder="email" value={email} onChangeText={setEmail} />
        <TextInput placeholder="birthdate" value={birthdate} onChangeText={setBirthdate} />
        <TextInput placeholder="username" value={username} onChangeText={setUsername} />
        <TextInput placeholder="password" value={password} onChangeText={setPassword} />
        <Button title="Register" onPress={handleRegisterBuyer} />
    </View>
}

export default RegisterSeller