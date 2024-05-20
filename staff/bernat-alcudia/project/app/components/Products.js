import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import logic from '../logic';
import CreateProduct from './CreateProduct';

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
});

function Products({ stamp }) {
    const [products, setProducts] = useState([])




    const navigation = useNavigation()

    const handleCreateProduct = () => {
        navigation.navigate('CreateProduct')
    }

    const handleProductDetail = id => {
        navigation.navigate('ProductDetail', { id: id })
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
    }))

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
                        </View>
                    </View>
                )
            })}
            <Button title="Create Product" onPress={handleCreateProduct}></Button>
        </ScrollView>


    );
};

export default Products