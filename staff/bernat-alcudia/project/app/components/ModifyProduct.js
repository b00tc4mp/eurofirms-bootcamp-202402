import { useState, useEffect, } from 'react';
import logic from '../logic';
import { View, Image, StyleSheet, ScrollView, Button, TextInput, Alert, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';



function ModifyProduct() {
    const [images, setImages] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState(0)
    const [state, setState] = useState('')
    const [stock, setStock] = useState('')


    const route = useRoute()

    const { id: productId } = route.params

    const navigation = useNavigation()

    const styles = StyleSheet.create({
        logo: {
            width: 66,
            height: 58,
        },
    });

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
                const { status: mediaLibraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (cameraStatus !== 'granted' || mediaLibraryStatus !== 'granted') {
                    Alert.alert('Insufficient permissions', 'Permissions are required to access the camera and photo gallery.');
                }
            }
        })();
    }, []);

    const showProductDetails = () => {
        try {
            logic.retrieveProductDetails(productId)
                .then(product => {
                    setImages(product.images)
                    setTitle(product.title)
                    setDescription(product.description)
                    setBrand(product.brand)
                    setPrice(product.price.toString())
                    setState(product.state)
                    setStock(product.stock.toString())
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

    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true, mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true });
            if (!result.canceled) {
                const base64Images = result.assets.map(asset => asset.base64)
                const newImages = images.slice()
                base64Images.forEach(image => newImages.push(image))
                setImages(newImages);
            }
        }
    };

    const takePicture = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true });
            if (!result.canceled) {
                const base64Images = result.assets.map(asset => asset.base64)
                const newImages = images.slice()
                base64Images.forEach(image => newImages.push(image))
                setImages(newImages);
            }
        }
    };

    const handleModifyProduct = () => {
        try {
            logic.modifyProduct(productId, images, title, description, brand, +price, state, +stock)
                .then(() => {
                    alert('modified product')
                    navigation.navigate('Home')
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

    const handleDeleteImage = urlImage => {
        const newImages = images.filter(image => image !== urlImage)
        setImages(newImages);
    }

    return <ScrollView>
        <View>
            <Button title='Select Image' onPress={selectImage} />
            <Button title='Take Picture' onPress={takePicture} />
            <View >

                {images?.map((image, index) => (
                    <>
                        <Image key={index} source={{ uri: 'data:image/png;base64,' + image }} style={styles.logo} onError={(error) => console.error('Error loading image:', error)} />
                        <Button title='Delete Image' onPress={() => handleDeleteImage(image)}></Button>
                    </>
                ))}
            </View>
            <Text>Title:</Text>
            <TextInput value={title} onChangeText={setTitle} placeholder='title' />
            <Text>Brand:</Text>
            <TextInput value={brand} onChangeText={setBrand} placeholder='brand' />
            <Text>Price:</Text>
            <TextInput keyboardType='numeric' value={price} onChangeText={setPrice} placeholder='price' />
            <Text>State:</Text>
            <TextInput value={state} onChangeText={setState} placeholder='state' />
            <Text>Stock:</Text>
            <TextInput keyboardType='numeric' value={stock} onChangeText={setStock} placeholder='stock' />
            <Text>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} placeholder='description' />
            <Button title='Modify' onPress={handleModifyProduct} />
        </View>
    </ScrollView >


}

export default ModifyProduct