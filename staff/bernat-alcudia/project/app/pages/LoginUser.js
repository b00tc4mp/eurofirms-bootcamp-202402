import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { errors } from '../com';

import logic from '../logic';

const { ContentError, MatchError } = errors



function LoginUser() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()


    const handleSubmit = () => {

        try {
            logic.loginUser(username, password)
                .then(() => {
                    setUsername('')
                    setPassword('')
                    navigation.navigate('tabs')
                })
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

    const styles = StyleSheet.create({
        view: {
            paddingTop: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
        },
        input: {
            width: '80%',
            padding: 10,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
        },
        button: {
            width: '80%',
            padding: 15,
            backgroundColor: 'black',
            borderRadius: 5,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center'
        },
    })

    return <View style={styles.view}>
        <TextInput style={styles.input} placeholder='username' value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder='password' value={password} onChangeText={setPassword} />
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterSeller}>
            <Text style={styles.buttonText}>Register Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterBuyer}>
            <Text style={styles.buttonText}>Register Buyer</Text>
        </TouchableOpacity>
    </View>
}

export default LoginUser