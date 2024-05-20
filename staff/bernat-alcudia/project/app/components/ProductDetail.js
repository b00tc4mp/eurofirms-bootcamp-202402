import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import logic from '../logic';
import { useRoute, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
});


function ProductDetail() {
    const [product, setProduct] = useState(null)

    const navigation = useNavigation()




    const route = useRoute()

    const { id: productId } = route.params

    const handleModifyProductDetail = () => {
        navigation.navigate('ModifyProduct', { id: productId })
    }

    const showProductDetails = () => {
        try {
            logic.retrieveProductDetails(productId)
                .then(product => {
                    setProduct(product)
                    console.log(product)
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

    return <ScrollView >
        <View key={product.id} >
            {product.images.map((image, index) => (
                <Image key={index} source={{ uri: 'data:image/png;base64,' + image }} style={styles.logo} onError={(error) => console.error('Error loading image:', error)} />
            ))}
        </View>
        <View >
            <Text>{product.date}</Text>
            <Text>{product.title}</Text>
            <Text>{product.brand}</Text>
            <Text>${product.price}</Text>
            <Text>{product.state}</Text>
            <Text>{product.stock}</Text>
            <Text>{product.description}</Text>
            <Button title='Modify' onPress={handleModifyProductDetail}></Button>
        </View>
    </ScrollView>


};

export default ProductDetail