import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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

    return <View>
        <TextInput placeholder='name' value={name} onChangeText={setName} />
        <TextInput placeholder='email' value={email} onChangeText={setEmail} />

        <TextInput placeholder='username' value={username} onChangeText={setUsername} />
        <TextInput onPress={() => setShowDatePicker(true)} placeholder='birthdate' value={birthdate ? utils.formatDate(birthdate) : null} />
        {showDatePicker && (
            <DateTimePicker display='spinner' onChange={handleDateChange} value={birthdate || new Date()} />

        )}
        <TextInput secureTextEntry={true} placeholder='password' value={password} onChangeText={setPassword} />
        <Button title='Register' onPress={handleRegisterSeller}></Button>
    </View>
}

export default RegisterSeller