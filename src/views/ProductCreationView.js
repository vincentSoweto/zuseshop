import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Button} from 'react-native-paper';

function ProductCreation({navigation}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [showMsg, setShowMsg] = useState(true);

  const handleAddProduct = () => {
    if (name.trim() === '' || price.trim() === '') {
      setError('Please fill in all fields');
      setShowMsg(true);
      return;
    }

    setShowMsg(false);
    // Dispatch action to add product
    setName('');
    setPrice('');
    setError('');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={text => setPrice(text)}
        keyboardType="numeric"
      />
      {showMsg && <Text style={styles.error}>{error}</Text>}
      <Button mode="contained" onPress={handleAddProduct} style={styles.button}>
        Add Product
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#2196F3',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ProductCreation;
