import React, { Text } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginUser from './pages/LoginUser.js'
import RegisterBuyer from './pages/RegisterBuyer.js';
import RegisterSeller from './pages/RegisterSeller.js';
import Home from './pages/Home.js';
import ProductDetail from './components/ProductDetail.js';
import ModifyProduct from './components/ModifyProduct.js';
import CreateProduct from './components/CreateProduct.js';
import RetrieveSavedProducts from './components/RetrieveSavedProducts.js';
import MyTabs from './components/MyTabs.js';

const Stack = createStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUser">
        <Stack.Screen name="LoginUser" component={LoginUser} />
        <Stack.Screen name="RegisterSeller" component={RegisterSeller} />
        <Stack.Screen name="RegisterBuyer" component={RegisterBuyer} />
        <Stack.Screen name='tabs' component={MyTabs} options={{ headerShown: false, headerLeft: null }}></Stack.Screen>
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
        <Stack.Screen name='ModifyProduct' component={ModifyProduct} />
        <Stack.Screen name='CreateProduct' component={CreateProduct} />
        <Stack.Screen name='RetrieveSavedProducts' component={RetrieveSavedProducts} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
