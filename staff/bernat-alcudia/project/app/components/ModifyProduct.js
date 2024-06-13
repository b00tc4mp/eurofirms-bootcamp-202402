import { useMemo, useState, useEffect, } from 'react';
import logic from '../logic';
import { View, Image, StyleSheet, ScrollView, Button, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




function ModifyProduct() {
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [state, setState] = useState(null)
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState('')

    const [selectedId, setSelectedId] = useState('');

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'new',
            value: 'new',
            selected: false
        },
        {
            id: '2',
            label: 'used',
            value: 'used',
            selected: false
        }
    ]), []);

    const selectedRadioButton = radioButtons.find(button => button.id === selectedId)

    const isSelected = radioButtons.selected


    const route = useRoute()

    const { id: productId } = route.params

    const navigation = useNavigation()

    const styles = StyleSheet.create({
        logo: {
            width: 66,
            height: 58,
        },
        radioButtons: {
            padding: 10
        }
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
                    product.state === 'new' ? setSelectedId('1') : setSelectedId('2')

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
            logic.modifyProduct(productId, images, title, description, brand, +price, selectedRadioButton.value, +stock)
                .then(() => {
                    alert('modified product')
                    navigation.navigate('tabs')
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
                        <TouchableOpacity style={{ paddingLeft: 50 }} onPress={() => handleDeleteImage(image)}>
                            <MaterialCommunityIcons name='close' size={25} color={'black'} />
                        </TouchableOpacity>
                        <Image key={index} source={{ uri: 'data:image/png;base64,' + image }} style={styles.logo} onError={(error) => console.error('Error loading image:', error)} />
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
            <RadioGroup labelStyle={styles.radioButtons} layout='row' radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId} />
            <Text>Stock:</Text>
            <TextInput keyboardType='numeric' value={stock} onChangeText={setStock} placeholder='stock' />
            <Text>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} placeholder='description' />
            <TouchableOpacity style={{ paddingLeft: 200 }} onPress={handleModifyProduct}>
                <MaterialCommunityIcons name='pencil-plus' size={30} color={'black'} />
            </TouchableOpacity>
        </View>
    </ScrollView >


}

export default ModifyProduct