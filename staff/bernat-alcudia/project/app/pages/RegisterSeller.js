import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import logic from '../logic';
import { errors, utils } from '../com';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';




const { ContentError, DuplicityError } = errors

function RegisterSeller({ }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()



    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = event => {
        const date = new Date(event.nativeEvent.timestamp)

        setBirthdate(date)
        setShowDatePicker(false)
    }

    const handleRegisterSeller = () => {
        try {
            logic.registerSeller(name, birthdate.toISOString(), email, username, password)
                .then(() => {
                    alert('user registered')
                    navigation.navigate('LoginUser')
                    setName('')
                    setEmail('')
                    setBirthdate('')
                    setUsername('')
                    setPassword('')
                })
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
    };

    const styles = StyleSheet.create({
        view: {
            paddingTop: '20%',
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
        <TextInput style={styles.input} placeholder='name' value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder='email' value={email} onChangeText={setEmail} />

        <TextInput style={styles.input} placeholder='username' value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} onPress={() => setShowDatePicker(true)} placeholder='birthdate' value={birthdate ? utils.formatDate(birthdate) : null} />
        {showDatePicker && (
            <DateTimePicker display='spinner' onChange={handleDateChange} value={birthdate || new Date()} />

        )}
        <TextInput style={styles.input} secureTextEntry={true} placeholder='password' value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleRegisterSeller}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
}

export default RegisterSeller