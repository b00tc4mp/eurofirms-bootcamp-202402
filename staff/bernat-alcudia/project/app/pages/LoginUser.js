import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import { errors } from '../com';

import logic from "../logic";

const { ContentError, MatchError } = errors

const LoginUser = ({ navigation, onUserLoggedIn, onRegisterClick }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    try {
        logic.loginUser(username, password)
            .then(() => onUserLoggedIn())
            .catch(error => {
                console.error(error.message)

                let feedback = error.message

                if (error instanceof TypeError || error instanceof RangeError)
                    feedback = `${feedback},please correct it`
                else if (error instanceof MatchError)
                    feedback = `${feedback},please verify credentials`
                else
                    feedback = 'sorry, there was an error,please try again'

                alert(feedback)
            })
    } catch (error) {
        console.error(error.message)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback},please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback},please verify credentials`
        else
            feedback = 'sorry,there was an error,please try again'

        alert(feedback)
    }

    const handleRegisterClick = () => {
        onRegisterClick()
    }

    return <View>
        <TextInput placeholder="username" value={username} onChangeText={setUsername} />
        <TextInput placeholder="password" value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleSubmit} />
        <Button title="Register Seller" onPress={() => navigation.navigate('RegisterSeller')} />
        <Button title="Register Buyer" onPress={() => navigation.navigate('RegisterBuyer')} />
    </View>
}

export default LoginUser