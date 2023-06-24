/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginView from './src/views/LoginView';
import HomeView from './src/views/HomeView';
import ProductCreation from './src/views/ProductCreationView';
import ProductDetail from './src/views/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
 
function App() {

  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
        {/* <LoginView/> */}
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Home"
          component={ProductCreation}
          options={{title: 'Create Product'}}
        />
        <Stack.Screen
          name="Home"
          component={ProductDetail}
          options={{title: 'Product Details'}}
        />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:2,
    borderColor:'green'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
