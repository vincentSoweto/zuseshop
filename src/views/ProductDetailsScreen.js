import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import HomeView from './HomeView';
import ProductCreation from './ProductCreationView';

const Tab = createBottomTabNavigator();
let data = null;

const ProductDetail = ({route}) => {
  const {description, image_link, name, price} = data;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image_link}}
          style={styles.image}
          height={100}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R {price}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const ProductDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  data = item;
  const focusedRouteName = getFocusedRouteNameFromRoute(route);

  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: focusedRouteName !== 'Details'});
  }, [navigation, focusedRouteName]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Details') {
            iconName = focused ? 'info' : 'info-outline';
          }

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Details"
        component={ProductDetail}
        initialParams={{data: item}}
      />
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Create Product" component={ProductCreation} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  imageContainer: {
    flex: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 0.5,
    paddingTop: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  descriptionContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;
