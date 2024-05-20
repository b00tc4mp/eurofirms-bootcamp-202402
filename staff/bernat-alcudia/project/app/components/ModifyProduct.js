import { useState, useEffect, } from "react";
import logic from "../logic";
import { View, Image, StyleSheet, ScrollView, Button, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';



function ModifyProduct() {
    const [images, setImages] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
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

    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true, mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true });
            if (!result.canceled) {
                const base64Images = result.assets.map(asset => asset.base64)

                setImages(base64Images);
            }
        }
    };

    const takePicture = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true });
            if (!result.canceled) {
                const base64Images = result.assets.map(asset => asset.base64)

                setImages(base64Images);
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

    return <ScrollView>
        <View>
            <Button title="Select Image" onPress={selectImage} />
            <Button title="Take Picture" onPress={takePicture} />
            <Image style={styles.logo} source={{ uri: images }}></Image>
            <TextInput value={title} onChangeText={setTitle} placeholder="title" />
            <TextInput value={brand} onChangeText={setBrand} placeholder="brand" />
            <TextInput value={price} onChangeText={setPrice} placeholder="price" />
            <TextInput value={state} onChangeText={setState} placeholder="state" />
            <TextInput value={stock} onChangeText={setStock} placeholder="stock" />
            <TextInput value={description} onChangeText={setDescription} placeholder="description" />
            <Button title="Modify" onPress={handleModifyProduct} />
        </View>
    </ScrollView >


}

export default ModifyProduct