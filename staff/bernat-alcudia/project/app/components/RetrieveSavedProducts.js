import logic from '../logic';
import React, { useEffect, useState } from 'react';
import { utils } from '../com'
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
});

function RetrieveSavedProducts() {
    const [products, setProducts] = useState([])



    useEffect(() => {
        showSavedProducts()
    }, [])


    const showSavedProducts = () => {
        try {
            logic.retrieveUserProductSaved()
                .then(products => {
                    setProducts(products)
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



    if (!products) return null

    return <ScrollView >
        {products.map(product => {
            return <>
                <View key={product.id} >
                    {product.images.map((image, index) => (
                        <Image key={index} source={{ uri: 'data:image/png;base64,' + image }} style={styles.logo} onError={(error) => console.error('Error loading image:', error)} />
                    ))}
                </View>
                <View >
                    <Text>{utils.formatDate(new Date(product.date))}</Text>
                    <Text>{product.title}</Text>
                    <Text>{product.brand}</Text>
                    <Text>${product.price}</Text>
                    <Text>{product.state}</Text>
                    <Text>{product.stock}</Text>
                    <Text>{product.description}</Text>
                </View>
            </>
        })}
    </ScrollView >



}

export default RetrieveSavedProducts