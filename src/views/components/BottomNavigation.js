import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f2f2f2',
      }}>
      <TouchableOpacity onPress={goBack} style={{padding: 10}}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
