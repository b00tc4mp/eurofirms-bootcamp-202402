import React, { useMemo, useState, useEffect } from 'react';
import logic from '../logic';
import { View, Image, StyleSheet, ScrollView, Button, TextInput, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioGroup from 'react-native-radio-buttons-group';
import * as ImagePicker from 'expo-image-picker';


const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    radioButtons: {
        padding: 10
    }
});

function CreateProduct({ }) {
    const [images, setImages] = useState([])
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [brand, setBrand] = useState(null)
    const [price, setPrice] = useState(null)
    const [state, setState] = useState(null)
    const [stock, setStock] = useState(null)

    const [selectedId, setSelectedId] = useState('1');

    const navigation = useNavigation()

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'new',
            value: 'new',
            selected: true
        },
        {
            id: '2',
            label: 'used',
            value: 'used',
            selected: false
        }
    ]), []);

    const selectedRadioButton = radioButtons.find(button => button.id === selectedId)



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

    const handleCreateProduct = () => {
        try {
            logic.createProduct(images, title, description, brand, +price, selectedRadioButton.value, +stock)
                .then(() => {
                    alert('created product')
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
            <View>
                {images.length > 0 ? images.map((image, index) => (
                    <>
                        <Image key={index} style={styles.logo} source={{ uri: 'data:image/png;base64,' + image }}></Image>
                        <Button title='Delete Image' onPress={() => handleDeleteImage(image)}></Button>
                    </>
                )) : <Image style={styles.logo} source={{ uri: 'https://fakeimg.pl/200x200/cccccc/d61a1a?font=bebas' }}></Image>
                }
            </View>
            <Text>Title:</Text>
            <TextInput value={title} onChangeText={setTitle} placeholder='title' />
            <Text>Brand:</Text>
            <TextInput value={brand} onChangeText={setBrand} placeholder='brand' />
            <Text>Price:</Text>
            <TextInput keyboardType='numeric' value={price} onChangeText={setPrice} placeholder='price' />
            <RadioGroup labelStyle={styles.radioButtons} layout='row' radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId} />
            <Text>Stock:</Text>
            <TextInput keyboardType='numeric' value={stock} onChangeText={setStock} placeholder='stock' />
            <Text>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} placeholder='description' />
            <Button title='Create' onPress={handleCreateProduct} />
        </View>
    </ScrollView >

}

export default CreateProduct