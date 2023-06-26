import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import LoginView from './src/views/LoginView';
import HomeView from './src/views/HomeView';
import ProductCreation from './src/views/ProductCreationView';
import ProductDetailScreen from './src/views/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'Home' : 'home-outline';
          } else if (route.name === 'Create Product') {
            iconName = focused ? 'add' : 'add-outline';
          }

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Create Product" component={ProductCreation} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Details"
            component={ProductDetailScreen}
            options={{title: 'Product Details'}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
