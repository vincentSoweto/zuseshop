import React from 'react'
import { View,Button, StyleSheet } from 'react-native'

function button(props) {
  return (
   <View style={styles.container}>
    <Button 
        title={props.text}
        color={'red'}
        onPress={props.onpress}
    />
   </View>
  )
}

const styles = StyleSheet.create({
    container:{    
    
    }
})
export default button