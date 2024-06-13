import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import logic from '../logic';
import { utils } from '../com'
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
                            .then(() => navigation.navigate('tabs'))
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
            <View style={{ padding: 8, flexDirection: 'row', flex: 1, width: '100%', height: 40, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ paddingLeft: 70 }} onPress={handleModifyProductDetail}>
                    {isAuthor && <MaterialCommunityIcons name='pencil' size={25} color={'black'} />}
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingRight: 20 }} onPress={handleDeleteProduct}>
                    {isAuthor && <MaterialCommunityIcons name='trash-can-outline' size={25} color={'black'} />}
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView >


};

export default ProductDetail