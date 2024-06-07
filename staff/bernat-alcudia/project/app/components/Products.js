import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';


import logic from '../logic';

function Products() {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState()
    const [isLikePressed, setIsLikePressed] = useState(false)

    const [isSavedPressed, setIsSavedPressed] = useState(false)



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


    const handleCreateProduct = () => {
        navigation.navigate('CreateProduct')
    }

    const handleSavesProduct = () => {
        navigation.navigate('RetrieveSavedProducts')
    }

    const handleProductDetail = id => {
        navigation.navigate('ProductDetail', { id: id })
    }

    const handlePressIn = buttonPress => {
        buttonPress === 'liked' ? setIsLikePressed(!isLikePressed) : setIsSavedPressed(!isSavedPressed)
    }


    const handleToggleSavedProduct = (productId) => {
        try {
            setIsSavedPressed(false)
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
            setIsLikePressed(false)
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
        image: {
            width: 350,
            height: 350,
        },
        buttonPressIn: {
            transform: [{ scale: 2.00 }]
        },
        button: { justifyContent: 'center' },
        buttonText: { fontSize: 18, textAlign: 'center', color: 'black' }
    });

    return (<>
        <View style={{ paddingLeft: 8, paddingRight: 8, width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ alignSelf: 'flex-start', backgroundColor: '#E65C19', width: 60, height: 25 }} onPress={handleLogout}>
                <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}> {'Logout'}  </Text>
            </TouchableOpacity>
            {
                logic.getLoggedInUserRole() === 'seller' ?
                    <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: '#B51B75', width: 60, height: 25 }} onPress={handleCreateProduct}>
                        <Text>{'Create Product'}  </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: '#B51B75', width: 60, height: 25 }} onPress={handleSavesProduct}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}> {'Saves'}  </Text>
                    </TouchableOpacity>
            }
        </View>

        <ScrollView>
            {products.map(product => {
                const isLiked = product.likes.includes(logic.getLoggedInUserId())
                const isSaved = user?.saved.includes(product.id)
                return (
                    <View style={{ padding: 30 }} key={product.id} >
                        <View  >
                            <Image style={styles.image} source={{ uri: 'data:image/png;base64,' + product.images[0] }} onError={(error) => console.error('Error loading image:', error)} />
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => handleProductDetail(product.id)}>
                                <Text >Title: {product.title}</Text>
                            </TouchableOpacity>
                            <Text >Brand: {product.brand}</Text>
                            <Text >Price: ${product.price}</Text>
                            <Text>State: {product.state}</Text>
                            <View style={{ padding: 8, flexDirection: 'row', flex: 1, width: '100%', height: 40, justifyContent: 'space-between' }}>
                                <TouchableOpacity style={[{ backgroundColor: isLiked ? '#F2B705' : '#D9042B' }, isLikePressed ? styles.buttonPressIn : styles.button]} onPressIn={() => handlePressIn('liked')} onPressOut={() => handleToggleLikeProduct(product.id)} >
                                    <Text style={styles.buttonText} >{isLiked ? 'Dislike' : 'Like'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[{ backgroundColor: isSaved ? 'blue' : '#B430F0' }, isSavedPressed ? styles.buttonPressIn : styles.button]} onPressIn={() => handlePressIn('saved')} onPressOut={() => handleToggleSavedProduct(product.id)} >
                                    <Text style={styles.buttonText} >{isSaved ? 'Unsave' : 'Save'}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                )
            })}
        </ScrollView >
    </>

    );
};

export default Products