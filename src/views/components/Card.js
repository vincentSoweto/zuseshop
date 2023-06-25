import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Card({url, name, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: url}}
          style={styles.image}
          width={25}
          height={25}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R {price}</Text>
      </View>
    </View>
  );
}

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
  },
  imageContainer: {
    flex: 5,
    // width: '100%',
    height: 200,
    border: 2,
    borderColor: 'purple',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    border: 2,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  textContainer: {
    flex: 1,
    padding: 10,
    border: 2,
    borderColor: 'green',
    backgroundColor: 'green',
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
});

export default Card;
