import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'
import TextBox from './components/TextBox'
import Button from './components/SubmitButton';

function LoginView() {
    const [valid, setValid] = useState(false)


    const onclick = () =>{
        if(valid) {

        }
        else {

        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.inputBox}>
            <TextBox
            label={'email'} 
            text={'e.g dms@gmail.com'}
            type={'email'}
            password={false}
            />
        </View>
        <View>
        <TextBox
            text={'e.g dms@gmail.com'}
            password={true}

        />
        </View>
        <View>
            <Button 
                text={'Submit'}
                onpress={onclick}
            />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor:'red',
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox:{

    },
});

export default LoginView