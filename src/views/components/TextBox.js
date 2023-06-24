import React, { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function TextBox(props) {
    const [text, setText] = React.useState('');

    useEffect(()=>{
        setText(props.text)
    },[])
    return (
        <View style={[styles.textInput,props.style]}>
            <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            keyboardType={props.type}
            secureTextEntry={props.password}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    input:{

    },
    textInput:{

    },
});

export default TextBox