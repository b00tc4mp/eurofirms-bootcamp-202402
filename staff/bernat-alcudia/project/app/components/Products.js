import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import logic from '../logic';

function Products() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState()

    const navigation = useNavigation()




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
    }, [products])

    const handleLogout = () => {
        logic.logoutUser()

        navigation.navigate('LoginUser')
    }

    const handleProductDetail = id => {
        navigation.navigate('ProductDetail', { id: id })
    }


    const handleToggleSavedProduct = (productId) => {
        try {
            logic.toggleSavedProduct(productId)
                .then(() => refreshProducts())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    const handleToggleLikeProduct = (productId) => {
        try {
            logic.toggleLikeProduct(productId)
                .then(() => refreshProducts())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const refreshProducts = () => {
        try {
            logic.retrieveProducts() //I return the products
                .then(products => setProducts(products))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    useFocusEffect(useCallback(() => {
        refreshProducts()
    }, []))

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f0f0f0',
            padding: 30
        },
        productContainer: {
            padding: 20,
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,

        },
        image: {
            width: 350,
            height: 350,
            borderRadius: 15,

        },
        buttonPressIn: {
            transform: [{ scale: 1.00 }]
        },
        button: { justifyContent: 'center' },
        buttonText: { fontSize: 18, textAlign: 'center', color: 'black' }
    });

    return (<>
        <View style={{ paddingLeft: 8, paddingRight: 8, width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={handleLogout}>
                <MaterialCommunityIcons name='door' size={25} color={'black'} />
            </TouchableOpacity>
        </View>

        <ScrollView>
            {products.map(product => {
                const isLiked = product.likes.includes(logic.getLoggedInUserId())
                const isSaved = user?.saved.includes(product.id)
                return (
                    <View style={styles.productContainer} key={product.id} >
                        <Image style={styles.image} source={{ uri: 'data:image/png;base64,' + product.images[0] }} onError={(error) => console.error('Error loading image:', error)} />
                        <View style={{ padding: 8 }}>
                            <TouchableOpacity style={{ paddingTop: 5 }} onPress={() => handleProductDetail(product.id)}>
                                <Text >{product.title}</Text>
                            </TouchableOpacity>
                            <Text >{product.brand}</Text>
                            <Text >Price: ${product.price}</Text>
                            <Text>State: {product.state}</Text>
                        </View>
                        <View style={{ padding: 8, flexDirection: 'row', flex: 1, width: '100%', height: 40, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={isLiked ? styles.button : styles.buttonPressIn} onPressOut={() => handleToggleLikeProduct(product.id)} >
                                <MaterialCommunityIcons name={isLiked ? 'heart' : 'heart-outline'} size={25} color={'red'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={isSaved ? styles.button : styles.buttonPressIn} onPressOut={() => handleToggleSavedProduct(product.id)} >
                                <MaterialCommunityIcons name={isSaved ? 'bookmark' : 'bookmark-outline'} size={25} color={'blue'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </ScrollView >
    </>

    );
};

export default Products