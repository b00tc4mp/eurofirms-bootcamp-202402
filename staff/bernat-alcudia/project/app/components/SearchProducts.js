import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';



function SearchProduct({ onSearch }) {
    const [text, setText] = useState('')

    const handlerNewText = newText => {
        setText(newText)
        //storeData('search', newText)
        //onChangeText()
        onSearch(newText)
    }


    const styles = StyleSheet.create({
        input: {
            width: '200%',
            padding: 10,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            alignSelf: 'center'
        },
        view: {
            width: '100%',
            flex: 1,
            justifyContent: 'center'
        }
    })

    return (<View style={styles.view}><TextInput onChangeText={newText => handlerNewText(newText)} style={styles.input} placeholder='search products' defaultValue='' /></View>)
}

export default SearchProduct

