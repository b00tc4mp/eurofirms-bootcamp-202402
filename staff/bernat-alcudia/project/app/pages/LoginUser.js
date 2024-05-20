import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { errors } from '../com';

import logic from "../logic";

const { ContentError, MatchError } = errors



function LoginUser() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()


    const handleSubmit = () => {

        try {
            logic.loginUser(username, password)
                .then(() => navigation.navigate('Home'))
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
    }

    const handleRegisterSeller = () => {
        navigation.navigate('RegisterSeller')
    }
    const handleRegisterBuyer = () => {
        navigation.navigate('RegisterBuyer')
    }


    return <View>
        <TextInput placeholder="username" value={username} onChangeText={setUsername} />
        <TextInput secureTextEntry={true} placeholder="password" value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleSubmit}>Login</Button>
        <Button title="Register Seller" onPress={handleRegisterSeller} ></Button>
        <Button title="Register Buyer" onPress={handleRegisterBuyer} ></Button>
    </View>
}

export default LoginUser