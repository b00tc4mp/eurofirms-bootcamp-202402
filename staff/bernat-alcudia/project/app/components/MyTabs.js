import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import CreateProduct from './CreateProduct';
import RetrieveSavedProducts from './RetrieveSavedProducts';
import React, { useState, useEffect } from 'react';
import logic from '../logic';

const Tab = createBottomTabNavigator()

function MyTabs() {
    const [user, setUser] = useState()
    useEffect(() => {
        try {
            if (!logic.isUserLoggedIn()) {
                navigation.navigate('LoginUser')
                return
            }
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

    return (
        <Tab.Navigator
            screenOptions={{ tabBarActiveTintColor: 'purple', tabBarInactiveTintColor: 'grey' }}
        >
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
            {logic.getLoggedInUserRole() === 'seller' && <Tab.Screen name='CreateProduct' component={CreateProduct}></Tab.Screen>}

            <Tab.Screen name='RetrieveSavedProducts' component={RetrieveSavedProducts}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default MyTabs