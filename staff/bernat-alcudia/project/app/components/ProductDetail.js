import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import logic from '../logic';
import { utils } from '../com'
import { useRoute, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 350,
    },
});


function ProductDetail() {
    const [product, setProduct] = useState(null)


    const navigation = useNavigation()

    const route = useRoute()

    const { id: productId } = route.params

    const handleDeleteProduct = () => {
        Alert.alert('title:', 'delete product?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Accept',
                onPress: () => {
                    try {
                        logic.removeProduct(productId)
                            .then(() => navigation.navigate('Home'))
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
                },
                style: 'accept',
            },
        ])
    }

    const handleModifyProductDetail = () => {
        navigation.navigate('ModifyProduct', { id: productId })
    }

    const showProductDetails = () => {
        try {
            logic.retrieveProductDetails(productId)
                .then(product => {
                    setProduct(product)
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


    useEffect(() => {
        showProductDetails()
    }, [])

    if (!product) return null

    const isAuthor = product.author.id === logic.getLoggedInUserId()

    return <ScrollView >
        <View style={{ padding: 30 }} key={product.id} >
            {product.images.map((image, index) => (
                <Image key={index} source={{ uri: 'data:image/png;base64,' + image }} style={styles.image} onError={(error) => console.error('Error loading image:', error)} />
            ))}
        </View>
        <View style={{ padding: 30 }}>
            <Text>Last Modified:{utils.formatDate(new Date(product.date))}</Text>
            <Text> Title: {product.title}</Text>
            <Text> Brand: {product.brand}</Text>
            <Text>Price: ${product.price}</Text>
            <Text>State: {product.state}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Description: {product.description} </Text>
            {isAuthor && <Button color={'#C40C0C'} title='Delete' onPress={handleDeleteProduct}></Button>}
            {isAuthor && <Button color={'#F8D082'} title='Modify' onPress={handleModifyProductDetail}></Button>}
        </View>
    </ScrollView >


};

export default ProductDetail