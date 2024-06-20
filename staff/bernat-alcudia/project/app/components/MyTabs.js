import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import CreateProduct from './CreateProduct';
import RetrieveSavedProducts from './RetrieveSavedProducts';
import SearchProduct from './SearchProducts';
import React, { useState, useEffect, Text } from 'react';
import logic from '../logic';

const Tab = createBottomTabNavigator()

function MyTabs() {
    const [user, setUser] = useState()
    const [searchQuery, setSearchQuery] = useState('')

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

    const handleSearch = searchQuery => {
        setSearchQuery(searchQuery)
    }

    return (
        <Tab.Navigator
            screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'grey', tabBarShowLabel: false }} // headerShown: false
        >
            <Tab.Screen name='Home' children={() => <Home searchQuery={searchQuery} />}
                options={{
                    headerStyle: {
                        height: 80, // Specify the height of your custom header
                    }, headerTitleAlign: 'center', // Center the header title
                    headerTitle: () => <SearchProduct onSearch={handleSearch} />, toBarLabel: 'Home', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />
                }}></Tab.Screen>
            {logic.getLoggedInUserRole() === 'seller' && <Tab.Screen name='CreateProduct' component={CreateProduct} options={{ toBarLabel: 'Home', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle-outline' color={color} size={size} /> }}></Tab.Screen>}

            <Tab.Screen name='RetrieveSavedProducts' component={RetrieveSavedProducts} options={{ toBarLabel: 'Home', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='bookmark-multiple' color={color} size={size} /> }}></Tab.Screen>
        </Tab.Navigator >
    );
}

export default MyTabs