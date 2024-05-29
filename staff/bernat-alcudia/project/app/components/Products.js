import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import logic from '../logic';
import CreateProduct from './CreateProduct';

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    button: {
        like: {
            color: 'green'
        },
        dislike: {
            color: 'red'
        }
    }
});


function Products({ stamp }) {
    const [products, setProducts] = useState([])

    const navigation = useNavigation()

    const handleCreateProduct = () => {
        navigation.navigate('CreateProduct')
    }

    const handleSavesProduct = () => {
        navigation.navigate('RetrieveSavedProducts')
    }

    const handleProductDetail = id => {
        navigation.navigate('ProductDetail', { id: id })
    }


    const handleToggleSavedProduct = (productId) => {
        try {
            logic.toggleSavedProduct(productId)
                .then(() => {
                    refreshProducts()
                })
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

    // const role = logic.getLoggedInUserRole()

    return (
        <ScrollView>
            {products.map(product => {
                return (
                    <View key={product.id} >
                        <View >
                            <Image style={styles.logo} source={{ uri: 'data:image/png;base64,' + product.images[0] }} onError={(error) => console.error('Error loading image:', error)} />
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => handleProductDetail(product.id)}>
                                <Text >Title: {product.title}</Text>
                            </TouchableOpacity>
                            <Text >Brand: {product.brand}</Text>
                            <Text >Price: ${product.price}</Text>
                            <Text>State: {product.state}</Text>
                            <Button style={styles.button.like} onPress={() => handleToggleLikeProduct(product.id)} title='Like'></Button>
                            <Button onPress={() => handleToggleSavedProduct(product.id)} title='Save'></Button>

                        </View>
                    </View>
                )
            })}

            {logic.getLoggedInUserRole() === 'seller' ?
                <Button title='Create Product' onPress={handleCreateProduct}></Button>
                :
                <Button title='Saves' onPress={handleSavesProduct}></Button>}
        </ScrollView>


    );
};

export default Products