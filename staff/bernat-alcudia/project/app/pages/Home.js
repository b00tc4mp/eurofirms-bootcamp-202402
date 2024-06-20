import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { errors } from '../com';
import Products from '../components/Products';

const { ContentError } = errors

function Home({ searchQuery, onChangeText }) {


    onChangeText = () => {
        console.log('hola mundo')
    }


    return <ScrollView >

        <Products searchQuery={searchQuery} stamp={''} />

    </ScrollView>
}

export default Home