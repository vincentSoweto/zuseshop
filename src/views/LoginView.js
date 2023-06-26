import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
// import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';

function LoginView({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  function generateRandomToken(length) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      const randomChar = characters.charAt(randomIndex);
      token += randomChar;
    }

    return token;
  }

  const handleLogin = () => {
    if (email && password) {
      // Perform login validation or API call
      const token = generateRandomToken(10); // Replace with actual token received from login API response
      // dispatch(storeToken(token));
      navigation && navigation.navigate('Home');
      // const tokens = useSelector(state => state.token);
      // console.log(token === tokens);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />
      </View>
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        labelStyle={styles.buttonLabel}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputBox: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2196F3',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginView;
