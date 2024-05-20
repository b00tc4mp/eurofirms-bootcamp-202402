import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import logic from "../logic";
import { errors } from "../com";
import { useNavigation } from '@react-navigation/native';
import Products from "../components/Products";


const { ContentError, MatchError } = errors




function Home() {
    const [user, setUser] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)

    const navigation = useNavigation()


    useEffect(() => {
        try {
            logic.retrieveUser() //Return Users
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else
                        feedback = 'sorry,there was an error,please try again later'


                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry,there was an error,please try again later'

            alert(feedback)
        }
    }, [])

    const handleLogout = () => {
        logic.logoutUser()

        navigation.navigate('LoginUser')
    }


    return <ScrollView>
        <Button title="Logout" onPress={handleLogout}></Button>
        <Products stamp={''} />

    </ScrollView>
}

export default Home